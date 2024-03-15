import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/pages/header/header';
import { Siderbar } from './components/pages/sidebar/Siderbar';
import { Feed } from './pages/feed/feed';
import { ContendorPerfil } from './Componentes/Organismos/PerfilUsuario/ContenedorPerfil';
function App() {

  return (
    <Router>
      <Header key="header"></Header>
      <Siderbar key="Sidebar"></Siderbar>
      <Routes>
        <Route exact path="/" element={<Feed key="feed" />} />
        <Route exact path='/Pefil' element={<ContendorPerfil key={"ContendorPerfil"}/>}/>
      </Routes>
    </Router>
  );
}

export default App
