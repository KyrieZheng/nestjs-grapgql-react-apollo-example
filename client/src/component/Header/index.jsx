import React, { useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'

const ADD_TODO = gql`
    mutation CreateTodo($data:inputTodo!){
        createTodo(data:$data){
            id,
            name,
            done
        }
    }`;

const GET_TODO = gql`
    query{
        getTodos{
            name,
            id,
            done
        }
    }`;

export const Header = (props) => {
    const [
        addTodo, 
        { data: data }
    ] = useMutation(ADD_TODO)

    useEffect(() => {
        if (data) {
            props.reloadList()
        }
    }, [data])

    const handleEnter = (event) => {
        const {target, keyCode} = event
        let name = target.value
        if (13 != keyCode) {
            return
        }
        if (name == '') {
            alert('No')
            return
        }
        
        addTodo({variables:{data:{name:name,done:false}}})
        console.log('ok')
        target.value = ''
    }

    return (
        <div className="todo-header">
            <input onKeyUp={handleEnter} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
    )
}
