import { Link } from "react-router-dom";
import styles from "../css/ProductsCard.module.css";

export function ProductCard({ product }) {
  const imageUrl = "https://lumiere-a.akamaihd.net/v1/images/cg_disneyplus_themandalorian_s3_mobile_1388_1c0cdf88.jpeg?region=0,32,1024,576&width=960";
  return (
    <li className={styles.productCard}>
      <Link to={product.idProduct}>
        <img
          width={300}
          height={180}
          className={styles.productImage}
          src={imageUrl}
          alt={product.strDrink}
        />
        <div>{product.description}</div>
      </Link>
    </li>
  );
}