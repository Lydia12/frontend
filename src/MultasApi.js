class MultasApi{
    static API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://apimultas.herokuapp.com/api/v1" 
    static requestHeaders(){
        return{}
    }

    static getAllMultas(dni){
          const headers = this.requestHeaders();   
           const request = new Request(MultasApi.API_BASE_URL + "/multas/numMultas/"+dni+"?apikey=dd94326d-dd29-448d-85d6-7bb335eb9151", {  
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }
}



export default MultasApi;