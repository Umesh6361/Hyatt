
const toggle = document.querySelectorAll(".toggle_btn").forEach(toggle => {
    toggle.addEventListener('click', () => {
        const divlist = document.querySelectorAll(".features").forEach(divlist=>{
            if(divlist.style.display === 'block') {
                divlist.style.display = 'none';
        toggle.innerHTML = "amenities &#x2191;"
    } else {
        divlist.style.display = 'block'
                toggle.innerHTML = "amenities &#x2193;"
    }
        })
           
    })
})