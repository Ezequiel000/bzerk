import Image from 'next/image'
import collage from '../public/images/person/home-page-image.jpg'
import pic1 from '../public/images/bzerkt_tattoos/pic1.jpg'
import pic2 from '../public/images/bzerkt_tattoos/pic2.jpg'
import pic3 from '../public/images/bzerkt_tattoos/pic32.jpg'
import pic4 from '../public/images/bzerkt_tattoos/pic4.jpg'
import pic5 from '../public/images/bzerkt_tattoos/pic5.jpg'
import pic6 from '../public/images/bzerkt_tattoos/pic6.jpg'
import monito from "../public/images/bzerkt_tattoos/monito-blue-sm.jpeg"
import pic7 from '../public/images/bzerkt_tattoos/pic7.jpg'
import banner from "../public/images/bzerkt_tattoos/logo-black-sm.jpeg"
import Link from 'next/link'


export default function Page(){
    return (
        <>
        <div  className = "artboard artboard-horizontal center"> 
        <Image src ={banner} alt="baner"/>
        </div>
        <div className = "divider"></div>
            <div className= "carousel rounded-box ">
                <div className="carousel-item block">
                    <Image   width={500} height={500}  src={pic1} alt="Pizza" />
                </div> 
                <div className="carousel-item block">
                    <Image width={500} height={500} src={pic2}  alt="Pizza" />
                </div> 
                <div className="carousel-item block ">
                    <Image  width={500} height={500}  src={pic3} alt="Pizza" />
                </div> 
                <div className="carousel-item block ">
                    <Image  width={500} height={500}  src={pic4} alt="Pizza" />
                </div> 
                <div className="carousel-item block ">
                    <Image  width={500} height={500}  src={pic5} alt="Pizza" />
                </div> 
                <div className="carousel-item block ">
                    <Image  width={500} height={500}  src={pic6} alt="Pizza" />
                </div> 
                <div className="carousel-item block ">
                    <Image  width={500} height={500}  src={pic7} alt="Pizza" />
                </div>
                
            </div>
            <div className = "divider"></div>
            <div className= "md justify-items-center">
            <Image  className= "justify-self-center" width={1000} height={1000} alt = "monito" src ={monito}/>
            </div>
    
            <div className = "divider"></div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src = {collage} alt = "desc" ></Image>
                    <div>
                    <h1 className="text-5xl font-bold">🔥💯🔥💯🔥💯🔥</h1>
                    <p className="py-6">Introducing Brian, your go-to tattoo artist in Upland, CA. Specializing in anime tattoos, but open to any ideas. With a talent for detail and a passion for making your tattoo visions a reality, book your appointment today and let Brian ink you with a one-of-a-kind masterpiece.</p>
                    <Link className='btn rounded full' href = "/book-online">Book Now</Link>
                    </div>
                </div>
            </div>
        </>
    );
}