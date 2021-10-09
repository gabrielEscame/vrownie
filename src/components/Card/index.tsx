import React from 'react'
import {
  CardContainer,
  CardInformationWrapper,
  CardTextWrapper,
  CardButton
} from './style'
import Image from '../Image'
import { Caption, CardPrice, CardTitle } from '../Typography'
import enhancer from './logic'
import {  CartItem } from '../../utils'

interface CardInterface {
  title: string
  price: string
  cardRef: () => void
  isAnimated: boolean
  description?: string
  transitionDuration?: number
  handleCardClick: (data: CartItem) => void
}

const Card: React.FC<CardInterface> = ({
  title,
  price,
  description,
  cardRef,
  isAnimated = true,
  handleCardClick
}) => {
  return (
    <CardContainer ref={cardRef} isAnimated={isAnimated}>
      <Image
        src="/tradicional-brownie.png"
        alt="Picture of a brownie"
        width={125}
        height={75}
      />
      <CardInformationWrapper>
        <CardTextWrapper>
          <CardTitle color="black">
            {title}
            <span className="red">.</span>
          </CardTitle>
          {description && <Caption color="gray">{description}</Caption>}

          <CardPrice color="green" variant="dark">
            ${price}
            <span className="red">.</span>00
          </CardPrice>
        </CardTextWrapper>
        <CardButton onClick={() => handleCardClick({name: title, price, url: ''})}>+</CardButton>
      </CardInformationWrapper>
    </CardContainer>
  )
}

export default enhancer(Card)
