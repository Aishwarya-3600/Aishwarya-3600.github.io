import react from 'react'
const ToDoList = (props) => {
    return (
        <div class="todo_style">
            <i class="fa fa-times" aria-hidden="true" onClick = { () => {
                                            props.onSelect(props.id) }}/>
    <li> {props.text} </li>
    <br/><br/><br/>
    </div>);

    };



export default ToDoList;