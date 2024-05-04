import Parallax from './components/Parallax'
import ParallaxGsap from './components/ParallaxGsap'

function page() {
  return (
    <>
      <div className="h-screen  w-full">{/* <ParallaxGsap /> */}</div>
      <div className="h-[90vh] w-full">
        <Parallax type="services" />
      </div>
    </>
  )
}

export default page
