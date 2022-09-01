
let host1="https://ai-lab-backend.herokuapp.com/";

export default  {

auth :{ 
    
    
    login: host1 + "api/v1/auth/login",
},

admin:{
    postBot: host1 + "api/v1/admin/bot",
    getBots: host1 + "api/v1/admin/bot",
}
  
}
