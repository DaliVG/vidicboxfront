import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { CreateForm } from "../components/CreateForm";
import styles from "../css/ProductsGrid.module.css";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Popup from 'reactjs-popup';

import ApiService from "../utils/services/ApiService";

export function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isCreateMode, setCreateMode] = useState(false);

  const text = isActive ? 'Reset filter' : 'Filter by Active'
  const style = isActive ? 'outline-secondary' : 'outline-dark'

  useEffect(() => {
    ApiService.getAll()
      .then(response => {
        setProducts(response.data);
      }) }, []);

  const filteredProducts = isActive ? products.filter(product => product.state==="Active") : products;

  const handleClick=()=>{
    setIsActive(!isActive);
    }

  const handleCreate=()=>{
    setCreateMode(!isCreateMode);
    }

    return (<>
    <div>
    <Container className={styles.filter}>
      <Row>
        <Col xs={6}>        
          <Button variant={style} onClick={handleClick}>{text}</Button>
        </Col>
        <Col xs={6}>  
        <Popup trigger={<Button variant="outline-primary" onClick={handleCreate}>Create a mandalorian</Button>} position="right center" modal nested>
        {
                    close => (
                        <div className={styles.modal}>
                             {<CreateForm className="tooltip"/>}
                                <Button variant="outline-danger" onClick={() => close()}>
                                      Close
                                </Button>
                        </div>
                    )
                }
        </Popup>  
        </Col>
      </Row>
     </Container>
    <ul className={styles.productsGrid}>
        {filteredProducts.map((product) => (
            <ProductCard key={product.idProduct} product={product} />
        ))}
    </ul>
    </div>
    </>
  );
}