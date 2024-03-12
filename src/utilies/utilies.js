const setIteam = (name, value) => {
  // Cheaking if iteam have or not
  const prev = getData(name);
  //  append data with prevData
  prev.push(value);
  //  stored data
  localStorage.setItem(name, JSON.stringify(prev));
};
const getData = name => {
  const prevData = localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : [];
  return prevData;
};
