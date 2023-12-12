import React from "react";
import { EachTask } from "./EachTask";
import { useTodo } from "./Context";


export function TaskList() {
    const { alltask } = useTodo()

    return (
        <>
            {
                alltask.map((task) => (

                    <li key={task.id}>
                        <EachTask task={task} />
                    </li>

                ))
            }
        </>
    )
}