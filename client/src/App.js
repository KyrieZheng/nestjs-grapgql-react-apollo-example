import React, { useState, useEffect } from 'react'
import {Footer} from './component/Footer'
import './App.css'
import {Header} from './component/Header'
import {Lists} from './component/List'
import { gql, useQuery } from '@apollo/client'

const GET_TODO = gql`
            query{
                getTodos{
                    name,
                    id,
                    done
                }
            }`;

const App = () => {
        const [todos, setTodos] = useState([])
    
        const { loading, error, data, refetch, networkStatus } = useQuery(GET_TODO, {
            variables: { language: 'english' },
            notifyOnNetworkStatusChange: true,
        });

        useEffect(() => {
            if (data) {
                setTodos(data.getTodos)
            }
        }, [data])

        // 刷新页面
        const reloadList = () => refetch()

        if (loading) return <p>Loading...</p>
    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header reloadList={reloadList} />
                <button onClick={() => refetch()}>刷新列表!</button>
                <Lists todos={todos} reloadList={reloadList} />
                <Footer todos={todos} />
            </div>
        </div>
    )
}

export default App;