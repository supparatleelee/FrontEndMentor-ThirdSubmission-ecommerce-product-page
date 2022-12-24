import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';

function ProductInfo() {
  return (
    <div className="ml-16 pl-10">
      <ProductDescription />
      <ProductPrice />
    </div>
  );
}

export default ProductInfo;
