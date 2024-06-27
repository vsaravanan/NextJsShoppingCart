// import { Provider } from "react-redux";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import store from "../redux/store.js.old";
import '../styles/globals.css'
// import { createRoot, hydrateRoot } from 'react-dom/client'
// import App from 'next/app';

import { createRoot } from 'react-dom/client'
const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App tab='home' />)

const MyApp = ({ Component, pageProps }) => {
  return (
    // <Provider>
    <div className='wrapper'>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
    // </Provider>
  )
}

// // This is only for client-side rendering
// if (typeof window !== 'undefined') {
//   const root = document.getElementById('__next')
//   if (root.hasChildNodes()) {
//     hydrateRoot(root, <MyApp />)
//   } else {
//     createRoot(root).render(<MyApp />)
//   }
// }

export default MyApp
