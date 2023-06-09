import React, {useState} from 'react'
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);
    const deleteItem = props.deleteItem;
    const editItem = props.editItem;

    // checkboxEventHandler 함수 작성
    const checkboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem(item);
    };

    // editEventHandler 함수 작성
    //const editEventHandler = (e) => {
        //item.title = e.target.value;
        //editItem();
    //}
    const editEventHandler = (e) => {
        setItem({...item, title: e.target.value});
    };

    // turnOnReadOnly 함수 작성
    //const turnOnReadOnly = (e) => {
        //if(e.key === 'Enter'){
            //setReadOnly(true);
        //}
    //};
    const turnOnReadOnly = (e) => {
        if(e.key === "Enter" && readOnly === false){
            setReadOnly(true);
            editItem(item);
        }
    };

    // turnOffReadOnly 함수 작성
    const turnOffReadOnly = () => {
        setReadOnly(false);
    };

    // deleteEventHandler 작성
    const deleteEventHandler = () => {
        deleteItem(item);
    };

    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler} />
            <ListItemText>
                <InputBase 
                    inputProps={{"aria-label" : "naked", readOnly: readOnly}}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItemText>
        </ListItem>
    )
}

export default Todo