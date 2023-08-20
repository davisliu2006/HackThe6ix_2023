
import '../../src/App.css';
import { Button, Form } from 'react-bootstrap';

function ContactsPage() {

    return (

        <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30,
                  position:'absolute',
                  top:'10vh',
                  left:'23%'
                  }}>

            <text style={{
                fontSize:'40px',
                color:'#3494f4',
                fontWeight: 'bold'
            }}>
            Contact Us!
            </text>
            <br/>
            <br/>
      <Form>
      <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" />
        </Form.Group>
        <p/>
        <p/>
        <br/>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <p/>
        <p/>
        <br/>
        <Form.Group>
          <Form.Label>Enter your question/concern:</Form.Label>
          <Form.Control type="text" placeholder="Enter your response"/>
        </Form.Group>
        <p/>
        <br/>
        <Button variant="primary" type="submit">
           Submit
        </Button>
      </Form>
    </div>
    )
    
}

export default ContactsPage;