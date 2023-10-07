import { FC } from 'react'
import Form from './compenents/form'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className=" flex justify-center items-center mx-auto min-h-screen  ">
      <Form />
    </section>
  )
}

export default page
