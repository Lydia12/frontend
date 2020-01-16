import React from 'react';

function Conductor(props){
    return(
    <tr>
        <td>{props.conductor.DNI}</td>
        <td>{props.conductor.name}</td>
        <td>{props.conductor.surname}</td>
        <td>{props.conductor.puntos_actuales}</td>
        <td>{props.conductor.multas}</td>
        <td>
        <button type="button" class="btn btn-danger" onClick={() => props.onDelete(props.conductor.DNI)}>Recuperar puntos</button>
        </td>
        <td>
            <button className="btn btn-primary">Historial de puntos</button>
        </td>
    </tr>
    );
}

export default Conductor;