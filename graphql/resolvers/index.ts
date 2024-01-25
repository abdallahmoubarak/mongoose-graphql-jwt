import { authMutations } from "./authResolvers";
import { userQueries, userMutations } from "./userResolvers";

export const resolvers = {
  Mutation: {
    ...userMutations,
    ...authMutations,
  },
  Query: {
    ...userQueries,
  },
};
