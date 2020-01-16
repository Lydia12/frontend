class MultasApi{
    static API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://apimultas.herokuapp.com/api/v1" 
    static requestHeaders(){
        return{}
    }

    static getAllMultas(dni){
          const headers = this.requestHeaders();   
           const request = new Request(MultasApi.API_BASE_URL + "/multas/numMultas/"+dni+"?apikey=1b72fe87-acce-4e61-8f93-e8e83bc2ebd5", {  
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }
}



export default MultasApi;