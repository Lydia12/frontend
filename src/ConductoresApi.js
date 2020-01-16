
class ConductoresApi{
    /*static API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://api-puntos-dgt.herokuapp.com/api/v1" */
     static API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://aseguradora-conductores.herokuapp.com" 
    static requestHeaders(){
        return{}
    }

    static getAllConductores(){
         const headers = this.requestHeaders(); 
         
        const request = new Request(ConductoresApi.API_BASE_URL + "/api/v1/carnets?apikey=373db4ad-cecc-44bd-8b31-ebae590bfb37", { 
            
           /* const request = new Request(ConductoresApi.API_BASE_URL + "/puntos", { */
            method: 'GET',
            headers: headers
            /*headers: {'x-api-key': 'eiWee8ep9due4deeshoa8Peichai8Eih'}  */
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static delete(conductor, dni){
        // const headers = this.requestHeaders(); 
       const request = new Request(ConductoresApi.API_BASE_URL + "/api/v1/carnets/remove/" + conductor.DNI +"?apikey=373db4ad-cecc-44bd-8b31-ebae590bfb37", { 
           
          /* const request = new Request(ConductoresApi.API_BASE_URL + "/puntos", { */
           method: 'DELETE',
           headers: {'Content-Type' : 'text/plain; charset=utf-8',}
           /*headers: {'x-api-key': 'eiWee8ep9due4deeshoa8Peichai8Eih'}  */
       });

       return fetch(request).then(response => {
           return response.json();
       });
   }

    static addConductor(dni, nombre, apellido){
       
        
       const request = new Request(ConductoresApi.API_BASE_URL + "/api/v1/carnets?apikey=373db4ad-cecc-44bd-8b31-ebae590bfb37", { 
           method: 'POST',
           body: JSON.stringify({name: nombre, surname: apellido, age:'' ,DNI:dni,vehicleType:'', valid:true}),
           headers: {
               'Content-Type':'application/json', 
           }
           
       });

       return fetch(request).then(response => {
           return response;
       });

       
   }


    
}

export default ConductoresApi;