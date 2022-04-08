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

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Contact</h1>
			      <ul className="contact-links">
			      	<li className="contact-item">Email: fazufaiez@gmail.com</li>
			      	<li className="contact-item">Phone: +923161113521</li>
			      </ul>
		      </div>
				  <Form />
	      </div>
			</section>
		</>
	);
}

export default Contact;

function Form(){


	const onSubmit = (e) =>{
        e.preventDefault();
		 if(e.target[0].value != "" && e.target[2].value != ""){
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

		<div className="form-container">
	
  <form  onSubmit={onSubmit}>

    <label htmlFor="fname">Email</label>
    <input type="text" required id="email" name="firstname" placeholder="Your name.."/>

    <label htmlFor="lname">Subject</label>
    <input type="text" required id="subject" name="lastname" placeholder="Your last name.."/>

    <label htmlFor="subject">Message</label>
    <textarea id="subject" required name="message" placeholder="Write something.." style={{ height : "200px"}}></textarea>

    <input type="submit" name='submit' value="Submit"/>

  </form>
</div>
	</>
	)
}