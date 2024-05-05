import SingleContnet from './SingleContnet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

type Props = {}

function TabContents({}: Props) {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <SingleContnet />
      {/* <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent> */}
    </Tabs>
  )
}

export default TabContents
