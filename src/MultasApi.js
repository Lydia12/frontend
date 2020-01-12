class MultasApi{
    static API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://apimultas.herokuapp.com/api/v1" 
    static requestHeaders(){
        return{}
    }

    static getAllMultas(){
         /*const headers = this.requestHeaders();  */
        
           const request = new Request(MultasApi.API_BASE_URL + "/multas?apikey=3adc97fe-74b6-4702-938b-afffd4011f65", {  
            method: 'GET',
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    
}

export default MultasApi;