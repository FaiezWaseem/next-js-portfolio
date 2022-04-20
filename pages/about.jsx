import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
			  <title>About</title>
			</Head>

			<Navbar />

			<section className="section skills sec-dis">
        <h1 className="section-title">expertise</h1>
        <p className="section-desc">I have handfull experience in following skills and still learning and practicing more and more.</p>
        <div className="skill-container">
            <div className="skill">
                <i className="fas fa-palette"></i>
                <h1>designer</h1>
                <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <h3>Things I enjoy designing</h3>
                <p>UX, UI, Web, Mobile, Apps</p>
            </div>
            <div className="skill">
                <i className="fas fa-laptop-code"></i>
                <h1>developer</h1>
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <h3>Languages I speak</h3>
                <p>Urdu , English</p>
                <h3>Dev Tools</h3>
                <p>Bootstrap, Firebase, VSCODE, Codepen, Github, Gitlab, Terminal</p>
            </div>
            <div className="skill">
                <i className="fas fa-code"></i>
                <h1>Coder</h1>
                <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
                <h3>Languages I Play around with</h3>
                <p>HTML/CSS , JAVASCRIPT , REACT / NEXT JS , PHP , JAVA  , REACT NATIVE</p>
                <h3>Design Tools</h3>
                <p> Mockups
                    Figma</p>
            </div>
        </div>
    </section>
		</>
	);
}

export default About;