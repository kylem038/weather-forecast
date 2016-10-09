const testReducer = ( state= [], action ) => {
  switch(action.type) {
    case "TEST_ACTION":
      console.log("Testing stuff")
      return state;
  }
  return state
};

export default testReducer;
