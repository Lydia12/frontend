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
      this.props.onAddConductor(this.state);
      this.setState({
          dni: '', nombre: '', apellido: ''
      });  
    }
    render(){
        return(
            <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td></td>
                <td></td>
                <td><Button variant="success" onClick={this.clickAdd}>Añadir conductor</Button></td>
                <td><Button  >Ver carnet</Button></td>
                <td><Button href="http://fis-puntos-ui.herokuapp.com/" >Gestionar puntos</Button></td>
                <td><Button href="https://multas-ui.herokuapp.com/" >Ver multas</Button></td>
            </tr>
            
        );
    }
}

export default NewConductor;