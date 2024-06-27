import Image from 'next/image'
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   incrementQuantity,
//   decrementQuantity,
//   removeFromCart,
// } from '../redux/cart.slice.js.old';
import useCartStore from '/redux/useCartStore'
import styles from '../styles/CartPage.module.css'

const CartPage = () => {
  // const cart = useSelector((state) => state.cart);
  // const dispatch = useDispatch();
  const { cart, totalPrice, incrementQuantity, decrementQuantity, removeFromCart } = useCartStore()

  // const getTotalPrice = () => {
  //   return cart.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0)
  // }

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item, i) => (
            <div key={i} className={styles.body}>
              <div className={styles.image}>
                <Image src={item.image} height='90' width='65' />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>x</button>
              </div>
              <p>$ {(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
          <h2>Grand Total: $ {totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  )
}

export default CartPage
