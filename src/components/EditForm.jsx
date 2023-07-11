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
      idPriceReduction: null,
      priceReductionName: null,
      priceReductionAmount: null
    }
  };
  useEffect(() => {
    ApiService.getAllPriceReductions()
      .then(response => {
        setPriceReductions(response.data);
      })
  }, []);

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "priceReductions.idPriceReduction") {
      const selectedPriceReduction = priceReductions.find(
        (reduction) => reduction.idPriceReduction === parseInt(value)
      );
      setModifyProduct({
        ...modifyProduct,
        priceReductions: {
          ...modifyProduct.priceReductions,
          idPriceReduction: value,
          priceReductionName: selectedPriceReduction.priceReductionName,
          priceReductionAmount: selectedPriceReduction.priceReductionAmount
        }
      });
    } else if(value===""){
        setModifyProduct({
          ...modifyProduct,
          priceReductions: {}
        });
    } else{
      setModifyProduct({ ...modifyProduct, [name]: value });
    }
  };


  priceReductions.find(
    (reduction) => reduction.idPriceReduction === modifyProduct.priceReductions.idPriceReduction
  );

  const updateProduct = () => {
    if (modifyProduct.description === "") {
      modifyProduct.description = product.description;
    }
    if (modifyProduct.price === "") {
      modifyProduct.price = product.price;
    }

    if (modifyProduct.priceReductions.priceReductionName === null && modifyProduct.priceReductions.priceReductionName === "" ) {
      modifyProduct.priceReductions.idPriceReduction = product.priceReductions.idPriceReduction;
      modifyProduct.priceReductions.priceReductionName = product.priceReductions.priceReductionName;
      modifyProduct.priceReductions.priceReductionAmount = product.priceReductions.priceReductionAmount;
    }

    if (modifyProduct)
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
        <Form.Group>
          <Form.Label>Is active?</Form.Label>
          <Form.Select aria-label="Default select example" name="state" value={modifyProduct.state} onChange={handleInputChange}>
            <option value="Active">Active</option>
            <option value="discontinued">Discontinued</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Is any offert on?</Form.Label>
          <Form.Select aria-label="Default select example" name="priceReductions.idPriceReduction" value={modifyProduct.priceReductions.idPriceReduction} onChange={handleInputChange}>
          <option value="">Anyone</option>
            {priceReductions.map((reduction) => {
              if (reduction.priceReductionName!==null && reduction.priceReductionName!=="") {
                return (
                  <option key={reduction.idPriceReduction} value={reduction.idPriceReduction}>
                    {reduction.priceReductionName}
                  </option>
                );
                
              }
              return null;
            })}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={updateProduct}>
          Update Mandalorian
        </Button>
      </Form>
    </Container>
  );

}