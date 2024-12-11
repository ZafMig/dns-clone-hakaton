import { StrictMode} from 'react'
import { Header } from './Components/Header/Header'
import './App.css'
import { Search } from './Components/Search/Seacrh'
import { Home } from './Components/Home/Home'
import { MoreProduct } from './Components/MoreProduct/MoreProduct'
import { Company } from './Components/Company/Company'
import { News } from './Components/News/News'
import { Footer } from './Components/Footer/Footer'
import { Discount } from './Discount/Discount'



function App() {
  return (
   <StrictMode>
    <Header/>
    <Search/>
    <Home/>
    <MoreProduct/>
    <Company/>
    <Discount/>
    <News/>
    <Footer/>
   </StrictMode>
  )
}

export default App
