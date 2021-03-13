
    const toggle=document.querySelector(".toggle_btn");
    const divlist=document.querySelector(".features");
    toggle.addEventListener('click', ()=>{
        if (divlist.style.display==='block') {
            divlist.style.display='none';
            toggle.innerHTML="amenities &#x2191;" 
        } else {
            divlist.style.display='block'
            toggle.innerHTML="amenities &#x2193;" 
        }
    })
    

