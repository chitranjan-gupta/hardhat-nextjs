// This is an test file. Hardhat will run every *.js file in `test/`,
// so feel free to add new ones.

// Hardhat tests are normally written with Mocha and Chai.

// We import Chai to use its asserting functions here.
const { expect } = require("chai");

// We use `loadFixture` to share common setups (or fixtures) between tests.
// Using this simplifies your tests and makes them run faster, by taking
// advantage of Hardhat Network's snapshot functionality.
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

// `describe` is a Mocha function that allows you to organize your tests.
// Having your tests organized makes debugging them easier. All Mocha
// functions are available in the global scope.
//
// `describe` receives the name of a section of your test suite, and a
// callback. The callback must define the tests of that section. This callback
// can't be an async function.
describe("SimpleStorage contract", function () {
  // We define a fixture to reuse the same setup in every test. We use
  // loadFixture to run this setup once, snapshot that state, and reset Hardhat
  // Network to that snapshot in every test.
  async function deployFixture() {
    // Get the Signers here.
    const [owner, otherAccount] = await ethers.getSigners();

    // To deploy our contract, we just have to call ethers.deployContract and await
    // its waitForDeployment() method, which happens once its transaction has been
    // mined.
    const simpleStorage = await ethers.deployContract("SimpleStorage");

    await simpleStorage.waitForDeployment();

    const value = 0;

    // Fixtures can return anything you consider useful for your tests
    return { simpleStorage, value, owner, otherAccount };
  }

  // You can nest describe calls to create subsections.
  describe("Deployment", function () {
    // `it` is another Mocha function. This is the one you use to define each
    // of your tests. It receives the test name, and a callback function.
    //
    // If the callback function is async, Mocha will `await` it.
    it("Should get the value", async function () {
      // We use loadFixture to setup our environment, and then assert that
      // things went well
      const { simpleStorage, value } = await loadFixture(deployFixture);

      // `expect` receives a value and wraps it in an assertion object. These
      // objects have a lot of utility methods to assert values.

      // This test expects the value stored in storedData variable in the contract to be
      // store value
      expect(await simpleStorage.get()).to.equal(value);
    });
    it("Should set the value", async function () {
      const { simpleStorage, value } = await loadFixture(deployFixture);
      await simpleStorage.set(123);
      if ((await simpleStorage.get()) == value) {
        console.log("Value is same");
      }
      expect(await simpleStorage.get()).to.equal(123);
    });
  });
});
