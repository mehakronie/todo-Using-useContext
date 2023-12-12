import React from "react";
import { useState } from "react";
import { useTodo } from "./Context";

export function Addtask() {
    const [text, settext] = useState('')
    const { adding } = useTodo()
    const handler = (e) => {
        e.preventDefault()
        adding(text)
        settext('')
    }
    return (
        <>
            <form onSubmit={handler}>
                <input
                    type="text"
                    value={text ?? ''}
                    onChange={(e) => settext(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </>
    )
}