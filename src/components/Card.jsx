import React, { Component } from 'react'
import { Card } from 'react-bootstrap';


export default class CardItem extends Component {
  render() {
    return (
      <div>
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
      </div>
    )
  }
}
