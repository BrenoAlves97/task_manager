import './TaskItem.scss'

import { AiFillDelete } from 'react-icons/ai'
import axios from 'axios'
import { useAlert } from 'react-alert'

const TaskItem = ({ fecthTasks, task }) => {
  const alert = useAlert()

  const handleTaskDeletion = async () => {
    try {
      await axios.delete(`https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id}`)
      await fecthTasks()

      alert.success('A tarefa foi removida com sucesso!')
    } catch (_error) {
      return alert.error('Não foi possível remover a tarefa!')
    }
  }

  const handleTaskCompletionChange = async (event) => {
    try {
      await axios.patch(`https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id}`, {
        isCompleted: event
      })
      await fecthTasks()

      alert.success('A tarefa foi modificada com sucesso!')
    } catch (_error) {
      return alert.error('Não foi possivel atualizar a tarefa!')
    }
  }

  return (
    <div className="task-item-container">
      <div className="task-description">
        <label className={task.isCompleted ? 'checkbox-container-completed' : 'checkbox-container'}>
          {task.description}
          <input
            type="checkbox"
            defaultChecked={task.isCompleted}
            onChange={(event) => handleTaskCompletionChange(event.target.checked)}
          />
          <span className={task.isCompleted ? 'checkmark completed' : 'checkmark'}></span>
        </label>
      </div>
      <div className="delete">
        <AiFillDelete size={18} color="f97474" onClick={handleTaskDeletion} />
      </div>
    </div>
  )
}

export default TaskItem
