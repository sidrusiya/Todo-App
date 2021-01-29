import {Button, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react';
import db from './firebase';

function Todo(props) {
    return (
        <div className="todo__list">
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary="Deadline of 1 day" />
                </ListItem>
                <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete Me</Button>
            </List>
        </div>
    )
}

export default Todo
