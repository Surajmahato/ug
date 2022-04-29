const Enroll = require("../models/Enrollment");
const mongoose = require("mongoose");
const testDB = "mongodb://localhost:27017/elearning";

beforeAll(async () => {
  await mongoose.connect(testDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});
describe("Test of Enroll Schema", () => {
  test("Should create a new enrollment", () => {
    return Enroll.create({
      no: 1
      
    }).then((response) => {
      expect(response.no).toBe(1);
    });
  });
  
});
