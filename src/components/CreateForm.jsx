import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../css/CreateForm.module.css";
import { useState } from "react";
import ApiService from "../utils/services/ApiService";

export function CreateForm() {
  const initialProduct = {
    itemCode: "",
    description: ""
  };

  const [modifyProduct, setActualProduct] = useState(initialProduct);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setActualProduct({ ...modifyProduct, [name]: value });
  }

  const handleCreateProduct = () =>{
      ApiService.create(modifyProduct)
      .then(
        alert("The Product was created successfully! This is the way"))
      .catch(e => {
        console.log(e);
      });
  }
  

const handleSubmit = () =>{};
  return (
    <Container className={styles.box}>
        <h1>Create</h1>
        <Form className={styles.form} onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter the new name" name="description" value={modifyProduct.description} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Item code:</Form.Label>
            <Form.Control type="text" placeholder="Enter an item code" name="itemCode" value={modifyProduct.itemCode} onChange={handleInputChange}/>
            </Form.Group>
            <Button variant="secondary mt-4" type="submit" onClick={handleCreateProduct}>
            This is the way
            </Button>
        </Form>
      </Container>
  );

}