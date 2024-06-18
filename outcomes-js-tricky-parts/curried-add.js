function curriedAdd(total = 0) {
  function adder(num) {
    if (num === undefined) {
      return total; // Return the accumulated total when no argument is passed
    } else {
      // Return a new function to continue the currying process
      return curriedAdd(total + num);
    }
  }

  // Return adder function with a toString method to allow for chaining
  adder.toString = function () {
    return total;
  };

  // Return 0 if no arguments were passed initially
  if (arguments.length === 0) {
    return 0;
  }

  return adder;
}

module.exports = { curriedAdd };
