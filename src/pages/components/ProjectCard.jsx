import Card from 'react-bootstrap/Card';
import '../../css/components/ProjectCard.css';
import {useNavigate} from 'react-router';


export default function ProjectCard(props) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        let titlePage = props.project.title.split(" ")[0].toLowerCase();
        if (titlePage === "sneaker") {
            navigate('./sneaker-central');
        } else if (titlePage === "china") {
            navigate('/china-one-redesign');
        } else if (titlePage === "yhangry") {
            navigate('/yhangry');
            return;
        } else if (titlePage === "personas") {
            navigate('/personas-storyboarding');
        }
    }
    return (
        <div onClick={handleNavigate} className="project-card">
            <Card>
                <Card.Img className="project-card-img" src={props.project.image}/>
                <Card.Body className="project-card-body">
                    <Card.Title className="project-card-title">{props.project.title}</Card.Title>
                    <Card.Text className="project-card-subtitle">{props.project.subtitle}</Card.Text>
                    <Card.Text className="project-card-description">{props.project.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}