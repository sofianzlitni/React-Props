import React from 'react'
import {Card, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'



const cardPortfolio = (props) => {
  const handlename = () => alert(`why did you click me?`)
  return (
    <div>
    <Card style={{ width: '18rem' }}>
{props.children}
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>{props.age}</Card.Text>
      <Card.Text>{props.profession}</Card.Text>

      <Button variant="primary" onClick={handlename}>DO NOT CLICK</Button>
    </Card.Body>
  </Card></div>
  )
}



export default cardPortfolio