// import { useEffect, useState } from "react";
// import Skeleton from 'react-loading-skeleton';
import { ShoppingCart } from "iconsax-react";

export default function Login() {
   return(
      <section className="flex h-[100vh]">
         <input type="file" />
         <div className="w-6/12 h-full flex flex-col justify-center">
            <h1 className="mx-auto p-0 font-bold">Welcome to Dot<span>Comm</span></h1>
   `        <div className="w-7/12 mx-auto rounded-lg bg-gray-800 bg-opacity-25 px-4 py-8 backdrop-blur-3xl border border-white border-opacity-20">
               <div className="w-full flex justify-start">
                  <p className="my-2 font-bold text-xl border-s-2 border-[#FF8A65] text-white ps-8">Login</p>
               </div>
               <form>
                  <label className='w-full' htmlFor="email">
                     <input className="p-4 px-8 bg-white bg-opacity-15 rounded-lg w-full my-2" type="email" name="email" placeholder="Enter email..." />
                  </label>

                  <label className='w-full' htmlFor="password">
                     <input className="p-4 px-8 bg-white bg-opacity-15 rounded-lg w-full my-2" type="password" name="password" placeholder="Enter email..." />
                  </label>
                  <button className="flex bg-[#FF8A65] text-white rounded-xl mt-6 justify-center w-full">
                     <ShoppingCart size="24" color="white" variant="Outline" className='my-auto me-2'/>
                     Cart
                  </button>
               </form>
            </div>`            
         </div>
  
         <div className="bg-white bg-opacity-50 w-6/12">
         </div>    
      </section>

   )
}