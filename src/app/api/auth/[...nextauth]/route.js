import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise, {mongoOptions} from "@/utils/backend/mongodb"

export const authOptions = {
    adapter: MongoDBAdapter(clientPromise, mongoOptions),
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      // Set it as jwt instead of database
      strategy: "jwt",
    },
    callbacks: {
      async jwt({ token, user }) {
        // Persist the OAuth access_token and or the user id to the token right after signin
        if (user) {
          token.accessToken = user.access_token;
          token.id = user.id;
        }
        return token;
      },
      async session({ session, token }) {
        // Send properties to the client, like an access_token and user id from a provider.
        session.accessToken = token.accessToken;
        session.user.id = token.id;

        return session;
      },
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
