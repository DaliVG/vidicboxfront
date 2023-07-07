import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../css/CreateForm.module.css";

export function CreateForm() {
const handleSubmit = () =>{};
  return (
    <Container className={styles.box}>
        <h1>Create</h1>
        <Form className={styles.form} onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" 
                            placeholder="Enter the new name" />
            </Form.Group>
            <Form.Group>
            <Form.Label>Price:</Form.Label>
            <Form.Control type="number" 
                            placeholder="Enter a price" />
            </Form.Group>
            <Form.Group>
            <Form.Label>Enter an offer:</Form.Label>
            <Form.Control type="number" placeholder="Is there an Offer active?" />
            </Form.Group>
            <Form.Label>Is active?</Form.Label>
            <Form.Select aria-label="Default select example">
                <option>Select state</option>
                <option value="Active">Active</option>
                <option value="discontinued">Discontinued</option>
            </Form.Select>
            <Button variant="secondary mt-4" type="submit">
            This is the way
            </Button>
        </Form>
      </Container>
  );

}