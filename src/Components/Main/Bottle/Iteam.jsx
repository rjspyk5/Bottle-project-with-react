import PropTypes from 'prop-types';

export const Iteam = ({ productInfo: { name, price } }) => {
  console.log(name);
  return (
    <div className='flex justify-around'>
      <h1>{name}</h1>
      <h1>{price}</h1>
    </div>
  );
};
Iteam.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};
