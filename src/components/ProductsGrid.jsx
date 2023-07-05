import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import styles from "../css/ProductsGrid.module.css";

export function ProductsGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
  }, []);
    return (
    <ul className={styles.productsGrid}>
        {products.map((product) => (
            <ProductCard key={product.description} product={product} />
        ))}
    </ul>
  );
}