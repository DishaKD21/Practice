function Add_Task(){
    return(
        <div className="container">
        <h2>Add New Task</h2>
        <input type="text"/>
        <br />
        <select name="Select" id="">
         <option value="Personal">Personal</option>
         <option value="Work">Work</option>
        </select>
        <br/>
        <button> + Add Task</button>
        </div>  
    );
}
export default Add_Task;