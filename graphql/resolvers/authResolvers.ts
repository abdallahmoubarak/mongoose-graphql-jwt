import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const authMutations = {
  login: async (
    _: any,
    { email, password }: any,
    context: {
      dataSources: { users: { getUserByEmail: (email: string) => any } };
    },
  ) => {
    try {
      // Find user by email
      const user = await context.dataSources.users.getUserByEmail(email);

      if (!user) throw new Error("No user found with this email address.");

      // Validate password
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error("Incorrect password.");

      // Check if user is admin
      if (user.userRole !== "admin")
        throw new Error("You do not have admin privileges.");

      // Create and return jwt
      return {
        jwt: jwt.sign(
          { userId: user.id, userRole: user.userRole },
          process.env.NEXT_PUBLIC_JWT_SECRET as string,
        ),
      };
    } catch (error: any) {
      throw new Error(`Login failed with error: ${error.message}`);
    }
  },
  //Sign Up
  signup: async (
    _: any,
    { name, phone, email, password }: any,
    context: any,
  ) => {
    try {
      const existUser = await context.dataSources.users.getUserByEmail(email);

      if (existUser) {
        throw new Error("This email has been used please login.");
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await context.dataSources.users.createUser({
        input: { name, phone, email, password: hashedPassword },
      });
      return {
        jwt: jwt.sign(
          { userId: user.id },
          process.env.NEXT_PUBLIC_JWT_SECRET as string,
        ),
      };
    } catch (error: any) {
      if (error.code === 11000) {
        // This is the error code for a duplicate key error in MongoDB
        throw new Error("A user with this email already exists.");
      } else {
        throw new Error(`Signup failed with error: ${error.message}`);
      }
    }
  },
};
