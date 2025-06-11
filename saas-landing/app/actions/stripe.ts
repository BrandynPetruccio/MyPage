"use server"

import { redirect } from "next/navigation"
import Stripe from "stripe"

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
})

export async function createCheckoutSession(priceId: string) {
  try {
    // Get the base URL - either from env var or construct from headers
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

    // Create a checkout session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing`,
      billing_address_collection: "required",
      allow_promotion_codes: true,
    })

    // Redirect to the Stripe checkout page
    if (session.url) {
      redirect(session.url)
    }
  } catch (error) {
    console.error("Error creating checkout session:", error)
    throw new Error("Failed to create checkout session")
  }
}
