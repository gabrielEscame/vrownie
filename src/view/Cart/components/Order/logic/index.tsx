import { useEffect, useState } from 'react'
import composer from '@utils/composer'
import { getStorageItem, numberToCurrency } from '@utils/index'
import { SingleOrderInterface } from '@interface/index'


const useOrder = () => {
  const [cartList, setCartList] = useState<Array<SingleOrderInterface>>([])

  const totalValue = cartList.reduce(
    (acc: number, cur) => {
      return acc +( cur.price * cur.amount)
    },
    0
  )

  useEffect(() => {
    setCartList(getStorageItem('cart'))
  }, [])

  return {
    cartList,
    finalValue: numberToCurrency(totalValue)
  }
}

export default composer(useOrder)
