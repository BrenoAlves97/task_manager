import './Login.scss'

import { useNavigate } from 'react-router-dom'

import logo_curso2 from '../assets/images/logo_curso2.png'
import CustomButton from '../components/CustomButton'

const Login = () => {
  const navigate = useNavigate()

  const handleSingInClick = () => {
    navigate('/Breno')
  }

  return (
        <div className="login-container">
            <img src={logo_curso2} alt="Logo do curso REACT PRO" />
            <div className="button-container">
                <CustomButton onClickButton={handleSingInClick}>Entrar</CustomButton>
            </div>
        </div>
  )
}

export default Login
