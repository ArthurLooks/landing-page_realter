function displayMobileNav(){
    if(nav_list.style.display == 'none'){
    nav_list.style.display = 'flex'
    }else{
        nav_list.style.display = 'none';
    }
}
function defaul(){
    if(window.innerWidth > 600){
        nav_list.style.display = 'flex'
    }else{
        nav_list.style.display = 'none'
    }
}
function scrolling(){
    const scrollPosition = window.scrollY
    const header = document.getElementsByTagName('header')
    
    if(scrollPosition>0){
        header[0].style.background = 'var(--color-primal_1)'
        header[0].style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)'
    }else{
        header[0].style.background = 'var(--color-primal_2)'
        header[0].style.boxShadow = 'none'
    }
}