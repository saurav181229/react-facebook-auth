import React , {useState} from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = (props)=>{
    const [form , val] = useState({
        isLoggedIn:false,
        userId:'',
        name:'',
        picture:'',
        email:''
    });

    const responseFacebook = response => {
        //console.log(response);
       val({
           ...form,
           isLoggedIn:true,
           name:response.name,
           email:response.email,
           picture:response.picture.data.url,
           userId:response.userID

       })
    }
    const componentClicked = ()=> console.log('clicked');

    let fbContent;
    if(form.isLoggedIn){
        fbContent = (
            <div>
                <img src = {form.picture} alt={form.name} />
        <h2>welocme: {form.name}</h2>
        Email:{form.email}

            </div>
        );
      
    }else{
        fbContent =(  <FacebookLogin
            appId="938844353188821"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />)
    }

    return(
        <div>
            {fbContent}
        </div>
    )
}
export default Facebook