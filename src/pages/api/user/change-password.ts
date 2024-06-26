import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

import { hashPassword, verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PATCH') {
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: 'Not authenticated!' });
    return;
  }

  const userEmail = session.user && session.user.email;
  const oldPassword = req.body && req.body.oldPassword;
  const newPassword = req.body && req.body.newPassword;

  const client = await connectToDatabase();

  const usersCollection = client.db().collection('users');

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: 'User not found.' });
    client.close();
    return;
  }

  const currentPassword = user.password;

  const passwordsAreEqual = await verifyPassword({
    password: oldPassword,
    hashedPassword: currentPassword,
  });

  if (!passwordsAreEqual) {
    res.status(403).json({ message: 'Invalid password.' });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword, 12);

  // eslint-disable-next-line unused-imports/no-unused-vars
  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  );

  client.close();
  res.status(200).json({ message: 'Password updated!' });
}

export default handler;
