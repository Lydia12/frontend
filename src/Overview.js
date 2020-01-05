import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Conductores from './Conductores';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Overview() {
   

  const conductores = [{
    dni: "1234K",
    nombre: "Juan",
    apellido: "Carlos",
    puntos: "12",
    multas: "1"
  },
  {
    dni: "6789L",
    nombre: "Maria",
    apellido: "Anna",
    puntos: "7",
    multas: "2"
  },
  {
    dni: "61111L",
    nombre: "Nina",
    apellido: "Cortez",
    puntos: "0",
    multas: "0"
  },
  {
    dni: "343434L",
    nombre: "Diego",
    apellido: "Rivera",
    puntos: "7",
    multas: "3"
  },
  {
    dni: "344334H",
    nombre: "Felix",
    apellido: "Smith",
    puntos: "7",
    multas: "2"
  }
];

  return (
    <div>
      
      <Container>
        <Row>
            <Col sm={10}> </Col>
            <Col>
              <Button  variant="outline-danger" size="lg">Logout</Button>
            </Col>
          </Row>
          <Row>
            <h1>Seguro de automóvil</h1>
          </Row>
          <Row>
            <Col>
              <Conductores conductores={conductores}/>
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Overview;
