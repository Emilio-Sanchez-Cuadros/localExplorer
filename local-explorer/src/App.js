import logo from './logo.svg';
import './App.css';
import Explorer from './explorer';
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Route path='/:path' exact component={Explorer}/>
      </BrowserRouter>
        </header>
    </div>
  );
}

export default App;
