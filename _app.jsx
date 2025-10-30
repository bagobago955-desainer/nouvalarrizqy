import '@/styles/globals.css'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Muhammad Nouval Ar-Rizqy - Desainer Grafis</title>
        <meta name="description" content="Portfolio resmi Muhammad Nouval Ar-Rizqy, desainer grafis asal Indramayu yang berfokus pada identitas visual dan karya kreatif." />
        <meta name="keywords" content="Muhammad Nouval Ar-Rizqy, desainer grafis, portfolio, Indramayu, desain logo, karya kreatif" />
        <meta name="author" content="Muhammad Nouval Ar-Rizqy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.45}}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
