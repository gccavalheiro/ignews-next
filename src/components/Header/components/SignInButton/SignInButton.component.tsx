import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './SignInButton.styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = true
  return isUserLoggedIn ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d361" />
      <span>Gabriel Cavalheiro</span>
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#eba417" />
      <span>Sign in with Github</span>
    </button>
  )
}
