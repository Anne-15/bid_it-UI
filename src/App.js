import './index.css';
import Navbar from './components/Navbar';
// import Search from './components/Search';
import Tenders from './pages/Tenders';
import Search from './components/Search';

export default function App() {

  return (
    <>
      <Navbar/>
      <Search/>
      <Tenders/>
    </>
  );
}

