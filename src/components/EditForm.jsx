import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../css/EditForm.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";

export function EditForm() {
const [product, setProducts] = useState([]);
const { idProduct } = useParams();

  useEffect(() => {
    get("products/"+idProduct).then((data) => {
      setProducts(data);
    });
  }, [idProduct]);

  return (
    <Container className={styles.box}>
        <h1>Edit {product.description}</h1>
        <Form>
        <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter the new name" />
            </Form.Group>
            <Form.Group>
            <Form.Label>Price:</Form.Label>
            <Form.Control type="number" placeholder="Enter a price" />
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
            <Button variant="primary" type="submit">
            Click here to submit form
            </Button>
        </Form>
      </Container>
  );

}