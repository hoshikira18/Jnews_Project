function darkmodeToggle () {
    const container = document.querySelector('.container')
    container.classList.toggle('dark')
    // themeSwitch()
        //Icons
        const sunIcon = document.querySelector(".sun");
        const moonIcon = document.querySelector(".moon");
        moonIcon.classList.toggle("hidden");
        sunIcon.classList.toggle("hidden");
    
        //  iconToggle();
    
        // Manual Theme Switch
        // function themeSwitch () {
        //     // if (container.contains("dark")) {
        //         // return;
        //     // }
        // };
    
    
        
}

export default darkmodeToggle