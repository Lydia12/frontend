class ConductoresApi{
    /*static API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://api-puntos-dgt.herokuapp.com/api/v1" */
     static API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://aseguradora-conductores.herokuapp.com" 
    static requestHeaders(){
        return{}
    }

    static getAllConductores(){
         const headers = this.requestHeaders(); 
        const request = new Request(ConductoresApi.API_BASE_URL + "/traffic_management?apikey=844e6444-75cf-4a97-8eec-d7852d4f6e31", { 
            
           /* const request = new Request(ConductoresApi.API_BASE_URL + "/puntos", { */
            method: 'GET',
            headers: headers
            /*headers: {'x-api-key': 'eiWee8ep9due4deeshoa8Peichai8Eih'}  */
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    
}

export default ConductoresApi;