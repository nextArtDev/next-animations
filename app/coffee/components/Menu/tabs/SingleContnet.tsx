import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'
type Props = {}

function SingleContnet({}: Props) {
  return (
    <>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </>
  )
}

export default SingleContnet
