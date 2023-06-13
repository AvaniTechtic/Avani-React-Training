import { useEffect } from "react";

function ToDoListForm({setInput, addDataToList, input}) {

    useEffect(() => {
        console.log("insde tofoform list")
    }, [])
    
    return (
        <div>
            <form onSubmit={addDataToList}>
                <h1>TO DO</h1>
                <br />
                <input type="text" style={{padding: "5px", marginRight: "5px"}} value={input.task} onChange={(e) => setInput({...input, task: e.target.value})} />
                <select style={{padding: "5px", marginRight: "5px"}} value={input.status} onChange={(e) => setInput({...input, status: e.target.value})}>
                    <option value="">Select an option</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <button type="submit" style={{padding: "5px"}}>{input.id ? 'Update' : 'Add'}</button>
            </form>
        </div>
    )
}

export default ToDoListForm;