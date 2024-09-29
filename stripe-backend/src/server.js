const express = require('express');
const Stripe = require('stripe');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const stripe = Stripe('sk_test_51Q0H1aP3oMjdzaC33Nd5hlEYGZjo7Lxzsd8XSWykW3ejkch19FGf7XNtGDCSr52kDPr5aQTBEQv19R1SZ1kZxRET00WAB8NlZs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all routes (adjust as needed for security)
app.use(cors());

// Dummy products for testing
const products = [
    // Services
    { id: 'Home Cleaning', name: 'Home Cleaning', price: 12000 }, // $120.00
    { id: 'Furniture Assembly', name: 'Furniture Assembly', price: 9000 }, // $90.00
    { id: 'Plumbing Service', name: 'Plumbing Service', price: 15000 }, // $150.00
    { id: 'Electrical Service', name: 'Electrical Service', price: 13000 }, // $130.00
    { id: 'Smart Home Service', name: 'Smart Home Service', price: 20000 }, // $200.00
    { id: 'Moving Service', name: 'Moving Service', price: 18000 }, // $180.00
    { id: 'Home Repair', name: 'Home Repair', price: 15000 }, // $150.00
    { id: 'Home Renovation', name: 'Home Renovation', price: 30000 }, // $300.00
    { id: 'Tutoring', name: 'Tutoring', price: 6000 }, // $60.00
    { id: 'Personal Care', name: 'Personal Care', price: 8000 }, // $80.00
    { id: 'Landscaping', name: 'Landscaping', price: 25000 }, // $250.00
    { id: 'Painting', name: 'Painting', price: 25000 }, // $250.00
  
    // Cleaning Services
    { id: 'Office Cleaning', name: 'Office Cleaning', price: 10000 }, // $100.00
    { id: 'Rental Home Cleaning', name: 'Rental Home Cleaning', price: 14000 } // $140.00
  ];
  

// Get products (dummy endpoint)
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Create a Stripe Checkout session
app.post('/api/checkout', async (req, res) => {
  const { title, quantity, serviceDate } = req.body;

  // Find the product by title
  const product = products.find(p => p.id === title);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
            },
            unit_amount: product.price, // Price in cents
          },
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:4200/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:4200/cancel',
      metadata: {
        service: product.name,
        quantity: quantity.toString(),
        serviceDate: serviceDate,
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
