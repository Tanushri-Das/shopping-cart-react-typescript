// import { useCart } from "@/Contexts/CartContext/CartContext";
// import React from "react";
// import { FaTimes } from "react-icons/fa";
// import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

// const Drawer: React.FC = () => {
//   const { isDrawerOpen, toggleDrawer, cartItems } = useCart();

//   return (
//     <div
//       className={`fixed inset-y-0 right-0 bg-white shadow-lg transform ${
//         isDrawerOpen ? "translate-x-0" : "translate-x-full"
//       } transition-transform duration-300 ease-in-out w-[30%] z-50`}
//     >
//       <div className="p-4 border-b">
//         <div className="flex justify-end items-center">
//           <button onClick={toggleDrawer} className="text-black">
//             <FaTimes className="text-3xl" />
//           </button>
//         </div>

//         <h2 className="text-xl font-semibold">Shopping Cart</h2>
//       </div>
//       <div className="p-4">
//         <p className="text-xl font-semibold mb-5">
//           Total items: {cartItems.length}
//         </p>
//         <div className="space-y-5">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center space-x-2 border-2">
//               <img src={item.img} className="w-16 h-16" alt={item.name} />
//               <div className="flex justify-between items-center space-x-4">
//                 <p className="text-xl font-semibold">{item.name}</p>
//                 <p className="text-lg font-medium">${item.price}</p>
//                 <div className="flex justify-between items-center space-x-2 border-2">
//                   <FiMinusCircle className="w-[18px] h-[18px]"/>
//                   <p className="text-lg font-medium">{item.quantity}</p>
//                   <FiPlusCircle className="w-[18px] h-[18px]"/>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Drawer;

import { useCart } from "@/Contexts/CartContext/CartContext";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const Drawer: React.FC = () => {
  const {
    isDrawerOpen,
    toggleDrawer,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
    removeItem,
  } = useCart();

  return (
    <div
      className={`fixed inset-y-0 right-0 bg-white shadow-lg transform ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out w-[30%] z-50`}
    >
      <div className="p-4 border-b">
        <div className="flex justify-end items-center">
          <button onClick={toggleDrawer} className="text-black">
            <FaTimes className="text-3xl" />
          </button>
        </div>

        <h2 className="text-xl font-semibold">Shopping Cart</h2>
      </div>
      <div className="p-4">
        <p className="text-xl font-semibold mb-5">
          Total items: {cartItems.length}
        </p>
        <div className="space-y-5">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-2 border-2">
              <img src={item.img} className="w-16 h-16" alt={item.name} />
              <div className="flex justify-between items-center space-x-4">
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-lg font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <div className="flex justify-between items-center space-x-2 border-2">
                  <FiMinusCircle
                    className="w-[18px] h-[18px] cursor-pointer"
                    onClick={() => decreaseQuantity(item.id)}
                  />
                  <p className="text-lg font-medium">{item.quantity}</p>
                  <FiPlusCircle
                    className="w-[18px] h-[18px] cursor-pointer"
                    onClick={() => increaseQuantity(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <p className="text-xl font-semibold">
            Total Price: ${getTotalPrice().toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
