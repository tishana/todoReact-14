import {getTodos} from '../services/todos-api'
import {useState, useEffect} from 'react'
import Create from './CreateTodo'
import { Link } from 'react-router-dom'

export default function Todos() {
 const [todos, setTodos] = useState([])
 useEffect(()=>{
     getTodos()
     .then(res => setTodos(res.data))
 },[])
 console.log(todos)
    return(
    <div>
        <ul>
        {todos.map((todo) => {
            return (
                <div>
                    <Link to={`/${todo._id}`}>{todo.description}</Link>
                    </div>
            // <li><a href={`/${todo._id}`}>{todo._id}</a>
            // </li>
            )
        })}
        
        </ul>
        <Create />
    </div>
)
    
}