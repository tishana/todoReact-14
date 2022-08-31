import {getTodo, editTodo} from '../services/todos-api'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function Edit() {
const {id} = useParams()
const nav = useNavigate()
const [data, setData] = useState({})

useEffect(() => {
    getTodo(id) // get the todo that matches this id
    .then(res => setData(res.data)) // updating the state to the todo we get back
}, []) // prevent a continous loop

const editTheTodo = (e) => {
    e.preventDefault()
    const updatedTodo = {description: e.target.description.value, complete: e.target.complete.checked}
    editTodo(id, updatedTodo)
    nav(`/${id}`)
}
    return (
        <div>
            <form onSubmit={editTheTodo}>
                <input type='text' name='description' defaultValue={data.description}/>
                Complete: <input type='checkbox' name='complete' defaultChecked={data.complete}/>
                <input type='submit' />
            </form>
        </div>
    )
}
export default Edit