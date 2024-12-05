import { NextApiRequest, NextApiResponse } from "next"
import { stripe } from "../../lib/stripe"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." })
  }

  const { checkoutItems } = req.body

  if (!checkoutItems) {
    return res
      .status(400)
      .json({ error: "Products price id must be informed." })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: "payment",
      line_items: checkoutItems.map((item) => ({
        price: item.priceId,
        quantity: item.quantity,
      })),
    })

    res.status(200).json({ checkoutUrl: checkoutSession.url })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}
