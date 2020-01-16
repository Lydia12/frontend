import React from 'react';
import Conductor from './Conductor.js';
import NewConductor from './NewConductor.js'
import EditConductor from './EditConductor.js';
import Alert from './Alert.js';
import ConductoresApi from './ConductoresApi.js';
import PuntosApi from './PuntosApi.js';
import MultasApi from './MultasApi.js';


class Conductores extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errorInfo: null,
            conductores: [],
            isEditing: {},
            carnetYpuntos: []
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
                            this.setState({
                                conductores: resultCarnet.map(x => Object.assign(x, resultPuntos.result.find(y => y.dni === x.DNI)))
                            }) 
                            let updateConductores = this.state.conductores;

                            let promises = updateConductores.map(function (conductor) {
                                return MultasApi.getAllMultas(conductor.DNI)
                                        .then(         
                                            (multasResult) => {
                                                conductor.multas = multasResult.length;
                                                //alert(conductor.dni +": "+conductor.multas)  
                                            }
                                        )
                            });
        
                            Promise.all(promises).then((result => {
                                this.setState({conductores: updateConductores});
                            }));     
                    }
                    )      
                   

                },
                (error) => {
                    this.setState({
                        errorInfo: "Problem with connection to server"
                    })
                }
            )
    }      

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

    comprobarDNI(dni) {
        var numero
        var letr
        var letra
        var expresion_regular_dni

        expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

        if(expresion_regular_dni.test (dni) === true){
           numero = dni.substr(0,dni.length-1);
           letr = dni.substr(dni.length-1,1);
           numero = numero % 23;
           letra='TRWAGMYFPDXBNJZSQVHLCKET';
           letra=letra.substring(numero,numero+1);
          if (letra!==letr.toUpperCase()) {
            return true;
           }
        }else{

           return false;
         }   
}

    handleDelete(conductor, dni){
        ConductoresApi.delete(conductor, dni).then(
            this.setState(prevState => {
                this.setState(prevState => ({
                    conductores: prevState.conductores.filter((c) => c.dni !== conductor.DNI)
                }))
            }
            )
        )
        MultasApi.delete(conductor, dni).then(
            this.setState(prevState => {
                this.setState(prevState => ({
                    conductores: prevState.conductores.filter((c) => c.dni !== conductor.DNI)
                }))
            }
            )
        )
         PuntosApi.delete(conductor.dni).then(
            this.setState(prevState => {
                this.setState(prevState => ({
                    conductores: prevState.conductores.filter((c) => c.dni !== conductor.DNI)
                }))
            }
         ))
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

    comprobarDNI(dni) {
        var numero
        var letr
        var letra
        var expresion_regular_dni
       
        expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
       
        if(expresion_regular_dni.test (dni) === true){
           numero = dni.substr(0,dni.length-1);
           letr = dni.substr(dni.length-1,1);
           numero = numero % 23;
           letra='TRWAGMYFPDXBNJZSQVHLCKET';
           letra=letra.substring(numero,numero+1);
          if (letra!==letr.toUpperCase()) {
            return true;
           }
        }else{
            
           return false;
         }   
}

    
    addConductor(conductor, dni, nombre, apellido) {

        let cenglish = {
            name: conductor.nombre,
            surname: conductor.apellido,
            DNI: conductor.dni,
            puntos_actuales: 8,
            multas: 0
        }

        if(dni !=="" && nombre !=="" && apellido!==""){


            if(!this.comprobarDNI(dni)){

                this.setState({
                    errorInfo:"Formato de DNI no válido"
                })

            }else if(this.comprobarDNI(dni)){
                let regex = new RegExp("^[ñíóáéú a-zA-Z ]+$");

                if (!regex.test(nombre) || !regex.test(apellido)) {
                    this.setState({
                        errorInfo:"El nombre y el apellido solo deben contener letras"
                    })
                    return;
                }
        ConductoresApi.addConductor(dni, nombre, apellido).then(
            this.setState(prevState => {
                const conductores = prevState.conductores;
                console.log(conductor);
                console.log(cenglish);
                console.log(conductores);
                if (!conductores.find(c => c.DNI === cenglish.DNI)){
                    return({
                        conductores: [...prevState.conductores, cenglish] 
                    });
                }
                return({
                    errorInfo: 'Conductor ya existe'
                });
                })
                 
            )
        PuntosApi.addPuntos(dni);
        
        }else{

            this.setState({
                errorInfo:"Los campos no pueden estar vacíos"
            })
        }

    }
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