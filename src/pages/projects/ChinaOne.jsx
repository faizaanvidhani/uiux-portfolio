import '../../css/projects/Projects.css';
import '../../css/projects/ChinaOne.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ChinaOne() {
    return (
        <div>
            <Header/>
            <div>
                <div className="project-page">
                <div className="project-body">
                    <h1 className="project-page-title">China One Restaurant Redesign</h1>
                    <p className="project-page-quick-access">To check out the final product, click <a class="page-link" href="https://ecstaticgoat777.github.io/chinese-restaurant-redesign/">here</a>. Note that buttons and navigational elements are replaced with dummy elements. </p>
                    <img className="project-page-image" src="images/chinese-cropped.png" alt="china one restaurant"/>
                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Context</h3>
                        <p className="project-page-section-body">
                        To practice the workflow of redesigning websites, I decided to transform a website that needed improvement. 
                        I chose a website belonging to a local Chinese restaurant near where I live. The existing interface had 
                        flaws that needed to be addressed. To address the issues of the existing interface, I created both lo-fidelity 
                        and hi-fidelity prototypes and built a responsive website based on these prototypes.

                        </p>
                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Existing Interface</h3>
                        <div className="project-page-center">
                            <img className="china-one-image" src="images/china-one/old-interface.png" alt="old interface"/>
                        </div>
                        <div className="project-page-center">
                            <p className="china-one-image-caption">
                            I chose this custom-made restaurant ordering site since I saw many opportunities 
                            for improvement in visual design (e.g. better use of white space, headings of 
                            different weights/levels, more intuitive layout).
                            </p>
                        </div>

                    </div>

                    <div className="project-page-section">

                        <h3 className="project-page-section-heading">Usability Analysis</h3>
                        
                        <div className="project-page-list-blocks">
                            <div>
                                <h4 className="project-page-list-heading">Learnability</h4>
                                <ul className="project-page-list">
                                    <li>
                                    First-time users may have a hard time learning about the restaurant
                                    </li>
                                    <li>
                                    The bulky body of text on the home page makes it harder to extract relevant information 
                                    </li>
                                    <li>
                                    It is difficult to find the link to the customer reviews
                                    </li>
                                    <li>
                                    The customer reviews link is placed within a bulky body of text
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="project-page-list-heading">Memorability</h4>
                                <ul className="project-page-list">
                                    <li>
                                    Casual users may find it difficult to recall where the telephone number is located
                                    </li>
                                    <li>
                                    All relevant information seems to be concentrated in the bulky body of text on the home page
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="project-page-list-heading">Efficiency</h4>
                                <ul className="project-page-list">
                                    <li>
                                    The text that reads ORDER ONLINE can be turned into a button that transports users to the menu page to make ordering easier and more efficient
                                    </li>
                                    <li>
                                    The address and contact information are related pieces of information that should be situated near each other
                                    </li>
                                    <li>
                                    The contact information is located at the top-left corner; the address is located in the middle of the screen
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Low-Fidelity Wireframing</h3>
                        <p className="project-page-section-body">
                            To address the usability issues, I created low-fidelity wireframes for desktop,
                            tablet, and mobile sizes. I have annotated the desktop prototype with the intent
                            of some of my design choices. These annotations also apply to the other low-fidelity
                            wireframes.
                        </p>
                        <h4 className="project-page-image-title">Desktop Low-Fidelity Wireframe</h4>
                        <div className="project-page-center">
                            <img className="china-one-image" src="images/china-one/desktop-lo.jpg" alt="desktop lo-fi"/>
                        </div>
                        <h4 className="project-page-image-title">Tablet Low-Fidelity Wireframe</h4>
                        <div className="project-page-center">
                            <img className="china-one-image" src="images/china-one/tablet-lo.jpg" alt="tablet lo-fi"/>
                        </div>
                        <h4 className="project-page-image-title">Mobile Low-Fidelity Wireframe</h4>
                        <div className="project-page-center">
                            <img className="china-one-image" src="images/china-one/phone-lo.jpg" alt="mobile lo-fi"/>
                        </div>
                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Visual Design Style Guide</h3>
                        <p className="project-page-section-body">
                            Next, I created a visual design style guide to thoroughly describe the different
                            base states, interaction states, and other visual elements used on the actual website.
                        </p>
                        <div className="project-page-center">
                            <img className="china-one-image" src="images/china-one/visual-design-style.png" alt="visual design guide"/>
                        </div>

                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">High-Fidelity Prototyping</h3>
                        <p className="project-page-section-body">
                            After creating a visual design style guide, I created high-fidelity prototypes. I used
                            visual design principles such as color, alignment, and font differences to show visual hierarchy
                            in the interface. 
                        </p>
                        <h4 className="project-page-image-title">Desktop High-Fidelity Prototype</h4>
                        <div className="project-page-center">
                            <img className="china-one-image" src="images/china-one/desktop-hi.png" alt="desktop hi-fi"/>
                        </div>
                        <h4 className="project-page-image-title">Tablet High-Fidelity Prototypes</h4>
                        <div className="project-page-center">
                            <img className="china-one-image" src="images/china-one/tablet-hi-1.png" alt="tablet hi-fi-1"/>
                        </div>
                        <div className="project-page-center">
                            <img className="china-one-image" src="images/china-one/tablet-hi-2.png" alt="tablet hi-fi-2"/>
                        </div>
                        <h4 className="project-page-image-title">Mobile High-Fidelity Prototypes</h4>
                        <div className="project-page-center">
                            <img className="china-one-image" src="images/china-one/phone-hi.png" alt="mobile hi-fi"/>
                        </div>
                    </div>




                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Implementation</h3>
                        <p className="project-page-section-body">
                            Using the high-fidelity prototypes, I built the page using HTML and CSS!
                        </p>
                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Conclusion</h3>
                        <p className="project-page-section-body">
                            By analyzing a simple website, I was able to identify several usability flaws. I found that it 
                            was incredibly helpful to break down the redesigning process into separate steps: identification 
                            of flaws, lo-fi prototyping, hi-fi prototyping, and redesigning the actual site. I realized 
                            the challenges of making a website that caters to first-time, casual, and frequent users. It was 
                            also interesting to see how a consistent color and typography scheme contribute greatly to the visual 
                            appeal of a website.
                        </p>

                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}