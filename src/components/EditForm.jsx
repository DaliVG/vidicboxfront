import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../css/EditForm.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ApiService from "../utils/services/ApiService";

export function EditForm() {
  const [product, setProducts] = useState([]);
  const [priceReductions, setPriceReductions] = useState([]);
  const { idProduct } = useParams();

  const initialProduct = {
    idProduct: null,
    itemCode: "",
    description: "",
    price: 0,
    state: "Active",
    suppliersList: [],
    priceReductions: {
      idPriceReduction: "",
      priceReductionName: "",
      priceReductionAmount: 0
      }
  };
  useEffect(() => {
    ApiService.getAllPriceReductions()
      .then(response => {
        setPriceReductions(response.data);
      }) }, []);

  useEffect(() => {
    ApiService.get(idProduct)
      .then(response => {
        setProducts(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, [idProduct]);

  const [modifyProduct, setModifyProduct] = useState(initialProduct);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setModifyProduct({ ...modifyProduct, [name]: value });
  }

  
  const handleInputReductions = event => {
    const { name, value } = event.target;
    setModifyProduct({ ...modifyProduct, priceReductions:{[name]: value }});
  }

  const updateProduct = () => {
    if (modifyProduct.description === "") {
      modifyProduct.description = product.description;
    }
    if (modifyProduct.price === "") {
      modifyProduct.price = product.price;
    }
    if (modifyProduct.priceReductions.priceReductionName === "") {
      modifyProduct.priceReductions = product.priceReductions;
    } else {
      
      modifyProduct.priceReductions = priceReductions.idPriceReduction;
      priceReductions.priceReductionName = priceReductions[parseInt(priceReductions.idPriceReduction)].priceReductionName;
      priceReductions.priceReductionAmount = priceReductions[parseInt(priceReductions.idPriceReduction)].priceReductionAmount;
    }
    if(modifyProduct)
    ApiService.update(idProduct, modifyProduct)
      .then(
        alert("The Product was updated successfully! This is the way"))
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <Container className={styles.box}>
      <h1>Edit {product.description}</h1>
      <Form>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter the modified name" name="description" value={modifyProduct.description} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price:</Form.Label>
          <Form.Control type="number" placeholder="Enter a price" name="price" value={modifyProduct.price} onChange={handleInputChange} />
        </Form.Group>
        <Form.Label>Is active?</Form.Label>
        <Form.Select aria-label="Default select example" name="state" value={modifyProduct.state} onChange={handleInputChange}>
          <option>Select state</option>
          <option value="Active">Active</option>
          <option value="discontinued">Discontinued</option>
        </Form.Select>
        <Form.Label>Is any offert on?</Form.Label>
        <Form.Select aria-label="Default select example" name="idPriceReductions" value={modifyProduct.priceReductions} onChange={handleInputReductions}>
        <option>Select state</option>
          {priceReductions.map((reduction) => (
        <option key={reduction.idPriceReduction} value={reduction}> {reduction.priceReductionName}</option>))}
        </Form.Select>

        <Button variant="primary" type="submit" onClick={updateProduct}>
          Update Mandalorian
        </Button>
      </Form>
    </Container>
  );

}