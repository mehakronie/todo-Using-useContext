import { useState } from 'react'
import './App.css'
import { Addtask } from './Addtask'
import { TodoProvider } from './Context'
import { TaskList } from './TaskList';
let markid = 0;
function App() {
  const [alltask, setalltask] = useState([])

  function adding(text) {
    setalltask([...alltask, {
      id: markid++,
      text: text,
      done: false
    }])
  }
  function deleting(id) {
    setalltask(alltask.filter((eachval) => (
      eachval.id !== id
    )))
  }
  function update(task) {
    setalltask(alltask.map((eachval) => {
      if (eachval.id == task.id) {
        return task
      }
      else {
        return eachval
      }
    }
    ))
  }
  return (
    <>
      <TodoProvider value={{ alltask, adding, deleting, update }}>
        <Addtask />
        <TaskList />
      </TodoProvider>
    </>
  )
}

export default App
