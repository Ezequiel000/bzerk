import picAbout from "../../public/images/person/person1.jpg"
import Image from 'next/image'
import Link from 'next/link'
export default function About(){

    return(
        <>
            <div className = "divider"></div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src ={picAbout} alt='pic'/>
                    <div>
                    <h1 className="text-5xl font-bold">My Story</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link className='btn rounded full' href = "/book-online">Let{"'"}s Meet!</Link>
                    </div>
                </div>
            </div>

        </>
    );
}