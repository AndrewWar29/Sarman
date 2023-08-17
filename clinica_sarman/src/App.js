import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home} from './subpage/home';
import { About_us} from './subpage/nosotros';
import { Doctors} from './subpage/profesionales';
import { Services} from './subpage/servicios';
import { Contact } from './subpage/contact';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/nosotros" element={<About_us/>}></Route>
          <Route path="/profesionales" element={<Doctors/>}></Route>
          <Route path="/servicios" element={<Services/>}></Route>
          <Route path="/contacto" element={<Contact/>}></Route>


        </Routes>
    </Router>
  );
}

export default App;