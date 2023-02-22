import "./App.css";

import Tasks from "./components/Tasks";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <div className="App">
            <Sidebar />
            <Tasks />
        </div>
    );
};

export default App;
