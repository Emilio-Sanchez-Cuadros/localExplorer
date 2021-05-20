import './App.css';
import Explorer from './explorer';
import ErrorBoundary from './error';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">
          <ErrorBoundary >
            <Explorer />
          </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
