const getDataFromLocal = () => {
  const prevData = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
  return prevData;
};
const setDataToLocal = value => {
  // Cheaking if iteam have or not
  const prev = getDataFromLocal('cart');
  //  append data with prevData
  prev.push(value);
  //  stored data
  localStorage.setItem('cart', JSON.stringify(prev));
};
export { getDataFromLocal, setDataToLocal };
