import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Accordion from "react-bootstrap/Accordion";
import RadioButton from "./RadioButton";
export default function ContactForm() {
    return (
        <Container>
            <Row className="justify-content-md-center ">
                <Col md>
                    <Form>
                        <Col md>
                            <Form.Group
                                className="mb-3 mt-5"
                                controlId="formBasicEmail"
                            >
                                <Form.Control
                                    type="name"
                                    placeholder="Enter Name"
                                />
                            </Form.Group>
                        </Col>

                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <Col md>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicEmail"
                                        >
                                            <Form.Label>
                                                Email address
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                            />
                                            {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
    </Form.Text> */}
                                        </Form.Group>
                                    </Col>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <FloatingLabel
                                        className="mb-3"
                                        controlId="floatingTextarea2"
                                        label="Message"
                                    >
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a message here"
                                            style={{
                                                height: "100px"
                                            }}
                                        />
                                    </FloatingLabel>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        {/* Radio Button with Email Telephone No Contact */}
                        <Col className="mt-3 mb-3">
                            <RadioButton />
                        </Col>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                {/* Button Radio */}
            </Row>
        </Container>
    );
}
