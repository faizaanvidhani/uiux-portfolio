import '../css/Home.css';
import '../css/Reset.css';
import projectsJSON from '../assets/projects.json';
import Header from './components/Header';
import Intro from './components/Intro';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

export default function Home() {
  const projects = projectsJSON.map((p, i) => (
    <ProjectCard key={i} project={p}/>
  ))

  return (
    <div>
      <Header/>
      <div className="home">
        <Intro/>
        <h3 className="project-list-header">Select UIUX Works</h3>
        <div className="projects-list">
          {projects}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
