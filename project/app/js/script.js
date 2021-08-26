const menu = document.querySelector("#btnMenu");

menu.addEventListener('click', function() {
    console.log('open menu')

    if(menu.classList.contains("open")) {
        menu.classList.remove('open')
    }else {
        menu.classList.add('open')
    }
})