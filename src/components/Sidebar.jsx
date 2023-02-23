import "./Sidebar.scss";

import { useNavigate } from "react-router-dom";

import logo_curso from "../assets/images/logo_curso.png";
import CustomButton from "./CustomButton";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate("/Login");
    };

    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo_curso} alt="Curso React Pro" />
            </div>
            <div className="sign-out">
                <CustomButton onClickButton={handleSignOut}>Sair</CustomButton>
            </div>
        </div>
    );
};

export default Sidebar;
