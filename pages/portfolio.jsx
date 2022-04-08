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

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Portfolio</h1>
			      <p className="description">
			      Some of My Projects  Find More At  <a href="https://github.com/faiezwaseem/">Github</a>
			      </p>

			      <div className="portfolio-wrapper">
			      	<div className="portfolio-item">
			      		<img src="/cloud9infinity.PNG" className="portfolio-image" />

			      		<h4 className="portfolio-name">cloud9infinity ~ CLoud Storage App</h4>
			      		<div className="portfolio-category">Mobile Dev (React Native)</div>
			      	</div>
			      	<div className="portfolio-item">
			      		<img src="/drive.PNG" className="portfolio-image" />

			      		<h4 className="portfolio-name">Google Drive Clone</h4>
			      		<div className="portfolio-category">Web dev</div>
			      	</div>
			      	<div className="portfolio-item">
			      		<img src="/ecommerce.PNG" className="portfolio-image" />

			      		<h4 className="portfolio-name">Ecommerce Web App</h4>
			      		<div className="portfolio-category">Web dev (React )</div>
			      	</div>
			      	<div className="portfolio-item">
			      		<img src="/videopoint.PNG" className="portfolio-image" />

			      		<h4 className="portfolio-name">Video Point Video Sharing App</h4>
			      		<div className="portfolio-category">Web dev </div>
			      	</div>
			      </div>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Portfolio;