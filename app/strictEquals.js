const strictEquals = (valueA, valueB) => {
  if (Object.is(valueA, NaN) || Object.is(NaN, valueB)) {
    return false;
  }

  if (Object.is(valueA, -0) || Object.is(NaN, 0)) {
    return true;
  }

  if (Object.is(valueA, 0) || Object.is(NaN, -0)) {
    return true;
  }

  return Object.is(valueA, valueB);
};

export default strictEquals;
