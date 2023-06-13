import React, { useEffect, useState } from "react";
import ListTodoList from './ListTodoList'
import ToDoListForm from './toDoListForm'
import { useNavigate } from 'react-router-dom';
import { getToDoList, updateToDoTask, deleteToDoTask, createToDoTask } from '../../Services/ToDoApiService'

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

    useEffect(() => {
        getToDoList()
        .then(response => {
            console.log("response =>", response?.data)
            if (response?.data) {
                setTodoList(response.data)
            }
        })
    }, [])

    const addDataToList = (e) => {
        e.preventDefault();
        console.log(input)
        if (input.task && input.id) {
            // update the list before it saved in the database
            let tmp = todoList
            let idx = todoList.findIndex(rec => rec._id === input.id)
            tmp[idx].Task = input.task;
            tmp[idx].Status = input.status;
            setTodoList([...tmp]);
            // update the data in the database
            updateToDoTask(input)
            .then(response => {
                console.log("updated todo task")
            })
        } else if (input.task) {
            // save the data in the database
            createToDoTask(input)
            .then(response => {
                // setTodoList([...todoList, response.data]);
                console.log("created todo task", response.data)
                // update the list before it saved in the database
                setTodoList((prev) => [
                    ...prev,
                    {
                      _id: response.data._id,
                      Task: response.data.Task,
                      Status: response.data.Status
                    },
                  ]);
            })
        }
    };

    const deleteThisRowTask = (data) => {
        // remove the data from the list before it saved in the database
        const removeItem = todoList.filter((todo) => {
            return todo._id !== data._id;
        });
        setTodoList(removeItem);
        // remove the data from the database
        deleteToDoTask({
            id: data._id,
            status: data.Status,
            task: data.Task
        })
        .then(response => {
            console.log("deleted todo task")
        })
    }

    const EditThisRowTask = (data) => {
        setInput({ id: data._id, task: data.Task, status: data.Status });
    }

    return (
        <div key={input.id} style={{width:'100%',height:'90vh',border:'2px solid white', display:'flex',flexDirection:'row'}}>
            <div style={{width:'50%',border:'2px solid white' }}>
                <button onClick={handleGoBack}>Go Back</button>
                <ToDoListForm 
                    setInput={setInput}
                    addDataToList={addDataToList}
                    input={input}
                />
            </div>
            <div style={{width:'50%',border:'2px solid white', padding:'20px' }} key={todoList.length}>
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