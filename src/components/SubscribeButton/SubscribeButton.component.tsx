import { signIn, useSession } from 'next-auth/react'
import { api } from '../../services/api'
import { getStripeJS } from '../../services/stripe-js'
import styles from './SubscribeButton.styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')
      console.log(response.data);

      const { sessionId } = response.data
      const stripe = await getStripeJS()

      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>SUBSCRIBE NOW</button>
  )
}
