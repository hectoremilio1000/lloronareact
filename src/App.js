import LayoutLlorona from './Modules/LayoutLlorona';
import "../src/styles/global.css";
import { Link } from 'react-router-dom';
import Rutas from './Router';

function App() {
  return  (<main>
      <title>La Llorona</title>
      <LayoutLlorona>
        <Rutas/>
       
    </LayoutLlorona>
    </main>)
}

export default App;
