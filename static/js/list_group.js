document.addEventListener('DOMContentLoaded', (e) => {
    console.log('List group script');
    let lg = Array.from(document.querySelectorAll('#listElem'));
    let dv = Array.from(document.querySelectorAll('.collapse'));
    lg.forEach(e => {
        e.addEventListener('click', evento => {
            console.log(evento)
            console.log(evento.target.offsetParent.classList.contains('active'));
            if(!evento.target.offsetParent.classList.contains('active')){
                console.log('no tiene active')
                Array.from(document.querySelectorAll('.active')).forEach(item => {
                    item.classList.remove('active');
                });
                Array.from(document.querySelectorAll('.show')).forEach(item => {
                    item.classList.remove('show');
                });
                evento.target.offsetParent.classList.add('active');
            }
            else if(evento.target.offsetParent.classList.contains('active')){
                console.log('tiene active')
                Array.from(document.querySelectorAll('.active')).forEach(item => {
                    item.classList.remove('active');
                });
                // evento.target.offsetParent.classList.remove('active');
            }
        });
    })
});
