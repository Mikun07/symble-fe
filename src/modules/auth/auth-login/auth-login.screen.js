import React,{useState, useContext} from 'react'
import symbleLogo from '../../../assets/S.svg';
import Googleicon from '../../../assets/Google.svg';
import Facebookicon from '../../../assets/Facebook.svg';
import eye from '../../../assets/eye.svg';
import eyeslash from '../../../assets/eye-slash.svg';
import Twittericon from '../../../assets/Twitter.svg';
import './auth-login.styles.css'
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';

export default function AuthLogin(second) {
  const {setAuth} = useContext(AuthContext)
    // let navigate = useNavigate()
    // const {setToken}= useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
          const response =await axios.post('https://spray-dev.herokuapp.com/api/auth/login',{email:email, password:password}
          )
          setTimeout(() => {
            window.location.href = '/';
          }, 1000);
          
          // navigate("/")
          console.log(response.data);
          const {token} = response.data
          console.log(token);
          const tokens = localStorage.setItem('token', token)
          setAuth(tokens)
        } catch (error) {
          console.log(error);    
        }
      };
    return(
        <div className='page-container'>
        {/* Header */}
        <div >
        <div className='auth-logo'>
          <img src={symbleLogo} alt="Symble logo" />
          </div>
          <h1 className='auth-title'>
          Let's sign in
          </h1>
          <h1 className='auth-grey-text'>
          Don't have an account? <span><Link className='a-text' to="/signup">Sign up</Link></span>
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
                <img src={showPassword? eyeslash: eye} alt="" className='eye' onClick={()=>setShowPassword(!showPassword)}/>
              </div>
          </div>
          <Link to="/recovery">
            <p className='forgot-password'>Forgot password?</p>
          </Link>
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
          <a href='https://spray-dev.herokuapp.com/api/auth/google/signin'>
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