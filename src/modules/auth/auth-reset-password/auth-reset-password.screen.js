import React,{useState, useContext} from 'react'
import symbleLogo from '../../../assets/S.svg';
import eye from '../../../assets/eye.svg';
import eyeslash from '../../../assets/eye-slash.svg';
// import './auth-recovery.styles.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

export default function AuthResetPassword() {
    // const {setToken}= useContext(AuthContext)
    const [password, setPassword]= useState("")
    const [confirmPassword, setConfirmPassword]= useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword1, setShowPassword1] = useState(false)
    const navigate = useNavigate()
    const {URL} = useContext(AuthContext)


    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            if (password !== confirmPassword) {
              console.log('password does not match');
            }
            if(password === confirmPassword){
              const getURL = localStorage.getItem('url')
              const response =await axios.post(`https://spray-dev.herokuapp.com${getURL}`,{confirmPassword:confirmPassword, password:password})
              console.log('password match');
              setPassword("")
              setConfirmPassword("")
              navigate("/login")
              
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
          Reset password
          </h1>
        </div>
       <form>
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
            value={confirmPassword} 
            onChange={(e)=>setConfirmPassword(e.target.value)}
              />
              <div>
                <img src={showPassword1? eyeslash: eye} alt="" className='eye' onClick={()=>setShowPassword1(!showPassword1)}/>
              </div>
          </div>
        </div>
        <button type='button' onClick={onSubmit} className='auth-cta'>
          <span className='auth-btn-text'> Send email </span>
        </button>
      </form>     
    </div>
    )
}