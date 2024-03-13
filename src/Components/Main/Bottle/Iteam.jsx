import PropTypes from 'prop-types';

export const Iteam = ({ productInfo: { name, price, id }, handleREmove }) => {
  return (
    <div onClick={() => handleREmove(id)} className='flex justify-around'>
      <h1>{name}</h1>
      <h1>{price}</h1>
    </div>
  );
};
Iteam.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};
