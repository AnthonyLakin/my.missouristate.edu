import './App.css';
import {Login} from './components/bearpass/login'
import {LandingPage} from "./components/landing/landingPage";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes >
                <Route exact path='/' element={<LandingPage/>}/>
                <Route  path='*' element={<LandingPage/>}/>
                <Route path='/bearpass' element={<Login/>}/>
            </Routes >

        </div>
      </BrowserRouter>
  );
}

export default App;
