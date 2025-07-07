let boton=document.getElementById("boton")
let cajaNombres=document.getElementById("nombres")
let cajaContraseña=document.getElementById("contraseña")
let cajaCorreo=document.getElementById("correo")
let cajaEdad=document.getElementById("edad")
let cajaFechaNacimiento=document.getElementById("fecha")

//detectando el evento de click
boton.addEventListener("click",function(evento){
    evento.preventDefault()

    //Rutina de validacion del formulario
    let nombres=cajaNombres.value
    let contraseña=cajaContraseña.value 
    let correo=cajaCorreo.value 
    let edad=cajaEdad.value 
    let fechaNacimiento=cajaFechaNacimiento.value 
   
    if(nombres=="" || contraseña=="" || correo=="" || edad=="" || fechaNacimiento==""){

        Swal.fire({
            icon: "error",
            title: "Revisa, ya que tienes campos sin llenar",
            text: "Algo ha ido mal!",
        });
    }else{
         Swal.fire({
            title: "Bienvenido",
            text: "Tus datos fueron correctos",
            icon: "success"
        });

    }


   
})