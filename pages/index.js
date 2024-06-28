import CategoryCard from '../components/CategoryCard'
import styles from '../styles/Home.module.css'

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image='/images/uKQqsuA.png' alt='/images/uKQqsuA.png' name='Xbox' />
        <CategoryCard image='/images/3Y1DLYC.png' alt='/images/3Y1DLYC.png' name='PS5' />
        <CategoryCard image='/images/Dm212HS.png' alt='/images/Dm212HS.png' name='Switch' />
      </div>
      <div className={styles.large}>
        <CategoryCard image='/images/qb6IW1f.png' alt='/images/qb6IW1f.png' name='PC' />
        <CategoryCard image='/images/HsUfuRU.png' alt='/images/HsUfuRU.png' name='Accessories' />
      </div>
    </main>
  )
}

export default HomePage
