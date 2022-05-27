export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

// as long as it continues to be invoked, it will not be triggered
export const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

export const formatDateTime = unixTime => {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  return new Date(unixTime * 1000).toLocaleString("en-IN", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
};
