import '../css/About.css';
import '../css/Reset.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function About() {
  return (
    <div>
      <Header/>
      <div className="about">
          <p className="about-text">
            This portfolio is a compilation of UIUX projects completed in Fall 2022
            during my time at Brown University.
          </p>
      </div>
      <Footer/>
    </div>
  );
}