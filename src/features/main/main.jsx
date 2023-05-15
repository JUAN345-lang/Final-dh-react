import { SearchComponent } from "./components/search"
import './styles/main.css'

export const MainComponent = () => {
  return (
    <div className="main-container">
      <section className="title-container">
      <h1 className="title">  Aqui va el titulo de rentar autos ...</h1>
      </section>
      <section className="search-container">
      <SearchComponent />
      </section>
    </div>
  )
}