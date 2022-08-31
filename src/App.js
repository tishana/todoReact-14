import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Todos from './components/Todos';
import Todo from './components/Todo'
import Edit from './components/EditTodo'
function App() {
  
  return (
    <div className="App">
      <h2>Todo List</h2>
      <Router>
        <Routes>
          <Route path='/' element={<Todos />}/>
          <Route path='/:id' element={<Todo />}/>
          <Route path='/:id/edit' element={<Edit />}/>
        </Routes>
        <nav><Link to='/' >Home</Link></nav>
      </Router>
    </div>
  );
}

export default App;