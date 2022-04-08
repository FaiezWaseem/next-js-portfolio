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
      <div className="container">
        <Link href="/"><a className="logo">Faiez Waseem.</a></Link>
          <div className='ham'  onClick={()=>{
                document.getElementById("navlink").classList.toggle("show")
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
          </div>
        <ul className="nav-links" id='navlink'>
          { navs.map(nav => (
            <li><Link href={nav.href}><a className={`nav-item ${ router.pathname == nav.href ? 'active' : '' }`}>{nav.text}</a></Link></li>
          )) }
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);