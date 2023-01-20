import picAbout from "../../public/images/person/person1.jpg"
import Image from 'next/image'
import Link from 'next/link'
export default function About(){

    return(
        <>
            <div className = "divider"></div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <Image width = {900} height = {1000}src ={picAbout} alt='pic'/>
                    <div>
                    <h1 className="text-5xl font-bold">Brian{"'"}s Story</h1>
                        <p className="py-6">
                        My name is Brian (aka Bzerkt_tattoos) and I’ve been tattooing for almost two years now. I have always had a passion for art and drawing, and decided to try my hand at tattooing. I was eventually given the opportunity to apprentice under Steven Embrey (aka STEMink909) and started working at Tinta Kultura. 
Since then, I have tried to learn and grow with every opportunity, and am continuously striving to be better every day. I have tattooed many different types of tattoos, but Anime tattoos are my primary focus. I’m always down for most types of tattoos so dont hesitate to ask! I’m grateful for anyone following me along this journey and if you’re interested in getting some ink from me, click the button below to request an appointment.                        </p>
                    <Link className='btn rounded full' href = "/book-online">Request Appointment</Link>
                    </div>
                </div>
            </div>
            <div className="divider"></div>

        </>
    );
}