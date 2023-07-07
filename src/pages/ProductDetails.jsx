import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { EditForm } from "../components/EditForm";
import { get } from "../utils/httpClient";
import styles from "../css/ProductDetails.module.css";

import logo from '../img/mandoblack.png'
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function ProductDetails() {
  const { idProduct } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProducts] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    get("products/"+idProduct).then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, [idProduct]);

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
              <strong>Title:</strong> {product.description}
            </p>
            <p>
            <strong>Props:</strong>{" "}
            </p>
            <div>Name: {product.description}</div>
            <div>Price: {product.price}€</div>
            <div>State: {product.state}</div>
            <div>Offer: {product["priceReductions"]["priceReductionName"]}</div>
            <div>Discount: {product["priceReductions"]["priceReductionAmount"]}€</div>
            <div>
              Suppliers:
              {product.suppliersList.map((supplier) => (
                <div className={styles.responses} key={supplier.idSupplier}>{supplier.supplier}</div>
              ))}
            </div>
          </div>
          <Button variant="outline-dark" onClick={handleClick}>Edit mandalorian</Button>
          <Button variant="outline-danger">Delete mandalorian</Button>{' '}
        </Col> 
        <Col>
         {isActive ? <EditForm/> : <></>}
        </Col>
      </Row>
    </Container>
  );
}