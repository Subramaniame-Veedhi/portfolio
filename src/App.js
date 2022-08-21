import './App.css';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import ProjectList from './components/projectlist/projectlist';
import Contact from './components/Contact/contact';
import { Footer } from './components/Footer/footer';


function App() {
  return (
    <div>
      <Intro />
      <div className='App'><About /></div>
      <ProjectList/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
