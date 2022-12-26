import { useState } from 'react';
import { CartWhite, Minus, Plus } from '../../assets/icons';

function ProductPrice() {
  const [totalItem, setTotalItem] = useState(0);

  const handleOnMius = () => {
    if (totalItem > 0) {
      setTotalItem(totalItem - 1);
    }
  };

  const handleOnPlus = () => {
    setTotalItem(totalItem + 1);
  };

  return (
    <div className="h-[60%] flex flex-col justify-between mt-6">
      <div className="flex gap-3 items-center">
        <h2 className="font-[700] text-[24px]">$125.00</h2>
        <span className="text-[#FF7D1A] bg-[#FFEDE0] p-1 rounded-md text-sm font-[700]">
          50%
        </span>
      </div>

      <h3 className="line-through text-[#B6BCC8] font-[700]">$250.00</h3>

      <div className="flex gap-4 mt-8">
        <div className="flex items-center">
          <button
            className="bg-[#F7F8FD] pt-6 pb-6 pl-5 pr-5 rounded-tl-xl rounded-bl-xl"
            onClick={handleOnMius}
          >
            <Minus />
          </button>
          <span className="bg-[#F7F8FD] pt-[1rem] pb-[0.90rem] pl-5 pr-5 font-[700] text-[14px]">
            {totalItem}
          </span>
          <button
            className="bg-[#F7F8FD] pl-5 pr-5 pt-5 pb-5 rounded-tr-xl rounded-br-xl"
            onClick={handleOnPlus}
          >
            <Plus />
          </button>
        </div>

        <button className="flex items-center bg-[#FF7D1A] w-56 rounded-xl justify-center gap-3 text-[14px] shadow-[#FF7D1A] shadow-2xl">
          <CartWhite />
          <span className="text-[#ffff] font-[700]">Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductPrice;
