import React, { Component } from 'react'
import {Item} from '../Item'


export function Lists(props) {

    if (undefined == props.todos) {
        return (
            <div>loding...</div>
        )
    }
    
    let result = props.todos.map(todo => {
        return <ul className="todo-main" key={todo.id}>
                <Item key={todo.id} {...todo} reloadList={props.reloadList} />
            </ul>}
            )

    return (
        result
    )
}
