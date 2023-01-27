// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_KEY);

export default async function handler(req, res) {
  const { fee } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: fee,
    currency: "jpy",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
