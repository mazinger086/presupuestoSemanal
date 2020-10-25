import React, {Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = () => {

    //definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //funcion que lee el presupuesto
    const definirPresupuesto = e =>{       
       guardarCantidad(parseInt(e.target.value , 10))
    }

    //Submit para deinir el prefinir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN( cantidad ) ){
            guardarError(true);
            return;
        }
        //Si se pasa la validacion
        guardarError(false)
    }


    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu Presupuesto"
                    onChange={definirPresupuesto}
                
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                   
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;