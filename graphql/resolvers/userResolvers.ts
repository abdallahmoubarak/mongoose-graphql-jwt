export const userQueries = {
  getUsers: async (_: any, __: any, context: any) => {
    try {
      return await context.dataSources.users.getAllUsers();
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  },
  getUser: async (_: any, { id }: any, context: any) => {
    try {
      return await context.dataSources.users.findOneById(id);
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
  },
};

export const userMutations = {
  createUser: async (_: any, { ...input }: any, context: any) => {
    try {
      return await context.dataSources.users.createUser({
        input: { ...input },
      });
    } catch (error) {
      throw new Error("Failed to create user");
    }
  },
};
