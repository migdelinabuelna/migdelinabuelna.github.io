import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

export default function ContactForm() {
    return (
        <Form >
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-first-name'
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
        </Form.Group>
        <Form.Field
          id='form-input-control-error-email'
          control={Input}
          label='Email'
          placeholder='E-MAIL ADDRESS'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='MESSAGE'
          placeholder='Messege'
        />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='SUBMIT'
        />
      </Form>
    )
}