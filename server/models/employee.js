const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  dateOfJoining: Date,
  title: String,
  department: String,
  employeeType: String,
  currentStatus: Boolean
});

const UserModel = mongoose.model("employeeModel", employeeSchema, "employees");

module.exports = UserModel;
