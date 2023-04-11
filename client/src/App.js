import './css/styles.css'
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Router/>
    </div>
  </BrowserRouter>
  );
}

export default App;
