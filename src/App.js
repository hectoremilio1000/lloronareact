
import "../src/styles/global.css";
import { BrowserRouter, Link } from 'react-router-dom';
import Rutas from './Router';
import LayoutLlorona from './Modules/LayoutLlorona/index';


function App() {
  return (
    <BrowserRouter>
      <LayoutLlorona>
        <Rutas />
      </LayoutLlorona>
    </BrowserRouter>)
}

export default App;
