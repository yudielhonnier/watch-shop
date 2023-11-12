// import { compare, hash } from 'bcryptjs';

// export async function hashPassword(password: string) {
//   const hashedPassword = await hash(password, 12);
//   return hashedPassword;
// }
export async function hashPassword(password: string, hash: number) {
  const hashedPassword = password + 'hash' + hash;
  return hashedPassword;
}

// export async function verifyPassword({
//   password,
//   hashedPassword,
// }: {
//   password: string;
//   hashedPassword: string;
// }) {
//   const isValid = await compare(password, hashedPassword);
//   return isValid;
// }

export async function verifyPassword({
  password,
  hashedPassword,
}: {
  password: string;
  hashedPassword: string;
}) {
  const isValid = password == hashedPassword;
  return isValid;
}
