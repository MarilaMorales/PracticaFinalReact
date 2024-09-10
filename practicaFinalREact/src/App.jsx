import Routing from './Routes/Routing'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';



import './App.css'



function App() {


  return (
    <>
      <div>
        <Router>
        <Routing />
        <ToastContainer/>
        </Router>
      </div>

    </>
  )
}

export default App
