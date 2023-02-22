import "./Tasks.scss";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const alert = useAlert("");

    const fecthTasks = async () => {
        try {
            const { data } = await axios.get(
                "https://fsc-task-manager-backend.herokuapp.com/tasks"
            );
            setTasks(data);
        } catch (_error) {
            return alert.error("Não foi possível resgatar as tarefas!");
        }
    };

    const lastTasks = useMemo(() => {
        return tasks.filter((task) => task.isCompleted === false);
    }, [tasks]);

    const completedTask = useMemo(() => {
        return tasks.filter((task) => task.isCompleted);
    }, [tasks]);

    useEffect(() => {
        fecthTasks();
    }, []);

    return (
        <div className="tasksContainer">
            <h2>Minhas tarefas: </h2>
            <div className="lastTasks">
                <h3>Últimas tarefas</h3>
                <AddTask fecthTasks={fecthTasks} />
                <div className="tasksList">
                    {lastTasks.map((lastTask, index) => (
                        <TaskItem key={index} task={lastTask} fecthTasks={fecthTasks} />
                    ))}
                </div>
            </div>
            <div className="completedTasks">
                <h3>Tarefas concluídas</h3>
                <div className="tasksList">
                    {completedTask.map((completedTask, index) => (
                        <TaskItem key={index} task={completedTask} fecthTasks={fecthTasks} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;
