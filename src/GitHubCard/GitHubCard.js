import React from "react";
import Card from 'react-bootstrap/Card'
import CapitanAmerica from './CA.jpeg'

function GitHubCard() {
    return (
        <div className = "card">
            <Card style = {{width:"18rem"}}>
            <Card.Img variant="top" src={CapitanAmerica} />

        <Card.Body>
            <Card.Title>Capitan America</Card.Title>
            <Card.Text>
            Captain America is a superhero appearing in American comic books published by Marvel Comics.
            Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II 
            </Card.Text>
        </Card.Body>

            </Card>

        </div>
    )
}
export default GitHubCard