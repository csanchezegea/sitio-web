document.forms['formulario'].onsubmit = (validar)

    function validar() {
        var nombre, apeliidos, correo, usuario, clave, telefono, expresion;
        nombre = document.getElementById("name").value;
        apellido = document.getElementById("apellido").value;
        mail = document.getElementById("mail").value;
        telefono = document.getElementById("telefono").value;
        expresion = /\w+@\w+\.+[a-z]/;
    
        if(nombre == "" || apellido == "" || mail == "" || telefono === "") {
                alert("Todos los campos son obligatorios");
            return false;
        }
        if(nombre.length>30) {
            alert("El nombre es muy largo");
            return false;
        }
        
        if(!expresion.test(mail)){
            alert("el correo no es válido ");
            return false;
        }
        
        if(isNaN(telefono)) {
            alert("el telefono ingresado no es un número ");
            return false;
        }
        else 
        alert ("Ha ingresado todos los datos correctamente. Muchas Gracias por contactarse con Consultora Poltech")
        return true
    }