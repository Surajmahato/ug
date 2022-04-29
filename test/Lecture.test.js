const Lecture = require("../models/Lecture");
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
describe("Test of Lecture Schema", () => {
  test("Should add a new Lectuere", () => {
    return Lecture.create({
      no: 2,
      title:"Introduction to redux",
      videoLink:"https://www.youtube.com/watch?v=hV_RjHb9034&list=RDXCElIIYx_8s&index=5"
    }).then((response) => {
      expect(response.title).toBe("Introduction to redux");
    });
  });
});
