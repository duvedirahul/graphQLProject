const employeeModel = require("../models/employee");

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World!!!";
    },
    getAllEmployee: async () => {
      return await employeeModel.find();
    },
  },

  Mutation: {
    createEmployee: async (parent, args, context, info) => {
      console.log(args);
      const { dateOfJoining } = args.employeeDetails;

      const user = new employeeModel({
        ...args.employeeDetails,
        dateOfJoining: new Date(dateOfJoining),
        currentStatus: 1
      });
      await user.save();

      return user;
    },
  },
};

module.exports = resolvers;