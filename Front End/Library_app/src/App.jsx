import Home from './Pages/Home/Home.jsx';
import Signin from './Pages/Signin/Signin.jsx'
import { BrowserRouter as Router, Routes, Navigate, Route } from "react-router-dom";
import MemberDashboard from './Pages/DashBoards/MemberDashboard/MemberDashboard.jsx';
import Allbooks from './Pages/Allbooks/Allbooks.jsx';
import Header from './Components/Header/Header.jsx';
import AdminDashboard from './Pages/DashBoards/AdminDashboard/AdminDashboard.jsx';
import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext.jsx"

function App() {

  const { user } = useContext(AuthContext)
 
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}>
            
          </Route>
          <Route exact path='/signin' element={user ? (user.isAdmin ? <Navigate to='/dashboard@admin' />:<Navigate to='/dashboard@member' />) :<Signin/>}>
            {/* {console.log(user.isAdmin)} */}
          </Route>
          <Route exact path='/dashboard@member' element={user ? (user.isAdmin === false ? <MemberDashboard/> : <Navigate to='/' />) : <Navigate to='/' />}>
            
          </Route>
          <Route exact path='/dashboard@admin' element={user ? (user.isAdmin === true ? <AdminDashboard/> : <Navigate to='/' />) : <Navigate to='/' />}>
            
          </Route>
          <Route exact path='/books' element={<Allbooks />}>
            
          </Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;