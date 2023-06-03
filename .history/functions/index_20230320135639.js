const functions = require("firebase-functions");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.stripeCharge = functions.https.onRequest(async (req, res) => {
  const body = JSON.parse(req.body);
  const token = body.token.id;
  const amount = body.charge.amount;
  const currency = body.charge.currency;

  try {
    const charge = await stripe.charges.create({
      amount,
      currency,
      source: token
    });

    res.status(200).send(charge);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
