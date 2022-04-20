import Link from 'next/link';
import { withRouter } from 'next/router';
function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Portfolio', href: '/portfolio' },
    { text: 'Contact', href: '/contact' },
    // { text: '', href: '' },
  ];

  return (
    <nav className="navbar">
        <Link href="/"><a className="logo">Faiez Waseem.</a></Link>
          <div className='ham'  onClick={()=>{
                document.getElementById("navlink").classList.toggle("show")
          }}>
          </div>
        <ul className="nav" >
        <li><Link href={navs[0].href}><a className={`nav-btn1 ${ router.pathname == navs[0].href ? 'active' : '' }`}>{navs[0].text}</a></Link></li>
        <li><Link href={navs[1].href}><a className={`nav-btn1 ${ router.pathname == navs[1].href ? 'active' : '' }`}>{navs[1].text}</a></Link></li>
        <li><Link href={navs[2].href}><a className={`nav-btn1 ${ router.pathname == navs[2].href ? 'active' : '' }`}>{navs[2].text}</a></Link></li>
        <li><Link href={navs[3].href}><a className={`nav-btn1 ${ router.pathname == navs[3].href ? 'active' : '' }`}>{navs[3].text}</a></Link></li>
      
        </ul>
        <i className="ham-btn fas fa-bars"  onClick={()=>{
            const hamBtn = document.querySelector(".ham-btn");
            const nav = document.querySelector(".nav");
          nav.classList.toggle("dis");
          document.body.classList.toggle("overflow");
        }} ></i>
    </nav>
  );
}


export default withRouter(Navbar);