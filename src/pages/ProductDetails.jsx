import { useLocation, Link } from 'react-router-dom';

export default function ProductDetails() {
  const location = useLocation(); 
  const { product } = location.state || {}; 
  
  if (!product) {
    return <div>Product details not found.</div>; 
  }

  return (
    <>
    <Link to="/" className='back-home'>Back home</Link>
    <div className='product-details'>
      <img src={product.image} alt={product.name} />
      <div className='product-info'>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>Price: ${product.price ? product.price : 'Fiyat bilgisine erişilemiyor.'}</h3>
      </div>
      
    </div>
    </>
  );
}