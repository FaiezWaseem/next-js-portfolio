import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Contact() {
	return (
		<>
			<Head>
			  <title>Contact</title>
			</Head>

			<Navbar />
				  <Form />
		</>
	);
}

export default Contact;

function Form(){


	const onSubmit = (e) =>{
        e.preventDefault();
		 if(e.target[0].value != "" && e.target[1].value != ""){
			fetch(`/api/Mail?email=${e.target[0].value}&subject=${e.target[1].value}&message=${e.target[2].value}`)
			.then(res => res.json())
			.then(res => {
				if(res.status === "ok"){
					alert("Request Submitted")
				}else{
					alert("Failed Request")
				}
			})
		 }else{
			 alert("Please Fill out all fields")
		 }
	}

	return (<>

     <div className="section contact sec-dis">
        <h1 className="section-title">Contact</h1>
        <p className="section-desc">Have a question or want to work together? Contact me now or send a email
		 <a href="mailto:fazufaiez11@gmail.com">here</a>.</p>
        <div className="contact-container">

            <form className="contact-form"  onSubmit={onSubmit}>
                <input type="email" placeholder="Email Address"/>
                <input type="text" placeholder="Subject"/>
                <textarea name="message" placeholder="Message Here..."></textarea>
                <button className="btn">Send</button>
            </form>

            </div>
            </div>
	</>
	)
}