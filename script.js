function formSubmission()
{
    let f1=document.getElementById('f1').value
    let f2=document.getElementById('f2').value
    let f3=document.getElementById('f3').value

    // console.log(f1,f2,f3)
    if(f1&& f2 && f3){
        alert("Form Submitted")
    }
    else{
        alert("all fields are reequired")
    }
    

    
}

