import React from 'react'
import {data} from "../helper/data"
import {Col, Container, Row, Form} from "react-bootstrap";
import Player from './Player';

const CardContainer = () => {
  return (
    <>
     <Form.Control className='w-50 m-auto' type="search" placeholder="Search Player..." readOnly />
        <Container className='kart-container rounded-4 my-4 p-3'>
            <Row className='g-3 justify-content-center'>
                {data.map((player)=>(
                   
                    <Col md={6} lg={4} xl={3} key={player.name}>
                        <Player {...player}/>
                    </Col>
                ))}
            </Row>
        </Container>



    </>
  )
}

export default CardContainer