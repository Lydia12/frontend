import React from 'react';
import Conductor from './Conductor.js';
import NewConductor from './NewConductor.js'
import EditConductor from './EditConductor.js';
import Alert from './Alert.js';
import ConductoresApi from './ConductoresApi.js';
import PuntosApi from './PuntosApi.js';

class Conductores extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errorInfo: null,
            /*conductores: this.props.conductores, */
            conductores: [],
            puntos: [],
            multas: [],
            isEditing: {}
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCloseError = this.handleCloseError.bind(this);
        this.addConductor = this.addConductor.bind(this);
    }
    
    componentDidMount(){
        ConductoresApi.getAllConductores()
            .then(
                (resultCarnet) => {
                    PuntosApi.getAllPuntos()
                    .then(
                        (resultPuntos) => {
                             
                        }
                    )
                
                    this.setState({
                        conductores: resultCarnet 
                    })
                },
                (error) => {
                    this.setState({
                        errorInfo: "Problem with connection to server"
                    })
                }
            )
    }

    /*
    componentDidMount(){
        ConductoresApi.getAllConductores()
        .then(
            (resultCarnet) => {
                PuntosApi.getAllPuntos()
                .then(
                    (resultPuntos) => {
                        /*geht alle punkte durch und je nach dni fügt es dem konduktor zu*/  /*
                        conductores.filter((c) => c.dni !== conductor.dni)
                        if (!conductores.find(c => c.dni === conductor.dni)){

                        const conductoresAndPuntos = resultCarnet.map((carnet) =>
                            if(carnet.DNI === resultPuntos.result.dni){

                            }
                        );

                    this.setState({
                        conductores: resultConductores
                    })
            },
            (error) => {
                this.setState({
                    errorInfo: "Problem with connection to server"
                })
            }
                )
    } }
    */

    handleEdit(conductor){
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [conductor.dni]: conductor}
        }));
    }
    

    handleCloseError(){
        this.setState({
            errorInfo: null
        });
    }

    handleCancel(dni, conductor){
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[dni];
            return {
                isEditing: isEditing
            }
        })
    }

    handleDelete(conductor){
        this.setState(prevState => ({
            conductores: prevState.conductores.filter((c) => c.dni !== conductor.dni)
        }))
    }

    handleChange(dni, conductor){
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [dni]: conductor}
        }))
    }

    handleSave(dni, conductor){
        this.setState(prevState =>{
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[dni];

            if (dni===conductor.dni){
                const conductores = prevState.conductores;
                const pos = conductores.findIndex(c => c.dni === conductor.dni);
                return {
                    conductores: [...conductores.slice(0,pos), Object.assign({}, conductor), ...conductores.slice(pos+1)],
                    isEditing: isEditing
                }
            }
 
            return{
                errorInfo: "Cannot edit name",
            }
        });
    }

    addConductor(conductor) {
        this.setState(prevState => {
            const conductores = prevState.conductores;
            if (!conductores.find(c => c.dni === conductor.dni)){
                return({
                    conductores: [...prevState.conductores, conductor] 
                });
            }
            return({
                errorInfo: ' Conductor ya existe'
            });
        });
    }

    render(){
        return(
            <div>
                <Alert message={this.state.errorInfo} onClose={this.handleCloseError}></Alert>
             <table className="table">
                <thead>
                    <tr>
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Puntos</th>
                        <th>Multas</th>
                    </tr>
                </thead>
                <tbody>
                <NewConductor onAddConductor={this.addConductor}/>
                {this.state.conductores.map((conductor) =>
                    ! this.state.isEditing[conductor.dni] ?
                    <Conductor key={conductor.dni} conductor={conductor} 
                        onEdit={this.handleEdit}
                        onDelete={this.handleDelete}/>
                    :
                    <EditConductor key={conductor.dni} conductor={this.state.isEditing[conductor.dni]} 
                        onCancel={this.handleCancel.bind(this, conductor.dni)}
                        onChange={this.handleChange.bind(this, conductor.dni)}
                        onSave={this.handleSave.bind(this, conductor.dni)} />
                )}   
            </tbody>
            </table>
            </div>
        );
    }
}



export default Conductores;