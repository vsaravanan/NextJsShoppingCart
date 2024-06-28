import Image from 'next/image'
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/cart.slice.js.old';
import useCartStore from '/redux/useCartStore'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product }) => {
  // const dispatch = useDispatch();
  const { addToCart } = useCartStore()

  return (
    <div className={styles.card}>
      <Image src={product.image} alt={product.image} height={300} width={220} />
      <h4 className={styles.title}>{product.product}</h4>
      <h5 className={styles.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <button onClick={() => addToCart(product)} className={styles.button}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
