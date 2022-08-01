import React,{ useState} from 'react'
import symbleLogo from '../../../assets/S.svg';
import Googleicon from '../../../assets/Google.svg';
import Facebookicon from '../../../assets/Facebook.svg';
import Twittericon from '../../../assets/Twitter.svg';
import eye from '../../../assets/eye.svg';
import eyeslash from '../../../assets/eye-slash.svg';
import axios from 'axios';
import './auth-signup.styles.css'
import { Link } from 'react-router-dom';



export default function AuthSignup() {
  const [username, setUsername]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [password2, setPassword2]= useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword1, setShowPassword1] = useState(false)


  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response =await axios.post('https://spray-dev.herokuapp.com/api/auth/register',{username:username,email:email, password:password}
      );
      setEmail("");
      setPassword("");
      setPassword2("");
      setUsername("");
      setTimeout(() => {
        window.location.href = '/login';
      }, 1000);
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <div className='page-container'>
    {/* Header */}
    <div >
    <div className='auth-logo'>
      <img src={symbleLogo} alt="Symble logo" />
      </div>
      <h1 className='auth-title'>
      Sign up
      </h1>
      <h1 className='auth-grey-text'>
      Already have an account? <span><Link className='a-text' to="/login">Sign in</Link></span>
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
    <div className='input-container'>
      <label className='input-label' htmlFor="Email">
        Username
      </label>
      <input 
      placeholder='Enter username' 
      type='email' 
      className='input-field'
      value={username} 
      onChange={(e)=>setUsername(e.target.value)}
      />
    </div>
    <div className='input-container'>
          <label
          className='input-label'
          htmlFor="Password"
          >
            Password
          </label>
          <div className='password-input-container'>
            <input
            className='input-field'
            placeholder='Enter password'
            type={showPassword?'text': 'password'}
            autoComplete='new-password'
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
              />
              <div>
                <img src={showPassword? eyeslash: eye} 
                alt="" className='eye' 
                onClick={()=>setShowPassword(!showPassword)}/>
              </div>
          </div>
        </div>
        <div className='input-container'>
          <label
          className='input-label'
          htmlFor="Password"
          >
            Confirm Password
          </label>
          <div className='password-input-container'>
            <input
            className='input-field'
            placeholder='Re-enter password'
            type={showPassword1?'text': 'password'}
            autoComplete='new-password'
            value={password2} 
            onChange={(e)=>setPassword2(e.target.value)}
              />
              <div>
                <img src={showPassword1? eyeslash: eye} alt="" className='eye' onClick={()=>setShowPassword1(!showPassword1)}/>
              </div>
          </div>
        </div>
    <button type='button' onClick={onSubmit} className='auth-cta'>
      <span className='auth-btn-text'> Sign in </span>
    </button>
  </form>
  {/* footer */}
  <div>
    <div className='auth-footer-title'>
      <hr className='footer-line'/>
      <p className='auth-footer-text'>or sign in with</p>
      <hr className='footer-line'/>
    </div>
    <div className='socials'>
      <a href='https://spray-dev.herokuapp.com/api/auth/google/signup'>
        <div>
        <img src={Googleicon} alt=""/>
        </div>
      </a>
      <div>
      <img src={Facebookicon} alt=""/>
      </div>
      <div>
      <img src={Twittericon} alt=""/>
      </div>
    </div>
  </div>
</div>
  )
}
