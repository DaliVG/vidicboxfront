import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";
import styles from "../css/ProductDetails.module.css";
import logo from '../img/mandoblack.png'

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
        <strong>Ingredientes:</strong>{" "}
        {/* {data.forEach(element => {
            <img
            className={`${styles.col} ${styles.productImage}`}
            src={element.URL}
            alt={element.ingredient}
          />
          })} */}
        </p>
      </div>
    </div>
  );
}