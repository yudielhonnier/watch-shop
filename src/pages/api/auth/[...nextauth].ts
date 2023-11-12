import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { hashPassword, verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/mongodb';

interface IUser {
  id: string;
  email: string;
  password: string;
}

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Record<string, string> | undefined) {
        const client = await connectToDatabase();
        const usersCollection = client.db().collection('users');

        let user;
        if (credentials) {
          user = await usersCollection.findOne({
            email: credentials.email,
          });

          if (!user) {
            client.close();
            throw new Error('No user found!');
          }

          const isValid = await verifyPassword({
            password: credentials.password,
            hashedPassword: await hashPassword(user.password, 12),
          });

          if (!isValid) {
            client.close();
            throw new Error('Could not log you in!');
          }

          client.close();
          //check this
          return user as unknown as IUser;
        }

        return null;
      },
    }),
  ],
});
