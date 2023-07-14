import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function Auth() {

    const initialPayload = {
        username: '',
        password: ''
    };

    const [loginPayload, setLoginPayload] = useState(initialPayload);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginPayload({ ...loginPayload, [name]: value });
    };

    const handleLogin = () => {
        
    };

    return (
        <div className="Auth-form-container">
            <Form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Log In</h3>
                    <Form.Group className="form-group mt-3">
                        <Form.Control
                            type="text"
                            name="username"
                            value={loginPayload.username}
                            onChange={handleInputChange}
                            variant="form-control mt-1 "
                            placeholder="Username"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="form-group mt-3 ">
                        <Form.Control
                            type="password"
                            name="password"
                            value={loginPayload.password}
                            onChange={handleInputChange}
                            variant="form-control mt-1"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>
                    <div className="d-grid gap-2 mt-3">
                        <Button type="submit" variant="btn submit" onClick={handleLogin}>
                            This is the way
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}