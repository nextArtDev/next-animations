import Image from 'next/image'
import { allTypes, iceCreamTypes } from '../../constant'
import Navigation from '../Navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

type Props = {}

function MenuTabs({}: Props) {
  return (
    <div className="w-full h-full relative">
      <Tabs defaultValue="coffee" className="">
        <TabsList className="flex justify-center items-start  gap-5">
          {allTypes.map((type, i) => (
            <TabsTrigger value={type.type} key={type.id}>
              <div className="mt-5 z-20">
                <div className="rounded-full w-16 h-16 flex items-center justify-center">
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
        {allTypes.map((type, i) => (
          <TabsContent value={type.type} key={type.id}>
            <Navigation singleType={type.singleType} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default MenuTabs
