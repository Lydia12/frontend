import React from 'react';
import Button from 'react-bootstrap/Button';

class NewConductor extends React.Component {
    constructor(props){
        super(props);
        this.state = {dni: '', nombre: '', apellido: ''};
        this.changeConductor = this.changeConductor.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
    }

    changeConductor(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    
    clickAdd(){
        let dni=document.getElementById('dni').value;
        let nombre=document.getElementById('nombre').value;
        let apellido=document.getElementById('apellido').value;
         
  
  
        this.props.onAddConductor(this.state, dni, nombre, apellido );
        this.setState({
            dni: '', nombre: '', apellido: '', puntos: '', multas: ''
        });   

        document.getElementById('dni').value=""
        document.getElementById('nombre').value=""
        document.getElementById('apellido').value=""
       
      
       
    }
    render(){
        return(
            <tr>
                
                <td><input className="form-control" id="dni" name="dni" value={this.state.dni} onChange={this.changeConductor}/></td>
                <td><input className="form-control" id="nombre" name="nombre" value={this.state.nombre} onChange={this.changeConductor}/></td>
                <td><input className="form-control" id="apellido" name="apellido" value={this.state.apellido} onChange={this.changeConductor}/></td>
                
                <td> </td>
                <td> </td>
                <td><Button variant="success" onClick={this.clickAdd}>Añadir conductor</Button></td>
                <td><Button href="https://fis-puntos-ui.herokuapp.com/" >Gestionar puntos</Button></td>
                <td><Button href="https://multas-ui.herokuapp.com/" >Ver multas</Button></td>
                <td><Button href="https://frontend-api-carnet.herokuapp.com/" >Ver carnet</Button></td>
            </tr>
            
        );
    }
}

export default NewConductor;