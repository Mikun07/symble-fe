import React,{useState} from 'react'
import symbleLogo from '../../../assets/S.svg';
import Googleicon from '../../../assets/Google.svg';
import Facebookicon from '../../../assets/Facebook.svg';
import eye from '../../../assets/eye.svg';
import eyeslash from '../../../assets/eye-slash.svg';
import Twittericon from '../../../assets/Twitter.svg';
import './auth-recovery.styles.css'
import axios from 'axios';

export default function AuthRecovery() {
    // const {setToken}= useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            if(email){
                const response =await axios.post('https://spray-dev.herokuapp.com/api/auth/forgot-password',{email:email})
                setEmail("")
            }
        } catch (error) {
          console.log(error);    
        }
      };
    return(
        <div className='page-container'>
        <div >
        <div className='auth-logo'>
          <img src={symbleLogo} alt="Symble logo" />
          </div>
          <h1 className='auth-title'>
          Forgot password
          </h1>
          <h1 className='auth-grey-text'>
          No worries, we’ll help you. We’ll send a password reset link to your inbox.
          </h1>
        </div>
       <form>
        <div className='input-container'>
          <label className='input-label' htmlFor="Email">
            Email address
          </label>
          <input 
          placeholder='Enter email' 
          type='email' 
          className='input-field'
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}
          />
          
        </div>
        <button type='button' onClick={onSubmit} className='auth-cta'>
          <span className='auth-btn-text'> Send email </span>
        </button>
      </form>     
    </div>
    )
}