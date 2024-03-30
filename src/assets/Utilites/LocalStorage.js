const getIteam = key => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};

const setIteam = (key, value) => {
  const prevData = getIteam(key);
};
