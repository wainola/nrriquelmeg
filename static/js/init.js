document.addEventListener('DOMContentLoaded', (e) => {
    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: 62
    });

    let html = document.querySelector('html');
    let menu = Array.from(document.querySelectorAll('a.nav-link'));
    let btn = document.querySelector('button.navbar-toggler');
    //console.log(menu);
    menu.forEach((e) => {
        e.addEventListener('click', (e) => {
            //console.log(html.classList);
            if(html.classList.contains('nav-open')){
                html.classList.remove('nav-open');
                btn.classList.remove('toggled');
                btn.classList.add('collapsed');
                let divClick = document.querySelector('div#bodyClick');
                divClick.remove();
            }
        })
    })

    let formulario = document.forms[0];
    console.log(formulario);
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        let datos = {};
        datos.nombre = e.target[0].value;
        datos.email = e.target[1].value;
        datos.mensaje = e.target[2].value;
        let val_nombre = false;
        let val_email = validacionCorreo(datos.email);
        let val_mensaje = false;
        //console.table(datos);

        if(datos.nombre === '' || datos.nombre.length < 3){
            val_nombre = false;
        }
        else{
            val_nombre = true;
        }

        if(datos.mensaje === '' || datos.mensaje < 5){
            val_mensaje = false;
        }
        else{
            val_mensaje = true;
        }

        let val_final = val_email && val_nombre && val_mensaje;
        let send_data = `data=${JSON.stringify(datos)}`;
        // console.log(send_data);
        
        
        // console.log(val_final);
        
        if(val_final){
            console.log('Verdadero');
            fetch('./php_scripts/contacto.php', {
                method: 'POST',
                headers: { "Content-type": "application/x-www-form-urlencoded"},
                body: send_data
            })
            .then(res => res.json())
            .then(res => {
                if(res.msg){
                    swal({
                        text: "Correo enviado con éxito. Me pondré en contacto a la brevedad",
                        type: 'success'
                    });
                    formulario.reset();
                }
            });
        }
        else{
            swal({
                text: "Alguno de los datos que ingreso no están completos",
                type: 'error'
            });
        }

    });
    
});

function validacionCorreo(email){
    var regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var correo = email;
    if (regex.test(email)) {
        return true;
    } else {
        swal({
            text: 'Ingrese un correo válido',
            type: 'error'
        });
        return false;
    }
}