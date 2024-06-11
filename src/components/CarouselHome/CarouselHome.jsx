import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CarouselHome.scss';

export default function CarouselHome() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: 'src/assets/images/icon-donation.png',
            title: 'Donaciones',
            text: '¡Dona! tu apoyo es muy importante',
            link: '/'
        },
        {
            image: 'src/assets/images/icon-gallery.png',
            title: 'Estado de la adopción',
            text: 'Revisa el proceso de tus adopciones en curso.',
            link: '/'
        },
        {
            image: 'src/assets/images/icon-sponsors.png',
            title: 'Apadrinamiento',
            text: 'Nos encantaría poder contar contigo.',
            link: '/'
        }
    ];

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className='b__carousel__home'>
            <div className='carousel-track' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className='carousel1__home' key={index}>
                        <Link className='link_carousel' to={slide.link}>
                            <img className='img__dog__background' src={slide.image} alt={slide.title} />
                            <div className='text__content'>
                                <h1>{slide.title}</h1>
                                <p>{slide.text}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='indicators'>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}


//----------------------------------------

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import './CarouselHome.scss'
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'


// export default function CarouselHome() {

//     const [slide, setSlide] = useState(0);

//     return (
//         <div className='b__carousel__home'>
//             <BsArrowLeftCircleFill />
//             <div className='carousel1__home'>
//                 <Link className='link_carousel' to={'/'}>
//                     <img className='img__dog__background' src='src/assets/images/icon-donation.png' />
//                     <div className='text__content'>
//                         <h1>Donaciones</h1>
//                         <p>¡Dona! tu apoyo apoyo es muy importante</p>
//                     </div>
//                 </Link>
//             </div>

//             <div className='carousel1__home'>
//                 <Link className='link_carousel' to={'/'}>
//                     <img className='img__dog__background' src='src/assets/images/icon-gallery.png' />
//                     <div className='text__content'>
//                         <h1>Estado de la adopción</h1>
//                         <p>Revisa el proceso de tus adopciones en curso.</p>
//                     </div>
//                 </Link>
//             </div>

//             <div className='carousel1__home'>
//                 <Link className='link_carousel' to={'/'}>
//                     <img className='img__dog__background' src='src/assets/images/icon-sponsors.png' />
//                     <div className='text__content'>
//                         <h1>Apadrinamiento</h1>
//                         <p>Nos encantaría poder contar contigo.</p>
//                     </div>
//                 </Link>
//             </div>
//             <BsArrowRightCircleFill />
//             <span className='indicators'>
//                 <button className='indicator' onClick={null}></button>
//                 <button className='indicator' onClick={null}></button>
//                 <button className='indicator' onClick={null}></button>
//             </span>
//         </div>
//     )
// }
