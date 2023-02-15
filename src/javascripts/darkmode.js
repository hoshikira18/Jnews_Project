function darkmodeToggle () {
    const container = document.querySelector('.container')
    container.classList.toggle('dark')
    
        const sunIcon = document.querySelector(".sun");
        const moonIcon = document.querySelector(".moon");
        moonIcon.classList.toggle("hidden");
        sunIcon.classList.toggle("hidden");
    
        
    
    
        
}

export default darkmodeToggle