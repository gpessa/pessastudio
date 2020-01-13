import React from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"

import * as styles from "./styles.module.scss"

const CompareCard = ({ name, description, features, image }) => (
  <Card className="text-center">
    <Card.Img variant="top" src={image} />
    <Card.Body className={styles.body}>
      <Card.Title className={styles.title}>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      {features.map(feat => (
        <ListGroupItem className={styles.feature}>{feat}</ListGroupItem>
      ))}
    </ListGroup>
  </Card>
)

export default CompareCard
