import './styles.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  

  return (
      <div className="App">
        <nav>
          <Link to="/Login" >Login</Link>
        </nav>
        
        <Outlet />
      </div>
  )
}

export default App
