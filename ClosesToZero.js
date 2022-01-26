//Implent a function that returns the closest number to zero.
const closestToZero = (ts) => {
  let closest = ts[0];

  for (let i = 0; i < ts.length; i++) {
    if (Math.abs(ts[i]) < Math.abs(closest)) {
      closest = ts[i];
    } else if (Math.abs(ts[i]) === Math.abs(closest)) {
      if (ts[i] > 0) {
        closest = ts[i];
      }
    } 

  }

  return closest;
};
