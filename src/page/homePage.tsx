
import { StrictMode } from 'react';
import { Home } from '../Components/Home/Home';
import { GiftShop } from '../Components/GiftShop/GiftShop';
import { MoreProduct } from '../Components/MoreProduct/MoreProduct';
import { Company } from '../Components/Company/Company';
import { Discount } from '../Discount/Discount';
import { News } from '../Components/News/News';

export function HomePage() {
  return (
    <StrictMode>
      <Home/>
      <GiftShop/>
      <MoreProduct/>
      <Company/>
      <Discount/>
      <News/>
      
    </StrictMode>
  );
}
