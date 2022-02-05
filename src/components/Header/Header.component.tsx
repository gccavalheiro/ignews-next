import { SignInButton } from './components/SignInButton/SignInButton.component'
import styles from './Header.styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a href="" className={styles.active}>Home</a>
          <a href="">Post</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}
