import './App.css';
import Explorer from './explorer';
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Route path='/' exact component={Explorer}/>
      </BrowserRouter>
        </header>
    </div>
  );
}

export default App;
