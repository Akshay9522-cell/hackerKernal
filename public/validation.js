
 const checkValidation=()=>{

     const email=document.getElementById('email').value.trim();
     const phone=document.getElementById('phone').value.trim()
       const error = document.getElementById('error');
       error.textContent = ''; 
      
     const emailCheck='/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/'

     if(!emailCheck.test(email)){
        error.textContent=  'please enter valid email'
        return false
     }

      const phoneCheck='/^[0-9]{10}$/'
      if(!phoneCheck.test(phone)){
      
        error.textContent='please enter valid phone'
        return false
      }
      return true
 }