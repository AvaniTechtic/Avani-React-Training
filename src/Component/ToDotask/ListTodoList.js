import React, { useEffect } from "react";

function ListTodoList({todoList,EditThisRowTask,deleteThisRowTask}) {
    useEffect(()=>{
        console.log('find the changes un props')
    },[todoList])
    

    return (
    <div>
        {todoList && todoList.map((todo) => (
            <div key={todo._id}>
                <span width="240px" style={{marginRight: "5px"}}>{todo.Task}</span>
                <span width="240px" style={{marginRight: "5px"}}>{todo.Status}</span>
                {
                    todo.Status === "Completed" ? "" : <button style={{marginRight: "5px"}} onClick={() => EditThisRowTask(todo)}>Edit</button>
                }
                {
                    todo.Status === "Completed" || todo.Status === "In Progress" ? "" : <button onClick={() => deleteThisRowTask(todo)}>Delete</button>
                }
            </div>
        ))}
    </div>
  );
}

export default ListTodoList;
