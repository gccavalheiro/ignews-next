import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJS() {
  const stripeJs = await loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);

  return stripeJs;
}
