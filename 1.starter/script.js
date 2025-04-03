document.addEventListener("DOMContentLoaded",()=>{
    const toggleBtn = document.querySelector(".js-toggle-btn");
    const toggleBtnImg = document.querySelector('img');
    const userPref = localStorage.getItem("theme");
    const systemPreferColors = window.matchMedia("(prefers-color-scheme:dark)");

    if(userPref === "dark" || (!userPref && systemPreferColors.matches)){
        document.documentElement.classList.add("darks")
        toggleBtnImg.src = "./images/lightbulb.svg";
    }


 
    
    systemPreferColors.addEventListener('change',handlePrefersColorChange);
    
    function handlePrefersColorChange(e){
        if(!localStorage.getItem('theme')){
            if(e.matches){
                document.documentElement.classList.add('dark');
                toggleBtnImg.src = "./images/lightbulb.svg";
            }else{
                document.documentElement.classList.remove('dark');
                toggleBtnImg.src = "./images/crescent-moon.svg";
            }
        }
    }


    toggleBtn.addEventListener("click",toggleDarkMode);
    
    
    function toggleDarkMode() {
        if(document.documentElement.classList.contains("dark")){
            toggleBtnImg.src = "./images/crescent-moon.svg";
            localStorage.setItem("theme","light");
        }
        else{
            toggleBtnImg.src = "./images/lightbulb.svg";
            localStorage.setItem("theme","dark");
        }
        document.documentElement.classList.toggle("dark");
    }
})