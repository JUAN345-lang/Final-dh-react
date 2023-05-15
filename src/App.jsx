import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SearchComponent } from './features/main/components/search'
import { MainComponent } from './features/main/main'
import { Card } from './shared/components/Card/Card'
import { HeaderComponent } from './features/header/header'
function App() {
  const dataCard = {
    description: 'Blablsdsfsdfsfsdfsdsfsdfdsfssfddsffdsfsfdsfdsfdsfdsfsfsfsfsdfsfdsfa',
    rate: 5,
    rateDescription: 'Muy bueno',
    model:'FYX-Toyota',
    location: 'Colombia'
  }
  return (
    <>
      <HeaderComponent className='header-content'/>
      <MainComponent />
      <div className='recommendation-container'>

      
      <Card {...dataCard} />
      <Card {...dataCard} />
      <Card {...dataCard} />
      <Card {...dataCard} />
      <Card {...dataCard} />

      </div>
      </>
  )
}

export default App
