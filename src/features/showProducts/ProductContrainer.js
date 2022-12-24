import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';

function ProductContrainer() {
  return (
    <div className="flex justify-between items-center pl-12 pr-12 mt-20 mb-20">
      <ProductImages />
      <ProductInfo />
    </div>
  );
}

export default ProductContrainer;
