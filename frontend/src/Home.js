import React, { useEffect } from 'react';
import {Navbar, Table, Container, Row, Col, Button, ButtonGroup, Form} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from './redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(loadUsers());
  }, [])

  return (
    <Navbar bg = "primary" variant = "dark" className = "justify-content-center">
        <Navbar.Brand>Python Flask MongoDB Redux App</Navbar.Brand>
    </Navbar>
  )
}

export default Home