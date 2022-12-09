import '../../css/projects/Projects.css';
import '../../css/projects/Yhangry.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Yhangry() {
    return (
        <div>
            <Header/>
            <div className="project-page">
                <div className="project-body">
                    <h1 className="project-page-title">Yhangry</h1>
                    <p className="project-page-quick-access">To check out the final product, click <a class="page-link" href="https://www.figma.com/proto/u5MQq8VDdRvqgLzq8Cm8FE/yhangry?node-id=3%3A2&starting-point-node-id=3%3A2">here</a>.</p>
                    <img className="project-page-image" src="images/yhangry-cropped.jpeg" alt="sneaker background"/>
                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Context</h3>
                        <p className="project-page-section-body">
                            To practice designing an interactive interface, I decided to build one for an emerging 
                            startup. I went through the full process of mocking up a solution to the concept of the 
                            startup yhangry. Yhangry is a private chef marketplace where people can book a chef for 
                            a social occasion in their homes.
                        </p>
                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Implementation</h3>
                        <p className="project-page-section-body">
                            The interactive interface seeks to provide a quick and easy way to find a nearby 
                            chef who specializes in a particular cuisine. 
                        </p>
                        <br/>
                        <br/>

                        <div className="project-page-center">
                            <iframe title="figma" width="500vw" height="850vh" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fu5MQq8VDdRvqgLzq8Cm8FE%2Fyhangry%3Fnode-id%3D3%253A2%26starting-point-node-id%3D3%253A2" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Design Decisions</h3>
                        <ul className="project-page-list">
                            <li>Added arrows to elements to clickable elements to visually indicate navigation</li>
                            <li>Consistent color scheme to enhance readability</li>
                            <li>Clear visual hierarchy by manipulating font weight/size</li>
                        </ul>
                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Conclusion</h3>
                        <p className="project-page-section-body">
                            Designing this interface forced me to think about the user journey. 
                            I was focused not only on what the pages looked like, but also the 
                            transitions between the different pages. On every screen, I asked 
                            myself a few questions. Does the user know where they are? Where are 
                            all the places they will want to go next? Can they go back? Thinking 
                            about the user was instrumental in creating an intuitive user experience.
                        </p>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}