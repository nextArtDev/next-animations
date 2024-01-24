import LooseLeaf from './components/LooseLeaf'
import YellowLeaf from './components/YellowLeaf'

type Props = {}

function page({}: Props) {
  return (
    <div className=" text-black/60 w-full h-screen flex flex-col gap-20 items-center justify-center">
      <YellowLeaf />
      <LooseLeaf />
    </div>
  )
}

export default page
