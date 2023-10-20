import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header/Header';
const History = ({ benefit, desc, amount}) =>{
    const date = new Date().toLocaleTimeString()
    const time = new Date().toLocaleDateString();
    let status = 'successful'
    return ( 
    <Container className=''>
    <Header/>
        <h4 className='mb-4 mt-5 text-white text-center'>Transaction History</h4>

        <div className='shadow-lg vh-100 mt-3 py-3'>
            <h6 className='mb-4 text-white text-center'>Transaction History</h6>
            <Row className='text-center'>
                <Col>
            <p>Beneficiary Number</p>
            <p>Amount</p>
            <p>Description</p>
            <p>Time</p>
            <p>Date</p>
            <p>Transfer Status</p>
                </Col>
                <Col>
                <p>{benefit}</p>
                <p>{amount}</p>
                <p>{desc}</p>
                <p>{date}</p>
                <p>{time}</p>
                <p className='text-success'>{status}</p>
                

                </Col>
            </Row>
        </div>
    </Container>
    )
}
export default History;