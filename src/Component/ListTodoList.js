import React, { useEffect } from "react";

function ListTodoList({todoList,EditThisRowTask,deleteThisRowTask}) {
    useEffect(()=>{
        console.log('find the changes un props')
    },[todoList])

    return (
    <div>
        {todoList && todoList.map((todo) => (
            <div key={todo.id}>
                <span style={{marginRight: "5px"}}>{todo.task}</span>
                <span style={{marginRight: "5px"}}>{todo.status}</span>
                {
                    todo.status === "Completed" ? "" : <button style={{marginRight: "5px"}} onClick={() => EditThisRowTask(todo)}>Edit</button>
                }
                {
                    todo.status === "Completed" || todo.status === "In Progress" ? "" : <button onClick={() => deleteThisRowTask(todo)}>Delete</button>
                }
            </div>
        ))}
    </div>
  );
}

export default ListTodoList;
