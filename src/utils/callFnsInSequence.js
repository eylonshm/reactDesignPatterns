const callFnsInSequence =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args))

export default callFnsInSequence
