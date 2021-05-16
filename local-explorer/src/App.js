import logo from './logo.svg';
import './App.css';
import Explorer from './explorer';
import Explorer2 from './explorer2';
import Displayer from './displayer'
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Route path='/' exact component={Explorer}/>
        <Route path='/2' exact component={Displayer}/>
      </BrowserRouter>
        </header>
    </div>
  );
}

export default App;
