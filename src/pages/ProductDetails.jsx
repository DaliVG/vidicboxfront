import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { EditForm } from "../components/EditForm";
import styles from "../css/ProductDetails.module.css";

import logo from '../img/mandoblack.png'
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ApiService from "../utils/services/ApiService";


export function ProductDetails() {
  const { idProduct } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProducts] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    ApiService.get(idProduct)
    .then(response => {
      setProducts(response.data);
      setIsLoading(false);
    })
    .catch(e => {
      console.log(e);
    });
  }, [idProduct]);

  const deleteProduct = () => {
    ApiService.remove(idProduct)
    .then(
      alert("The Product was deleted successfully! This is the way"))
    .catch(e => {
      console.log(e);
    });
  };


  if (isLoading) {
    return <Spinner />;
  }

  const handleClick=()=>{
    setIsActive(!isActive);
  }

  return (
    <Container>
      <Row>
        <Col>
        <div className={styles.detailsContainer}>
          <img
            className={`${styles.col} ${styles.productImage}`}
            src={logo}
            alt={"mando"}
          />
        </div>
        </Col>
        <Col>
        <div className={`${styles.col} ${styles.productDetails}`}>
            <p className={styles.firstItem}>
              <strong>Mandalorian</strong>
            </p>
            <div><strong>Name:</strong> {product.description}</div>
            <div><strong>Price:</strong> {product.price}€</div>
            <div><strong>ItemCode:</strong> {product.itemCode}</div>
            <div><strong>State:</strong> {product.state}</div>
            <div><strong>Creation Date:</strong> {product.creationDate}</div>
            {(product.priceReductions.priceReductionName!==null && product.priceReductions.priceReductionName!=="") && (
              <>
                <div><strong>Offer:</strong> {product.priceReductions.priceReductionName}</div>
                <div><strong>Discount:</strong> {product.priceReductions.priceReductionAmount}€</div>
              </>
              )}
            <div>
            <strong>Suppliers:</strong>
              {product.suppliersList.map((supplier) => (
                <div className={styles.responses} key={supplier.idSupplier}>{supplier.supplier}</div>
              ))}
            </div>
          </div>{product.state==="Active" ? <Button variant="outline-dark" onClick={handleClick}>Edit mandalorian</Button> : <div></div>}
          <Button variant="outline-dark" onClick={handleClick}>Edit mandalorian</Button>
          <Button variant="outline-danger" onClick={deleteProduct}>Delete mandalorian</Button>{' '}
        </Col> 
        <Col>
         {isActive ? <EditForm/> : <></>}
        </Col>
      </Row>
    </Container>
  );
}