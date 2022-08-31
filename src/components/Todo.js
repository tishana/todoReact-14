import {getTodo, deleteTodo} from '../services/todos-api'
import {useState, useEffect} from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
import {useParams, useNavigate} from 'react-router-dom'


function Todo() {
    const nav = useNavigate()
    const {id} = useParams()
    const [todo, setTodo] = useState({})
    useEffect(() => {getTodo(id)
    .then(res => setTodo(res.data))
}, [])

    const deleteTheTodo = () =>{
        deleteTodo(id) // service in todos-api
        nav('/') // take us back to home screen
    }

    return (
        <div>
            <h1>Todo:</h1>
            <h3>{todo.description}</h3>
            Completed: <input type='checkbox' defaultChecked={todo.complete} /> 
            <br />
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <br />
            <button onClick={deleteTheTodo}>Delete</button>
            <br />
            <button onClick={() => {nav('/')}}>Back to the Main Page</button>
        </div>
    )
}

export default Todo