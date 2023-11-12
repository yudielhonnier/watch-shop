// import { hash } from 'bcryptjs';
import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

import { hashPassword } from '@/lib/auth';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    //Getting email and password from body
    const { email, password } = req.body;
    //Validate
    if (!email || !email.includes('@') || !password) {
      res.status(422).json({ message: 'Invalid Data' });
      return;
    }
    //Connect with database
    const client = await MongoClient.connect(
      `${process.env.MONGO_URI}`
      // , {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // }
    );
    const db = client.db();
    //Check existing
    const checkExisting = await db
      .collection('users')
      .findOne({ email: email });
    //Send error response if duplicate user is found
    if (checkExisting) {
      res.status(422).json({ message: 'User already exists' });
      client.close();
      return;
    }
    //Hash password
    const status = await db.collection('users').insertOne({
      email,
      password: await hashPassword(password, 12),
    });
    //Send success response
    res.status(201).json({ message: 'User created', ...status });
    //Close DB connection
    client.close();
  } else {
    //Response for other than POST method
    res.status(500).json({ message: 'Route not valid' });
  }
}

export default handler;
