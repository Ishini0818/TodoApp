import Task from "./Task";

const Tasks = (props) => {
    return ( 
        <div className="w-5/12 h-auto flex flex-col gap-3 items-center justify-start">
            {props.taskList.map(element => <Task key={element._id || element} task={element} setTasks={props.setTasks} tasks={props.taskList} updateItem={props.updateItem} setUpdateItem={props.setUpdateItem}/> )}
        </div>
    );
}

export default Tasks;