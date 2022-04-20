import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Portfolio() {
	return (
		<>
			<Head>
			  <title>Portfolio</title>
			</Head>

			<Navbar />

			<section className="section portfolios sec-dis">
        <h1 className="section-title">portfolio</h1>
        <p className="section-desc">Here are a few design projects I've worked on recently. Want to see more? <a href="https://github.com/faiezwaseem" target="_blank">Github</a>.</p>
        <div className="portfolio-container">
            
            <div className="portfolio">
                <div className="img">
                <p className="portfolio-desc">
                    Results-oriented, responsive and flexible full service Video Sharing website.</p>
                    <button className="btn"><a href="https://faiezwaseem.github.io/Video-Point/" target="_blank">View Website</a> &gt;</button>
                    </div>
            </div>
            <div className="portfolio">
                <div className="img pi2">
                <p className="portfolio-desc">
                    Results-oriented, responsive and flexible WhatsApp Clone service website.</p>
                    <button className="btn"> <a href="https://faiezwaseem.github.io/Chato-Meet-the-World/home.html" target="_blank">View Website</a>  &gt;</button>
                    </div>
            </div>
            <div className="portfolio">
                <div className="img pi3">
                <p className="portfolio-desc">
                    Results-oriented, responsive and flexible full service Solar Sytem Info website.</p>
                    <button className="btn"><a href="https://faiezwaseem.github.io/SolarSystem/Solarsystem_Final/" target="_blank" rel="noopener noreferrer">View Website</a> &gt;</button>
                    </div>
            </div>
            <div className="portfolio">
                <div className="img pi4">
                <p className="portfolio-desc">
                    Results-oriented, responsive and flexible Portfolio website.</p>
                    <button className="btn"><a href="https://faiezwaseem.github.io/Portfolio-Design/" target="_blank" rel="noopener noreferrer">View Website</a>&gt;</button>
                    </div>
            </div>
            <div className="portfolio">
                <div className="img pi5">
                <p className="portfolio-desc">
                    Results-oriented, responsive and flexible Movie website.</p>
                    <button className="btn"><a href="https://faiezwaseem.github.io/Movie-Website/" target="_blank" rel="noopener noreferrer">View Website</a> &gt;</button>
                    </div>
            </div>
            <div className="portfolio">
                <div className="img pi6">
                <p className="portfolio-desc">
                    Results-oriented, responsive and flexible Food Restaurant website.</p>
                    <button className="btn"><a href="https://faiezwaseem.github.io/Salad_Food_Restaurant-/" target="_blank" rel="noopener noreferrer">View Website </a> &gt;</button>
                    </div>
            </div>

            </div>
    </section>
		</>
	);
}

export default Portfolio;