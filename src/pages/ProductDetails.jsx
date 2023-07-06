import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import styles from "../css/ProductDetails.module.css";
import logo from '../img/mandoblack.png'
import Button from 'react-bootstrap/Button';

export function ProductDetails() {
  const { idProduct } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProducts] = useState(null);

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

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.productImage}`}
        src={logo}
        alt={"mando"}
      />
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
        <Button variant="outline-dark">Editar</Button>{' '}
        <Button variant="outline-danger">Borrar</Button>{' '}
      </div>
    </div>
  );

}