import React from "react";
import { useTodo } from "./Context";
import { useState } from "react";

export function EachTask({ task }) {
    let textcontent;

    const { update, deleting } = useTodo()
    const [editable, seteditable] = useState(false)

    if (editable) {
        textcontent = (
            <>
                <input
                    type="text"
                    value={task.text}
                    onChange={(e) => (update({ ...task, text: e.target.value }))}
                />
                <button onClick={() => seteditable(false)}>save</button>
            </>
        )
    }
    else {
        textcontent = (
            <>
                {task.text}
                <button onClick={() => seteditable(true)}>edit</button>
            </>
        )
    }
    return (
        <>
            <input
                className={task.done ? 'check' : ""}
                type="checkbox"
                checked={task.done}
                onChange={(e) => (
                    update(
                        {
                            ...task,
                            done: e.target.checked
                        })
                )
                }
            />
            {textcontent}
            <button onClick={() => deleting(task.id)}>delete</button>
        </>
    )
}