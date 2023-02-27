import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import HomeFeature from '../components/HomeFeature';
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <div >
      <main className=" py-4 ">
        <Fade bottom>
        <section className='flex flex-col  items-center justify-around max-w-4xl mx-auto leading-3  space-y-5 h-[90vh]'>
          <div className='space-y-2'>
            <h1 className='text-center text-3xl md:text-6xl  font-bold'>Transforming the way you create <span className='text-blue-600'>content</span></h1>
            <p className='text-center max-w-2xl mx-auto leading-7'>Innovative <span className='underline'>AI-powered</span> platform that makes writing easy. From blog posts to product descriptions, transform your writing with our cutting-edge technology.</p>
          </div>
          <div className=' text-center'>
            <div className='mb-5'>
              <Link href={"/write-content"}>
                <p className=' textwh bg-[#100025] border-none rounded-lg text-center cursor-pointer px-6 text-white py-5 font-bold capitalize '>start writing for free</p>
              </Link>
            </div>
            <small className='underline'>No sign in required</small>
          </div>
        </section>
        </Fade>
        <HomeFeature title={"Create content for YouTube"} image={"/blog.svg"} alt="content for youtube" desc={"Take your YouTube channel to the next level with our AI-powered content generator. Effortlessly create engaging and high-quality  content that your audience will love."} />

        <HomeFeature title={"Create content for Twitter"} image={"/growth-analysis.gif"} alt="content for twitter" desc={"Make a statement on Twitter with our AI-generated content. Create attention-grabbing tweets effortlessly, and stand out in the crowded social media landscape."} changeSequence={true} />

        <HomeFeature title={"Create content for LinkedIn"} image={"/content-moderation.gif"} alt="content for LinkedIn" desc={"Build your professional brand with our AI-powered content generator for LinkedIn. Create engaging posts that showcase your expertise and help you connect with your network."} />
        <ToastContainer />
        <section className={`flex items-center justify-center py-4 md:px-[2%] h-48 bg-[#f6f5fa]`}>
          <h2 className='text-5xl md:text-6xl font-bold text-center md:text-left'>Always <span className='text-blue-500'>free!</span> </h2>
        </section>
      </main>
    </div>
  )
}
