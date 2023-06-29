import React from 'react'
import { Form, Input, TextArea, Button, Icon, Divider, Container } from 'semantic-ui-react'
import emailjs from "emailjs-com";

export default function Contact() {
    
    function handleSendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_5zdd1z5', 'mbportfolio_7k6y29j', e.target, '4nnCySLZcTvrQF3PU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <>
        <Container>
            <h1>GET IN TOUCH</h1>
            <Divider/>
            <Form onSubmit={(handleSendEmail)}>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='First name'
                        placeholder='First name'
                        name="first_name"
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Last name'
                        placeholder='Last name'
                        name="last_name"
                    />
                </Form.Group>
                <Form.Field
                    id='form-input-control-error-email'
                    control={Input}
                    label='Email'
                    placeholder='E-mail Address'
                    name="email"
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Subject'
                    placeholder='Subject'
                    name="subject"
                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Message'
                    placeholder='Message'
                    name="message"
                />
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='SUBMIT'
                />
            </Form>
        <Divider/>
        <div>
            <a href="https://www.linkedin.com/in/migdelinabuelna/"> <Icon name="linkedin" color="brown"/> LINKEDIN</a>
        </div>
        </Container>
        </>
    )
}