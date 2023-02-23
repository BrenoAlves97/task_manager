import "./Login.scss";

import logo_curso2 from "../assets/images/logo_curso2.png";
import CustomButton from "../components/CustomButton";

const Login = () => {
    return (
        <div className="login-container">
            <img src={logo_curso2} alt="Logo do curso REACT PRO" />
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
