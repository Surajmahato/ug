const Course = require("../models/Course");
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
describe("Test of Course Schema", () => {
  test("Should create a new Course", () => {
    return Course.create({
      courseName: "React with redux",
      courseDescription: "Modern language for real world programming",
      
      
    }).then((response) => {
      expect(response.courseName).toBe("React with redux");
    });
  });
  /*test("Should update the user", () => {
    return User.findOne({ first_name: "hariparsad" }).then((user) => {
      user.first_name = "shyamparsad";
      user.save().then((updateduser) => {
        expect(updateduser.first_name).toBe("shyamparsad");
      });
    });
  });
  test("Should delete the user", () => {
    return User.findOneAndDelete({ first_name: "shyamparsad" }).then(
      (response) => {
        expect(response.first_name).toBe("shyamparsad");
      }
    );
  });*/
});
