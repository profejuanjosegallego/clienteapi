//PASOS PARA CONSUMIR UN API:

//1. Definir la URL del api a consumir

//2. Configurar la peticion 

//3. LLamar al FETCH

async function consumirAPI(){

    let url="localhost:8080/usuarios" //pa donde vas
    let peticion={
        method:"POST",
        headers:{},
        body:JSON.stringify() 
    } //a hacer que?
    let respuestaServidor=await fetch(url,peticion) //el taxi pa ir
    return await respuestaServidor.json()

}