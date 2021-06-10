import React, { Component } from 'react'

export function Footer(props) {
    const {todos} = props
    const total = todos.length
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    console.log(total)
    return (
        <div className="todo-footer">
            <label>
            </label>
            <span>
            <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button className="btn btn-danger">清除已完成任务</button>
        </div>
    )
}
