import { cn } from '@/lib/utils'
import React from 'react'
import TitleWithDescription from './Title-description'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import { cartItems } from '@/lib/constants'
import CartItem from './cart-item'

function CartSideBarConfirmation() {
  return (
    <div
    className={cn(
      `flex flex-col justify-between  px-3 md:px-8 py-6 pb-10 bg-white dark:bg-darkCardColor
   w-full md:w-[450px]   ease-in-out`
    )}
  >
    {/* card header */}
    <div className="flex items-center justify-between relative">
      <TitleWithDescription
        title={"Confirmation"}
        description={"Orders #34562"}
      />
      <Button className="w-12 h-12 p-0 rounded-md bg-primaryColor text-white">
        <Plus size={25} className="text-4xl " />
      </Button>
      {/* <MoveLeft size={28} className="absolute -top-6"/> */}
    </div>
    <span className="w-full h-[1px] bg-lightBgColor dark:bg-darkDescriptionColor my-4"></span>
    {/* card items */}
    <div className="flex flex-col gap-y-6 flex-1 py-4 ">
      {cartItems.map((food) => (
        <CartItem
          key={food.title}
          title={food.title}
          description={food.decription}
          image_url={food.imageçurl}
          price={food.price}
          qty={food.qty}
        />
      ))}
    </div>

    {/* footer */}
    <div className="flex flex-col mb-4  gap-4 py-4 border-t border-t-lightBgColor dark:border-t-darkBorderColor">
      <div className="flex items-center justify-between">
        <span className="text-sm dark:text-darkDescriptionColor">
          Discount
        </span>
        <span className="text-sm ">$0</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm dark:text-darkDescriptionColor">
          Sub total
        </span>
        <span className="text-sm ">$200</span>
      </div>
    </div>
  </div>
)
}

export default CartSideBarConfirmation
