class PuntosApi{
    static API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://api-puntos-dgt.herokuapp.com/api/v1" 
    static requestHeaders(){
        return{}
    }

    static getAllPuntos(){
         /*const headers = this.requestHeaders();  */
        
           const request = new Request(PuntosApi.API_BASE_URL + "/puntos", {  
            method: 'GET',
            headers: {'x-api-key': 'eiWee8ep9due4deeshoa8Peichai8Eih'}  
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    


    static  recuperarPuntos(dni, puntos){
            const request = new Request(PuntosApi.API_BASE_URL + "/puntos/" + dni + " /recupera?npuntos=" + puntos , {  
            method: 'POST',
            headers: {'x-api-key': 'eiWee8ep9due4deeshoa8Peichai8Eih'}  
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static  getHistorialPuntos(dni){
        const request = new Request(PuntosApi.API_BASE_URL + "/historial/" + dni,   {  
        method: 'GET',
        headers: {'x-api-key': 'eiWee8ep9due4deeshoa8Peichai8Eih'}  
    });

    return fetch(request).then(response => {
        return response.json();
    });
}
static  addPuntos(dni){
    const request = new Request(PuntosApi.API_BASE_URL + "/puntos" ,   {  
    method: 'POST',
    body: JSON.stringify({dni:dni,  puntos_actuales : '', puntos_perdidos: '', puntos_recuperados: ''}),
    headers: {'x-api-key': 'eiWee8ep9due4deeshoa8Peichai8Eih'}  
});

return fetch(request).then(response => {
    return response.json();
});
}
}
export default PuntosApi;