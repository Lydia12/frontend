import React from 'react';
import Button from 'react-bootstrap/Button'

function Conductor(props){
    
    return(
    <tr>
        <td>{props.conductor.DNI}</td>
        <td>{props.conductor.name}</td>
        <td>{props.conductor.surname}</td>
        <td>{props.conductor.puntos_actuales}</td>
        <td>{props.conductor.multas}</td>
        <td>
            <Button    variant="danger" onClick={() => props.onDelete(props.conductor)}>Eliminar conductor</Button>
        </td>
        <td>
            <button className="btn btn-primary" onClick={() => props.onEdit(props.conductor)}>Recuperar puntos</button>
        </td>
        <td>
            <button className="btn btn-primary" onClick={() => props.onHistorial(props.conductor)}>Historial de puntos</button>
        </td>
    </tr>
    );
}

export default Conductor;