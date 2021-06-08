import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

function App() {

  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');

  return (
    <Container>
      <h1>Hello World</h1>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
      <Button variant="link">Link</Button>

      <hr />
      <Button onClick={() => setError('Bad Username')} variant="primary">Set Error</Button>{' '}
      <Button onClick={() => setError(null)} variant="success">Clear Error</Button>{' '}

      {error && <Alert className="mt-1 mt-md-3" variant="danger">You have an error: {error}</Alert>}

      <hr />

      <Row>
        <Col md={5} lg={2}>Hi There</Col>
        <Col md={7} lg={10}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
              <p>Your email is: {email}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>1 of 4</Col>
        <Col>2 of 4</Col>
        <Col>3 of 4</Col>
        <Col>4 of 4</Col>
      </Row>
      </Container>
  );
}

export default App;
