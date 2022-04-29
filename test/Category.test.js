const Cat = require("../models/Category");
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
describe("Test of Category Schema", () => {
  test("Should create a new Category", () => {
    return Cat.create({
      no: 1,
      categoryName: "programming",
    }).then((response) => {
      expect(response.categoryName).toBe("programming");
    });
  });
});
