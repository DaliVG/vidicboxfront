import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import styles from "../css/ProductsGrid.module.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [isActive, setIsActive] = useState(true)
  const [buttonText, setButtonText] = useState("Filter by Active");
  const [buttonStyle, setButtonStyle] = useState("outline-success");

  useEffect(() => {
    fetch('')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
  }, []);

  useEffect(()=>{
  }, [buttonStyle]);

    const handleOnClick = (e) =>{
      if(isActive){
        setButtonText("Filter by Active");
        setButtonStyle("outline-success")
      } else {
        setButtonText("Reset filter")
        setButtonStyle("outline-dark")
      }
      setIsActive(!isActive);
      e.preventDefault();
    };

    return (<>
    <Container className={styles.filter}>
      <Button variant={buttonStyle} onClick={handleOnClick}>{buttonText}</Button>
     </Container>
    <ul className={styles.productsGrid}>
        {products.map((product) => (
            <ProductCard key={product.idProduct} product={product} />
        ))}
    </ul>
    </>
  );
}