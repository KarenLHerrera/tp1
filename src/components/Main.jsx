import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Main = ({ persona }) => {
  return (
    <div className="main">
      <br />
      <br />
      <Card className="tarjeta" style={{ width: "25rem" }}>
        <Card.Img variant="top" src={persona.foto} />
        <Card.Body>
          <Card.Title>Presentación</Card.Title>
          <Card.Text>
            Hola! Soy {persona.nombre} {persona.apellido}, estudiante de
            programación de la UTN-FRT
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Lenguajes:
            <br />
            {persona.lenguajes.map((lenguaje, index) => (
              <li key={index}>{lenguaje}</li>
            ))}
          </ListGroup.Item>

          <ListGroup.Item>
            Tengo Conocimientos en:
            <br />
            {persona.otros}
          </ListGroup.Item>
          <ListGroup.Item>
            En mis tiempos libres me gusta practicar:
            <br />
            {persona.pasatiempos.map((pasatiempo, i) => (
              <li key={i}>{pasatiempo}</li>
            ))}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup.Item>
          Mis mascotas son:
          <br />
          {persona.mascotas.map((mascota, i) => (
            <li key={i}>{mascota}</li>
          ))}
        </ListGroup.Item>
      </Card>
      <br />
      <br />
    </div>
  );
};

export default Main;
