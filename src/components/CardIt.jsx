import Card from 'react-bootstrap/Card';
import './testimonial.css'
function CardIt(props) {
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title className='cardtitle'>{props.title}</Card.Title>
        <Card.Subtitle className="cardsub mb-2 text-muted">{props.subtitle}</Card.Subtitle>
        <Card.Text className='cardtext'>
          {props.text}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default CardIt;