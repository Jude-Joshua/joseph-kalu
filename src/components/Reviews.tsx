import React from "react";

import ImageComponent from "./ImageComponent.tsx";

import Reviewer01 from "../assets/images/erin.webp";
import Reviewer02 from "../assets/images/ade.webp";
import Reviewer03 from "../assets/images/fola.webp";
import Reviewer04 from "../assets/images/daniel.webp";
import Reviewer05 from "../assets/images/majo.webp";
import Reviewer06 from "../assets/images/mo.webp";

import {ArrowLeft, ArrowRight} from "@phosphor-icons/react";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Keyboard, Navigation} from 'swiper/modules';

import 'swiper/css';

interface TestimonialProps {

}

const reviews = [
    {
        img: Reviewer01,
        name: "Erin Skurdal",
        position: "Director, Global UX Design, Kenvue Inc.",
        content: "Joseph was a member of my global UX design team for 18 months. During that time, I was grateful for the thoughtfulness he brought to every design challenge and his positive attitude which continuously elevated the results of the cross functional team he worked with.\n\nJoseph brought both a consumer and business-savvy mindset to his design decisions. He is committed to creating and leveraging design systems to drive consistent and efficient digital experiences. I hope I am able to hire Joseph again in the future. He will be missed until then.",
    },
    {
        img: Reviewer02,
        name: "Adebayo Oyinloye",
        position: "Product Designer, FairMoney",
        content: "I have had the pleasure of working with Joseph, and I can confidently say that he is a growth-driven individual with exceptional design skills. He has a natural inclination towards leadership roles and has consistently demonstrated his ability to guide and support individuals in achieving their goals.\n\nJoseph's collaborative approach and dedication make him an ideal partner to work with, and I highly recommend considering him for any projects or ventures.",
    },
    {
        img: Reviewer03,
        name: "Folajomi Rukayat Bello",
        position: "UI/UX Designer, VPay Africa",
        content: "Joseph is an exceptional designer and a valuable team player. I had the pleasure of collaborating with him on the design of zuri.chat, and I was consistently impressed by the quality of his work.\n\nHis dedication and availability to support the team were invaluable. I highly recommend him for UI/UX design projects and opportunities.",
    },
    {
        img: Reviewer04,
        name: "Daniel Udumukwu",
        position: "Lead Product Designer, Yellow Card",
        content: "Joseph is indeed a leader. He had a way of perfectly organizing stakeholders and also fellow team mates.\n\nAbove all, he has amazing UI/UX skills! I highly recommend working with Joseph, he is indeed an amazing designer!",
    },
    {
        img: Reviewer05,
        name: "Majolie Obaje",
        position: "Reginal Head of PR and Marketing, Jiji Africa",
        content: "Joseph remains a great asset to any team. He is dedicated, result oriented and a goal getter. I should also mention he is multidimensional; A pro digital strategist, UI/UX guru and an overall tech enthusiast. Collaborating with Joseph was easy on several projects.\n\nHe is Undoubtedly one of the best hires any business can have for sure.",
    },
    {
        img: Reviewer06,
        name: "Mo Olorisade",
        position: "Product Marketing Manager, Summize",
        content: "Joseph is a guru at managing and growing online businesses. I even have his name saved as “Facebook Guru” on my phone.\n\nIf you need help growing your brand or business, I recommend his expertise if you want results! ",
    }
];

const Reviews: React.FC<TestimonialProps> = () => {

    return (
        <div className="review">
            <Swiper
                modules={[Keyboard, Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                keyboard={true}
                loop={true}
            >
                <div className="button-icon swiper-button-prev swiper-button">
                    <ArrowLeft size={'24'} weight={'regular'}/>
                </div>
                {reviews.map((reviewer, index) => (
                    <SwiperSlide>
                        <div className={'review-testimonial flex flex-row items-center justify-center'} key={index}>
                            <div className="review-testimonial-person flex flex-col justify-center items-center">
                                <ImageComponent altText={'first Reviewer, Erin Skurdal'} source={reviewer.img}/>
                                <div className="review-testimonial-person-details flex flex-col">
                                    <p className="h6 text-center testimonial-person-details-name">
                                        {reviewer.name}
                                    </p>
                                    <p className="c1 text-center review-testimonial-person-details-position">
                                        {reviewer.position}
                                    </p>
                                </div>
                            </div>
                            <div className="review-testimonial-review">
                                <p className="p1">
                                    {reviewer.content}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="button-icon right swiper-button-next swiper-button">
                    <ArrowRight size={'24'} weight={'regular'}/>
                </div>
            </Swiper>

        </div>
    );
};

export default Reviews;
