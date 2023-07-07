import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

import styles from "../css/ProductsGrid.module.css";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const text = isActive ? 'Reset filter' : 'Filter by Active'
  const style = isActive ? 'outline-secondary' : 'outline-dark'

  useEffect(() => {
    fetch('')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
  }, []);

  const filteredProducts = isActive ? products.filter(product => product.state==="Active") : products;

  const handleClick=()=>{
    setIsActive(!isActive);
    }

  const handleCreate=()=>{
    setIsActive(!isActive);
    }

    return (<>
    <Container className={styles.filter}>
      <Row>
        <Col xs={6}>        
          <Button variant={style} onClick={handleClick}>{text}</Button>
        </Col>
        <Col xs={6}>        
          <Button variant="outline-primary" onClick={handleCreate}>Create a mandalorian</Button>
        </Col>
      </Row>
     </Container>
    <ul className={styles.productsGrid}>
        {filteredProducts.map((product) => (
            <ProductCard key={product.idProduct} product={product} />
        ))}
    </ul>
    </>
  );
}