document.addEventListener('DOMContentLoaded', (e) => {
    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: 62
    });

    let html = document.querySelector('html');
    let menu = Array.from(document.querySelectorAll('a.nav-link'));
    let btn = document.querySelector('button.navbar-toggler');
    console.log(menu);
    menu.forEach((e) => {
        e.addEventListener('click', (e) => {
            console.log(html.classList);
            if(html.classList.contains('nav-open')){
                html.classList.remove('nav-open');
                btn.classList.remove('toggled');
                btn.classList.add('collapsed');
                let divClick = document.querySelector('div#bodyClick');
                divClick.remove();
            }
        })
    })
    btn.addEventListener('click', (e) => {
        
    })
});