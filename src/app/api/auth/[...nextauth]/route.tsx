// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const facebookClientId = process.env.FACEBOOK_CLIENT_ID;
const facebookClientSecret = process.env.FACEBOOK_CLIENT_SECRET;

if (!googleClientId || !googleClientSecret || !facebookClientId || !facebookClientSecret) {
  throw new Error('Missing environment variables for OAuth providers');
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    FacebookProvider({
      clientId: facebookClientId,
      clientSecret: facebookClientSecret,
    }),
  ],
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/signin', // Error code passed in query string as ?error=
  },
});

export { handler as GET, handler as POST };
