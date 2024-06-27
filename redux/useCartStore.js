import { create } from 'zustand'

const useCartStore = create((set, get) => ({
  // Initial state
  cart: [],
  count: 0,
  totalPrice: 0,
  calculateCount: () => {
    const cart = get().cart
    const count = cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
    set({ count })
  },
  calculateTotalPrice: () => {
    const cart = get().cart
    const totalPrice = cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0,
    )
    set({ totalPrice })
  },
  // Action to add an item to the cart or increment its quantity
  addToCart: selected => {
    set(state => {
      // Check if the item already exists in the cart
      const itemExists = state.cart.find(item => item.id === selected.id)

      if (itemExists) {
        return {
          cart: state.cart.map(item =>
            item.id === selected.id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        }
      } else {
        return {
          cart: [...state.cart, { ...selected, quantity: 1 }],
        }
      }
    })
    get().calculateCount()
    get().calculateTotalPrice()
  },
  // Action to increment the quantity of a specific item in the cart
  incrementQuantity: id => {
    set(state => ({
      cart: state.cart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    }))
    get().calculateCount()
    get().calculateTotalPrice()
  },
  // Action to decrement the quantity of a specific item in the cart
  decrementQuantity: id => {
    set(state => ({
      cart: state.cart
        .map(item => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter(item => item.quantity > 0), // Remove items with quantity 0
    }))
    get().calculateCount()
    get().calculateTotalPrice()
  },
  // Action to remove an item from the cart
  removeFromCart: id => {
    set(state => ({
      cart: state.cart.filter(item => item.id !== id),
    }))
    get().calculateCount()
    get().calculateTotalPrice()
  },
}))

export default useCartStore
