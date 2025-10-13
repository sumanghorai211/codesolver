const { problem } = require("../models/index");
class problemRepository {
  async createProblem(problemData) {
    try {
      const problemCreated = await problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return problemCreated;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = problemRepository;
