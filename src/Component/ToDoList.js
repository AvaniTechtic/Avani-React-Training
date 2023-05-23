import React, { useEffect, useState } from "react";
import ListTodoList from './ListTodoList'
import ToDoListForm from './toDoListForm'
import { useNavigate } from 'react-router-dom';

const ToDoList = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const [todoList, setTodoList] = useState([]);
    const [input, setInput] = useState({
        id: "",
        task: "",
        status: ""
    });

    useEffect(() => {
        setInput({
            id: "",
            task: "",
            status: ""
        });
    }, [todoList])

    const addDataToList = (e) => {
        e.preventDefault();
        console.log(input)
        if (input.task && input.id) {
            let tmp = todoList
            let idx = todoList.findIndex(rec => rec.id === input.id)
            tmp[idx].task = input.task;
            tmp[idx].status = input.status;
            setTodoList([...tmp]);
        } else if (input.task) {
            const id = todoList.length + 1;
            setTodoList((prev) => [
              ...prev,
              {
                id: id,
                task: input.task,
                status: input.status
              },
            ]);
        }
    };

    const deleteThisRowTask = (data) => {
        const removeItem = todoList.filter((todo) => {
            return todo.id !== data.id;
        });
        setTodoList(removeItem);
    }

    const EditThisRowTask = (data) => {
        setInput({ id: data.id, task: data.task, status: data.status });
    }

    return (
        <div style={{width:'100%',height:'90vh',border:'2px solid white', display:'flex',flexDirection:'row'}}>
            <div style={{width:'50%',border:'2px solid white' }}>
                <button onClick={handleGoBack}>Go Back</button>
                <ToDoListForm 
                    setInput={setInput}
                    addDataToList={addDataToList}
                    input={input}
                />
            </div>
            <div style={{width:'50%',border:'2px solid white', padding:'20px' }}>
                <ListTodoList 
                todoList={todoList}
                EditThisRowTask={EditThisRowTask}
                deleteThisRowTask={deleteThisRowTask}
                setTodoList={setTodoList}
                />
            </div>
        </div>
    )
}

export default ToDoList;