let range = function (start,end,step) {
  let array = [];

  if ((start !== undefined && step !== undefined && end !== undefined) && start < end && step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
    return array
  } else {
    return array = [];
  }
}
