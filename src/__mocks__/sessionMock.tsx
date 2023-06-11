import { SessionProvider } from 'next-auth/react';

export const mockSession = {
  user: {
    name: 'John Doe',
    email: 'johndoe@example.com',
  },
  expires: 'fake-expires',
};

export const MockSessionProvider = ({ children }) => {
  return <SessionProvider session={mockSession}>{children}</SessionProvider>;
};
