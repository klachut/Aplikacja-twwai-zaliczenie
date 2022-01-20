import './App.css';
import 'react-calendar/dist/Calendar.css';

import {NavBar} from "./components/NavBar";
import {Dashboard} from "./components/Dashboard";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Dashboard/>
        </div>
    );
}

export default App;