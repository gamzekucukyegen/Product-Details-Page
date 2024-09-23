import { useNavigate } from 'react-router-dom';

export default function Product(props) {
  const { details } = props; 
  const navigate = useNavigate(); 

  function handleProductClick() {
   
    navigate('/product-details', { state: { product: details } }); 
  }

  return (
    <div className='product' onClick={handleProductClick} style={{ cursor: 'pointer' }}>
      <img src={details.image} width='50' alt={details.name} />
      <div className='product-info'>
        <h2>{details.name}</h2>
        <p>{details.description}</p>
      </div>
    </div>
  );
}