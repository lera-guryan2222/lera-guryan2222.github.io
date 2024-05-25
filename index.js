let switchMode = document.getElementById("switchMode"); 
let theme = document.getElementById("theme"); 
 
// Проверяем, сохранена ли выбранная тема в localStorage 
const savedTheme = localStorage.getItem('theme'); 
 
// Если выбранная тема сохранена, применяем её 
if (savedTheme) { 
    theme.href = savedTheme; 
} 
 
switchMode.onclick = function(){ 
    if (theme.getAttribute("href") === "web.css"){ 
        theme.href = "dark-mode.css"; 
    } else { 
        theme.href = "web.css"; 
    } 
     
    // Сохраняем выбранную тему в localStorage 
    localStorage.setItem('theme', theme.href); 
}
window.onload = function(){
    let preloader = document.getElementById ('preloader');
    preloader.classList.add('hide-preloader');
    setTimeout(function() {
        preloader.classList.add('preloader-hidden');
    },950)
}
