import Image from 'next/image'
import { allTypes, iceCreamTypes } from '../../constant'
import Navigation from '../Navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'
import { type } from 'os'

type Props = {}

function MenuTabs({}: Props) {
  return (
    <div className="flex flex-col w-full h-full relative">
      <Tabs
        defaultValue="coffee"
        className="flex flex-col w-full h-full relative"
      >
        {allTypes.map((type, i) => (
          <TabsContent className="flex-1" value={type.type} key={type.id}>
            <Navigation singleType={type.singleType} />
          </TabsContent>
        ))}
        <TabsList className="">
          {allTypes.map((type, i) => (
            <TabsTrigger
              className="pb-20 rounded-full data-[state=active]:shadow-2xl"
              value={type.type}
              key={type.id}
            >
              <div className=" mt-5 z-20">
                <div className=" w-16 h-16 flex items-center justify-center">
                  <Image
                    width={60}
                    height={60}
                    alt={type.type}
                    src={type.src}
                  />
                </div>
              </div>
            </TabsTrigger>
          ))}
          {/* <TabsTrigger value="password">Password</TabsTrigger> */}
        </TabsList>
      </Tabs>
    </div>
  )
}

export default MenuTabs
