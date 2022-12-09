
import '../../css/projects/Projects.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SneakerCentral() {

    return (
        <div>
            <Header/>
            <div className="project-page">
                <div className="project-body">
                    <h1 className="project-page-title">Sneaker Central</h1>
                    <p className="project-page-quick-access">To check out the final product, click <a class="page-link" href="https://ecstaticgoat777.github.io/basketball-shoes/">here</a>.</p>
                    <img className="project-page-image" src="images/sneakers.png" alt="sneaker background"/>
                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Context</h3>
                        <p className="project-page-section-body">
                            To get some practice with interactive interfaces, I chose to build a list-based interface 
                            that uses interface components and ties them to an internal data state. I love sneakers. So, 
                            I decided to created a list-based interface featuring popular sneakers for various sports 
                            and brands that would keep track of favorited shoes and the total price of favorited shoes.
                        </p>
                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Goals</h3>
                        <p className="project-page-section-body">For my list-based interface, I set out to implement the following:</p>
                        <ul className="project-page-list">
                            <li>A way to add/remove items from an aggregator</li>
                            <li>A way to aggregate some property of the items in the aggregator</li>
                            <li>A way to reset the aggregator</li>
                            <li>A filtering mechanism for list items</li>
                            <li>A sorting mechanism for list items</li>
                        </ul>

                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Implementation</h3>
                        <p className="project-page-section-body">
                            For my sneaker app, I created a sidebar and a favorites cart. The sidebar features a radio 
                            group for sorting by popularity and price and check boxes for filtering by gender, sport, 
                            brand, and color. The sidebar allows users to find their favorite sneakers in an efficient 
                            and intuitive manner. The favorites cart stores favorited pairs of shoes. Once users have 
                            found a pair of shoes they like, they can save that pair and continue browsing.
                        </p>

                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Design Choices</h3>
                        <ul className="project-page-list">
                            <li>
                                Established visual hierarchy with headings in larger font sizes and 
                                subheadings and body text in smaller font sizes
                            </li>
                            <li>
                                Indicated items marked as favorites by changing the color 
                                of the favorited shoe cards
                            </li>
                            <li>Created contrast between color and text of buttons to enhance readability</li>
                        </ul>

                    </div>

                    <div className="project-page-section">
                        <h3 className="project-page-section-heading">Conclusion</h3>
                        <p className="project-page-section-body">
                            By building this sneaker app, I solidified my understanding of the internal workings of 
                            filtering and sorting mechanisms. I realized that that an intuitive model of filterings 
                            involves OR filtering between filter options in a given category and AND filtering between 
                            filters options across different categories. I also realized the importance of designing an interface 
                            that aligns with the mental models of both first-time and casual users.
                        </p>

                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}