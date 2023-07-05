import React from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../img/mandoblack.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css';

export function Home() {
return (
    <Container>
      <div className='welcome'>
        <img src={logo} className='img-fluid' alt='home' />
        <div className='subtitle'>
          This is the way
        </div>
      </div>
    </Container>)
    }