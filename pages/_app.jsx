import '../styles/global.css';
import Head from 'next/head'
import react from 'react';


export default function MyApp({ Component, pageProps }) {
  const [isLoading, setLoading] = react.useState(true);
  react.useEffect(()=>{
    setTimeout(()=>setLoading(false) , 1400);
  },[])


  
  return   (<>
   <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

  <div className="pre-loader"  style={{ display : isLoading ? "flex" : "none"}}>
        <i className="fas fa-spinner loader"></i>
    </div>
    <button className="day" onClick={() => {
    const day = document.querySelector(".day");
const night = document.querySelector(".night");
  document.body.classList.toggle("dark");
  day.style.display = "none";
  night.style.display = "block";
}} ><i className="fas fa-sun"></i></button>
    <button className="night"  onClick={() => {
    
    const day = document.querySelector(".day");
    const night = document.querySelector(".night");
      document.body.classList.toggle("dark");
      night.style.display = "none";
      day.style.display = "block";
    }}> <i className="fas fa-moon"></i></button>
  <Component {...pageProps} /></>)
}
