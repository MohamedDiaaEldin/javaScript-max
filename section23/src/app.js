const copyBtn = document.getElementById('copyBtn')

copyBtn.addEventListener('click', ()=>{
    const text = document.getElementById('txt')    
    // if truthy - is there - is supported by browser
    if (navigator.clipboard){
        navigator.clipboard.writeText(text.textContent).then(result =>{
            console.log(result)
        })
    }
    else{
        alert('feature not available, please copy manually')
    }
})

