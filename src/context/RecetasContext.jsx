import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {


    const [recetas,setRecetas] = useState([]);
    const [busquedaReceta, setBusquedaReceta] = useState({
        nombre:'',
        categoria:''
    });

    const [consultar, setConsultar] = useState(false);

    useEffect(()=>{
        if(consultar) {
            const obtenerRecetas = async () => {

                const {nombre,categoria} = busquedaReceta;
                const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const res = await axios.get(URL);
                setRecetas(res.data.drinks);
                
                
                
            }
            obtenerRecetas();
        }
        
    },[busquedaReceta,consultar])

    return(
        <RecetasContext.Provider
            value={{
                recetas,
                setBusquedaReceta,
                setConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider;

