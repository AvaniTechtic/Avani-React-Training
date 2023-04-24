import React, { useState } from "react";

const ToDoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [input, setInput] = useState("");
    const [updateaction, setUpdateAction] = useState(false);
    const [backupText, setBackupText] = useState("");

    const addDataToList = (e) => {
        e.preventDefault();
        if (input) {
            const id = todoList.length + 1;
            setTodoList((prev) => [
              ...prev,
              {
                id: id,
                task: input
              },
            ]);
            setInput("");
        }
    };

    const setInputValue = (value) => {
        setInput(value);
    }

    const deleteThisRowTask = (data) => {
        console.log("inside delete")
        const removeItem = todoList.filter((todo) => {
            return todo.id !== data.id;
        });
        setTodoList(removeItem);
    }

    const EditThisRowTask = (data) => {
        setInput(data.task);
        setBackupText(data.id)
        setUpdateAction(true);
    }

    const updateDataToList = (e) => {
        e.preventDefault();
        console.log("inside update")
        const updateItem = todoList.map((todo) => {
            if (todo.id === backupText) {
                todo.task = input;
            }
            return todo;
        });
        setTodoList(updateItem);
        setInput("");
        setUpdateAction(false);
    }

    return (
        <div>
            <form onSubmit={updateaction === true ? updateDataToList : addDataToList}>
                <h1>TO DO</h1>
                <br />
                <input type="text" value={input} onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit">{updateaction === true ? 'update' : 'Add'}</button>
            </form>
            <div>
                <ul>
                    {todoList.map((todo) => {
                    return (
                        <ul key={todo.id}>
                            <li>
                                <div>
                                    <span>{todo.task}</span>
                                    <button onClick={() => EditThisRowTask(todo)}>Edit</button>
                                    <button onClick={() => deleteThisRowTask(todo)}>Delete</button>
                                </div>
                            </li>
                        </ul>
                    );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ToDoList;