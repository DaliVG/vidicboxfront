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
            <Form.Label>Item code:</Form.Label>
            <Form.Control type="text" placeholder="Enter a price" />
            </Form.Group>

            <Button variant="secondary mt-4" type="submit">
            This is the way
            </Button>
        </Form>
      </Container>
  );

}