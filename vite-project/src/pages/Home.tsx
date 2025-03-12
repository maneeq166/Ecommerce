import { Link } from "react-router-dom"
import sectionImg from "../assets/images/nordwood-themes-F3Dde_9thd8-unsplash.jpg"


function Home() {
  return (
    <div className="home">
      <section>
        <img src={sectionImg} className="w-full h-full object-cover " alt="" />
      </section>
      <h1>
        Latest product
        <Link to={'/search'} className="more">More</Link>
      </h1>
      <main></main>
    </div>
  )
}

export default Home