//TODO: ADD STRIPE SERVICE
// import { NextApiRequest, NextApiResponse } from 'next';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,{
//   apiVersion: '2022-11-15'
// });

// export default async function handler(req:NextApiRequest, res:NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const params = {
//         submit_type: 'pay',
//         mode: 'payment',
//         payment_method_types: ['card'],
//         billing_address_collection: 'auto',
//         shipping_options: [
//           { shipping_rate: 'ADD SHIPPING RATE' },
//         ],
//         line_items: req.body.map((item: { name: any; image: any; price: number; quantity: any; }) => {

//           //MAYBE MAKE A TRANSFORMATION FOR ITEM IMAGE HERE

//           return {
//             price_data: {
//               currency: 'usd',
//               product_data: {
//                 name: item.name,
//                 images: [item.image],
//               },
//               unit_amount: item.price * 100,
//             },
//             adjustable_quantity: {
//               enabled:true,
//               minimum: 1,
//             },
//             quantity: item.quantity
//           }
//         }),
//         success_url: `${req.headers.origin}/success`,
//         cancel_url: `${req.headers.origin}/canceled`,
//       }

//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create(params);

//       res.status(200).json(session);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }

export {};
