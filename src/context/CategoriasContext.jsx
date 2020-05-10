import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';

// crear el context


export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {

    const [categorias,setCategorias] = useState([]);


    useEffect(()=>{
        
        const obtenerCategorias = async () => {
            const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const res = await axios.get(URL);
            //const categorias = res.json();
            setCategorias(res.data.drinks);
            
        }
        obtenerCategorias();
    },[])

    return(
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );

}

export default CategoriasProvider;