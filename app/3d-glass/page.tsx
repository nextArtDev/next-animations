// import styles from './page.module.css'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="flex h-screen">
      <Scene />
    </main>
  )
}
