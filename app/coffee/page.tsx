import Navigation from './components/Menu/Navigation'
import TabContents from './components/Menu/tabs/TabContents'

import Parallax from './components/Parallax'
import ParallaxGsap from './components/ParallaxGsap'

function page() {
  return (
    <>
      <div className="h-screen bg-black w-full">
        {/* <ParallaxGsap /> */}
        <Navigation />
        {/* <TabContents /> */}
      </div>
      <div className="h-[100vh] w-full">
        <Parallax type="services" />
      </div>
    </>
  )
}

export default page
