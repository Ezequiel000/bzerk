import Image from 'next/image'
import collage from '../public/images/person/home-page-image.jpg'
import pic1 from '../public/images/bzerkt_tattoos/pic1.jpg'
import pic2 from '../public/images/bzerkt_tattoos/pic2.jpg'
import pic3 from '../public/images/bzerkt_tattoos/pic3.jpg'
import pic4 from '../public/images/bzerkt_tattoos/pic4.jpg'
import pic5 from '../public/images/bzerkt_tattoos/pic5.jpg'
import pic6 from '../public/images/bzerkt_tattoos/pic6.jpg'
import pic7 from '../public/images/bzerkt_tattoos/pic7.jpg'
import banner from "../public/images/bzerkt_tattoos/logo-black-sm.jpeg"
import Link from 'next/link'

export default function Page(){
    return (
        <>
        <div className = "artboard artboard-horizontal center"> 
        <Image src ={banner} alt="baner"/>
        </div>
        <div className = "divider"></div>
        <div className ="h-1/6">
            <div className= "carousel rounded-box">
                <div className="carousel-item ">
                    <Image src={pic1}  alt="Pizza" />
                </div> 
                <div className="carousel-item">
                    <Image src={pic2}  alt="Pizza" />
                </div> 
                <div className="carousel-item ">
                    <Image src={pic3} alt="Pizza" />
                </div> 
                <div className="carousel-item">
                    <Image src={pic4}  alt="Pizza" />
                </div> 
                <div className="carousel-item">
                    <Image src={pic5}  alt="Pizza" />
                </div> 
                <div className="carousel-item">
                    <Image src={pic6}  alt="Pizza" />
                </div> 
                <div className="carousel-item">
                    <Image src={pic7}  alt="Pizza" />
                </div>            
            </div>
        </div>   
            <div className = "divider"></div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src = {collage} alt = "desc" ></Image>
                    <div>
                    <h1 className="text-5xl font-bold">🔥💯🔥💯🔥💯</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link className='btn rounded full' href = "/">Book Now</Link>
                    </div>
                </div>
            </div>
        </>
    );
}