import Router from './components/Routes'
import { BrowserRouter} from 'react-router-dom';
import "./style.css"


function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}

export default App;