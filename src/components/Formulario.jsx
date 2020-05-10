import React,{useContext,useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {
    
    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    });

    const {categorias} = useContext(CategoriasContext);
    const {setBusquedaReceta,setConsultar} = useContext(RecetasContext);
    
    const obtenerDatosReceta = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }

    return ( 
        <form className='col-12' onSubmit={ e => {
            e.preventDefault();
            setBusquedaReceta(busqueda);
            setConsultar(true);
        } }>
            <fieldset className='text-center' >
                <legend>Busca bebidas por categoría o ingredientes</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input type="text" onChange={obtenerDatosReceta} name='nombre' placeholder='Buscar por ingrediente'  className="form-control"/>
                </div>
                <div className="col-md-4">
                    <select name="categoria" className='form-control' onChange={obtenerDatosReceta}>
                        <option value="">-- Seleccione Categoría--</option>
                        {
                            categorias.map(categoria => (
                                <option key={categoria.strCategory} value={categoria.strCategory} >{categoria.strCategory}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="submit" className="btn btn-block btn-outline-danger " value="Buscar Bebidas"/>
                </div>
            </div>
        </form> 
    );
}
 
export default Formulario;