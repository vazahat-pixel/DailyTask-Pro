import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import SingUp from './Pages/SingUp'
// import Signin from './Pages/Signin'
// import Main from './Pages/main';
import TodoApp from './Pages/TodoApp';
import axios from 'axios';

const app = () => {
axios.get('/api/todos')
  return (
    <div>
   <Router>
    <Routes>
      <Route path='/' element={<TodoApp/>}/>
      {/* <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<SingUp />} />
      <Route path="/login" element={<Main/>} />
      <Route path="/signin" element={<Signin />} /> */}
    </Routes>
    </Router>
    
    </div>
  )
}

export default app