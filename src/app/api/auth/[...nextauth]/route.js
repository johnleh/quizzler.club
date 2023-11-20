import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise, {mongoOptions} from "@/utils/database/mongodb"

export const authOptions = {
    adapter: MongoDBAdapter(clientPromise, mongoOptions),
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
  }

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }