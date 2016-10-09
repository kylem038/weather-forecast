const testReducer = ( state=[], action ) => {
  switch(action.type) {
    case "TEST_ACTION":
      return console.log("Testing stuff")
  }
  return state
};

export default testReducer;
