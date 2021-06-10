import React, { useEffect, useState } from 'react'

export default function Hook() {
    const [count, setCount] = useState(1)

    let changeCount = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        return () => {
            document.title = `My clicked ${count} times`;
        }
    })

    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={changeCount}>
                Click Me
            </button>
        </div>
    )
}
