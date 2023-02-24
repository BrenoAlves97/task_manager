import './AddTask.scss'

import React, { useState } from 'react'

import { useAlert } from 'react-alert'
import axios from 'axios'

import CustomInput from './CustomInput'
import CustomButton from './CustomButton'

import { FaPlus } from 'react-icons/fa'

const AddTask = ({ fecthTasks }) => {
  const [task, setTask] = useState('')
  const alert = useAlert()

  const onChangeEvent = (e) => {
    setTask(e.target.value)
  }

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return alert.error(
          'Necessário preencher os campos antes de adicionar uma tarefa!'
        )
      }
      await axios.post(`${process.env.REACT_APP_API_URL}/tasks`, {
        description: task,
        isCompleted: false
      })
      await fecthTasks()
      alert.success('Tarefa adicionada com sucesso!')
      setTask('')
    } catch (_error) {
      return alert.error('Não foi possível adicionar tarefa!')
    }
  }

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa..."
        value={task}
        onChangeEvent={onChangeEvent}
        onEnterPress={handleTaskAddition}
      />
      <CustomButton onClickButton={handleTaskAddition}>
        <FaPlus size={14} color="#FFFF" />
      </CustomButton>
    </div>
  )
}

export default AddTask
