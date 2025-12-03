import Footer from '../components/Footer.jsx'
import Heading from '../components/Heading.jsx'
import Review from '../components/Review.jsx'

function Home() {
  return (
    <>
      <Heading title={"Bian Albaihaqi"} />
      <div>
        <h2 className='text-4xl text-center font-bold mt-7'>Review</h2>
        <Review/>
      </div>
      <Footer/>
    </>
  )
}

export default Home
