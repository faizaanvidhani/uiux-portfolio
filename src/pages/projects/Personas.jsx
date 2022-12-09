import '../../css/projects/Projects.css';
import '../../css/projects/Personas.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Personas() {
    return (
        <div>
             <Header/>
            <div className="project-page">
                <div className="project-body">
                    <h1 className="project-page-title">Personas and Storyboarding</h1>
                    <img className="project-page-image" src="images/personas-cropped.jpg" alt="personas background"/>
                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Context</h3>
                        <p className="project-page-section-body">
                            To get a better sense of user experiences, I decided to engage in a classic UX task. 
                            I visited the local laundromat to observe real users interacting with the controls on a 
                            washer. I stepped into the shoes of the users (in the metaphorical sense, of course). I 
                            interviewed some of the users about their experiences, created personas based on these 
                            users, and illustrated a storyboard for one of my personas.
                        </p>
                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Sketch of Interface</h3>
                        <div className="project-page-center">
                            <img className="personas-sketch-image" src="images/personas/interface-sketch.jpg" alt="sketch of interface"/>
                        </div>
                        <p className="project-page-section-body">
                            This commercial washer interface features a collection of buttons and light-up 
                            indicators to help users achieve a particular washer cycle setting that is appropriate 
                            for washing their dirty clothes. Some of its key interactive components include buttons 
                            for soil levels, cycle types, and temperature options. Pressing a button for each row in 
                            the selection interface (soil level, cycle type, temperature options) results in a unique 
                            washer cycle setting that is made visible to the user via indicator lights. Other components 
                            include indicators for inserting coins/card, door status, wash/rinse/spin status. There is 
                            also a start button that serves to initiate the wash cycle.
                        </p>

                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Usability Analysis</h3>

                        <div className="project-page-list-blocks">
                            <div>
                                <h4 className="project-page-list-heading">Key Observations</h4>
                                <ul className="project-page-list">
                                    <li>
                                        Most users attempted to press locations on the interface that were not buttons, 
                                        particularly the rinse and spin images
                                    </li>
                                    <li>
                                    One user repeatedly pressed the ‘start’ button since the washer was not starting. The insert 
                                    coins/card indicator was on, but did not seem to grab the user’s attention
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="project-page-list-heading">Interview Questions</h4>
                                <ul className="project-page-list">
                                    <li>What was your experience like using this particular washer?</li>
                                    <li>What was your first impression of the washer controls?</li>
                                    <li>Where do you start when setting the washer controls?</li>
                                    <li>Were you able to find what you were looking for when setting the washer controls?</li>
                                    <li>How long did it take you to set the washer controls?</li>
                                    <li>Was this shorter, longer, or about the same compared to what you expected?</li>
                                    <li>Were these washer controls easy or difficult to understand?</li>
                                    <li>What, if anything, would you change about the water controls?</li>
                                    <li>If you have anything to say that wasn’t asked, please feel free to share!</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="project-page-list-heading">Summary of Responses</h4>
                                <ul className="project-page-list">
                                    <li>All users had a positive initial impression of the washer interface, reporting that it seemed intuitive</li>
                                    <li>However, most users expressed disappointment that they were unable to find buttons to fine-tune/add rinse and spin cycles that would help wash clothes better and reduce drying time</li>
                                    <li>Most users stated that it took longer than expected to set the washer controls since they were searching for such buttons to modulate rinse and spin levels</li>
                                    <li>Users seemed to be in agreement that buttons to modulate rinse and spin levels would be a great addition</li>
                                    <li>Most users also suggested a flashing indicator for the insert coin/change light-up as opposed to a static indicator</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Empathy Maps</h3>
                        <p className="project-page-section-body">
                            Using the data I gathered from observations and interviews, I created a couple of personas. The personas are based on overarching trends I 
                            observed amongst all the users I interviewed.
                        </p>

                        <div className="project-page-center">
                            <img className="personas-empathy-map-image" src="images/personas/persona-andy.png" alt="andy persona map"/>
                        </div>
                        <br/>
                        <div className="project-page-center">
                            <img className="personas-empathy-map-image" src="images/personas/persona-olivia.png" alt="olivia persona map"/>
                        </div>
                        

                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Storyboard</h3>
                        <p className="project-page-section-body">
                            This storyboard serves to depict Active Andy's user journey from start to end.
                        </p>
                        <div className="project-page-center">
                            <img className="personas-storyboard-image" src="images/personas/storyboard-1.png" alt="andy storyboard frames 1-4"/>
                        </div>
                        <div className="project-page-center">
                            <img className="personas-storyboard-image" src="images/personas/storyboard-2.png" alt="andy storyboard frames 5-8"/>
                        </div>
                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Conclusion</h3>
                        <p className="project-page-section-body">
                            What I took away from this classic UX task was both interesting and rewarding. I 
                            realized the importance of observing user behavior in understanding the user experience. 
                            I learned that interviews offer some insights into the motivations and goals of each user. 
                            But to get a more holistic and accurate perspective, it is also important to analyze user 
                            behavior. It was surprising to unravel some of the design flaws in a washer that initially 
                            seemmed completely intutiive.
                        </p>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}