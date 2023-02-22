import "./Sidebar.scss";

import logo_curso from "../assets/images/logo_curso.png";
import CustomButton from "./CustomButton";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo_curso} alt="Curso React Pro" />
            </div>
            <div className="sign-out">
                <CustomButton onClickButton={() => console.log("Saiu")}>Sair</CustomButton>
            </div>
        </div>
    );
};

export default Sidebar;
