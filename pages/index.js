import Head from 'next/head'
import Productions from '../components/Productions'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Productions />
      </main>

      <footer></footer>
    </div>
  )
}
