import React, { useState, useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'

const UPDATE_TODO = gql`
    mutation UpdateTodo($data:inputTodo!){
        updateTodo(data:$data){
            id,
            name,
            done
        }
    }`;

const DELETE_TODO = gql`
    mutation DeleteTodo($id:number){
        updateTodo(id:$id){
            code,
        }
    }`;

export function Item(props) {
    const {id, name, done} = props

    const [mouseStatus, setMouseStatus] = useState(false)
    const [
        updateTodo, 
        { data: updateData }
    ] = useMutation(UPDATE_TODO)

    const [
        deleteTodo, 
        { data: deleteData }
    ] = useMutation(DELETE_TODO)

    const updateHandle = (id) => {
        return (event) => {
            const done = event.target.checked
            updateTodo({variables:{data:{id:id,name:name,done:done}}})
        }
    }

    const delectHandle = (id) => {
        return (id) => {
            deleteTodo({variables:{id:id}})
        }
    }

    useEffect(() => {
        if (updateData || deleteData) {
            props.reloadList()
        }
    }, [updateData, deleteData])

    return (
        <li style={{backgroundColor:mouseStatus ? '#ddd' : 'white'}} onMouseLeave={() => setMouseStatus(false)} onMouseEnter={() => setMouseStatus(true)}>
            <label>
                <input onChange={updateHandle(id)} type="checkbox" defaultChecked={done}/>
                <span>{name}</span>
            </label>
            <button onClick={delectHandle(id)} className="btn btn-danger" style={{display:mouseStatus ? 'block' : 'none'}}>删除</button>
        </li>
    )
}