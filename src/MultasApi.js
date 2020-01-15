class MultasApi{
    static API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://apimultas.herokuapp.com/api/v1" 
    static requestHeaders(){
        return{}
    }

    static getAllMultas(dni){
          const headers = this.requestHeaders();   
           const request = new Request(MultasApi.API_BASE_URL + "/multas/numMultas/"+dni+"?apikey=fbce18d8-2f6a-4e40-9a94-d8551eab2362", {  
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }
}



export default MultasApi;