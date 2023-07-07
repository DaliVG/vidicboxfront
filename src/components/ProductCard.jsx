import { Link } from "react-router-dom";
import styles from "../css/ProductsCard.module.css";

export function ProductCard({ product }) {

  return (
    <li className={styles.productCard}>
      <Link to={"/products/"+product.idProduct}>
        <div>{product.description}</div>
        <div className={styles.subtitle}>{product.state}</div>
      </Link>
    </li>
  );
}