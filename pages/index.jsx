import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Home() {


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <div className="row sec-dis">
    <div className="heading">
        <h3>I'm</h3>
        <h1>Faiez<span>Waseem</span>.</h1>
        <h4>Web Developer</h4>
        <p>Hello, I am a full Stack Web developer, designer and creative person. I have experience of  1+ year in designing and building Web App .</p>
        <button className="btn conbtn"> <Link href={"/contact"}><a >{"Hire Me"}</a></Link></button>
    </div>
    <div className="header-img">
        <img src="./profile.png" alt="" />
    </div>
    </div>
    </>
  );
}

export default Home;