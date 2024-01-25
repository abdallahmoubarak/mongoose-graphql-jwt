import jwt, { JwtPayload } from "jsonwebtoken";
import { connectDB } from "@/mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { ApolloServer } from "@apollo/server";

connectDB();

interface Context {
  userId: string;
  userRole: string;
}

export const server: any = new ApolloServer({
  typeDefs,
  resolvers,
  //@ts-ignore
  context: ({ req }): Context => {
    const token = req.headers.authorization || "";
    try {
      // Try to retrieve a user with the token
      const { userId, userRole } = jwt.verify(
        token,
        process.env.NEXT_PUBLIC_JWT_SECRET as string,
      ) as JwtPayload & Context;
      return { userId, userRole };
    } catch (e) {
      // If there's an error, return an empty context
      return { userId: "", userRole: "" };
    }
  },
});
