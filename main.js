let navlink = document.querySelector('.nav-link')

function ShowMenu(){
    navlink.style.display = 'block';
}

function HideMenu(){
    navlink.style.display = 'none';
}

window.addEventListener('scroll',function(){
    let navbar = document.querySelector('.navbar')
    let top = window.scrollY;
    if (top === 0){
        navbar.style.backgroundColor = 'transparent';
    }
    else{
        navbar.style.backgroundColor = 'rgba(255, 192, 203, 0.5)';
    }
    
})
