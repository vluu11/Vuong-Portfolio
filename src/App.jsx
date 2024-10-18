import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import './assets/App.css';

function App() {
 
  return (
    <>
      <Nav />
      <main className="mx-3 text-primary"  style={{backgroundColor: '#2B303A' }}>
        <Outlet />
        <Footer />
      </main>
      
    </>
  );
}

export default App;
