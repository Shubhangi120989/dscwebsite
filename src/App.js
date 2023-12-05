import logo from './logo.svg';
import './App.css';
import Testimonial from './components/Testimonial';
// import CardIt from './components/CardIt';
import Footer from './components/footer'
import About from './components/About';

function App() {
  return (
    <>
    <Testimonial/>
    {/* <CardIt title="card new title" subtitle="card new subtitle" text="card new text"/> */}
    
    <About/>
    <Footer/>

    </>
  );
}

export default App;
