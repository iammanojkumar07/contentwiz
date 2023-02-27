import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>ContentWiz.com || Transform your writing with AI</title>
      <meta name="description" content="Transform your writing with our AI-powered platform. Create high-quality, plagiarism-free content effortlessly for your blog, YouTube, Twitter, LinkedIn, and more. Join us and experience the power of AI writing today" />
      <link rel="icon" href="/robot.png" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
