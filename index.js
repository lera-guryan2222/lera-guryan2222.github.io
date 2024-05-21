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
document.addEventListener('DOMContentLoaded', () =>{
    const mediaFiles = document.querySelectorAll('img, video');
    let i=0
    Array.from(mediaFiles).forEach((file, index) => {
        file.onload = () =>{
            i++
            percents.innerHTML = ((i*100)/mediaFiles.length).toFixed()
            if (i===mediaFiles.length){
                preloader.classList.add('preloader--hide')
                percents.innerHTML = 100
            }
        }
    })
})
