import { useState } from 'react';

const ToDoList = (props) => {
    const [done, setDone] = useState(false);
    const [itemText, setText] = useState(props.text);
    const markAsDone = () => {
        setDone(() => {
            return true;
        });
    }
    const makeEdit = () => {
        var editItem = prompt("Enter editted item: ");
        setText(() => {
            return editItem;
        })
    }
    return (
        <div class="todo_style">
            <i class={done ? "fa fa-check" : "fa fa-times"} id="cross" aria-hidden="true" onClick={() => {
                props.onSelect(props.id)
            }} />
            <li>
                <p id="item">{itemText} </p>
                <p>
                    <input type="time" class="form-control timer" id="start" />
                </p></li>
            <button class="edit" onClick={makeEdit}>
                Edit</button>
            <br /><br /><br />
            <button class="done" onClick={markAsDone}>Done</button>
        </div>);

};

export default ToDoList;