window.onload=function(){
    let light = document.getElementById('light')
    let dark = document.getElementById('dark')
    light.addEventListener('click',function(){
        document.documentElement.setAttribute('data-bs-theme','light')
        localStorage.setItem('themeMode','light')
    })
    dark.addEventListener('click',function(){
        document.getElementById('main').setAttribute('data-bs-theme','dark')
        localStorage.setItem('themeMode','dark')
    })
}
let save = localStorage.getItem('themeMode')
if(save=='dark'){
    document.getElementById('main').setAttribute('data-bs-theme','dark')
}
    else{
        document.documentElement.setAttribute('data-bs-theme','light')

    }
