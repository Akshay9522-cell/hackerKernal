
 const checkValidation=()=>{

     const email=document.getElementById('email').value.trim();

       const error = document.getElementById('error');
       error.textContent = ''; 
      
     const emailCheck='/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/'

     if(!emailCheck.test(email)){
        error.textContent=  'please enter valid email'
        return false
     }

      return true
 }