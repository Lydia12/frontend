class ConductoresApi{
    static API_BASE_URL = "https://api-puntos-dgt.herokuapp.com/api/v1"

    static requestHeaders(){
        return{}
    }

    static getAllConductores(){
        const headers = this.requestHeaders();
        const request = new Request(ConductoresApi.API_BASE_URL + "/puntos", {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }
}

export default ConductoresApi;