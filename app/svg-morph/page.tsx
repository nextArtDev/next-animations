import Play from './components/play/Play'
import Smile from './components/smile/Smile'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen gap-[200px]">
      <div className="flex items-center justify-center gap-[200px]">
        <Smile />
        <Play />
      </div>
    </main>
  )
}
