import React from "react";
import Links from "./Links.tsx";

interface ListProps {
    type: 'talks' | 'articles';
}

const Lists: React.FC<ListProps> = ({type}) => {
    const listings = [
        {
            "talks": [
                {
                    year: '2024',
                    topic: "WCGA 2.0 and UX",
                    event: 'ACM SIGCHI Lagos',
                    link: 'https://youtu.be/bJvbAZ_seP8?si=O76um6aM0fxBxwMj'
                },
                {
                    year: '2024',
                    topic: "Building for All: Designing for Accessibility and Inclusivity",
                    event: 'Abia Tech Flock',
                    link: ''
                },
                {
                    year: '2024',
                    topic: "Sketching & Prototyping Techniques",
                    event: 'GOMYCODE',
                    link: 'https://files.fm/u/qk6uf5t34k'
                },
                {
                    year: '2024',
                    topic: "What Influences users’ purchase decisions?",
                    event: 'Log10Media',
                    link: 'https://youtu.be/2esLBt4GpXU?si=HsHLA2fVwSLJ543j'
                }
            ],
            "articles": [
                {
                    event: '',
                    topic: 'Transforming Nigeria into Africa\'s tech hub',
                    year: "2024",
                    link: 'https://thenationonlineng.net/developing-nigeria-into-africas-tech-hub/'
                },
                {
                    event: '',
                    topic: 'Information Architecture',
                    year: "2023",
                    link: 'https://josephkalu.medium.com/information-architecture-and-site-navigation-a-guide-for-ui-ux-designers-20ca303774dd'
                },
                {
                    event: '',
                    topic: 'Colour Theory in UI/UX: Designing a Perfect User Experience',
                    year: "2023",
                    link: 'https://josephkalu.medium.com/colour-theory-in-ui-ux-designing-a-perfect-user-experience-66b33766f95b'
                },
                {
                    event: '',
                    topic: 'The Power of User-Centred Design in Healthcare: A UI/UX Perspective',
                    year: "2023",
                    link: 'https://josephkalu.medium.com/the-power-of-user-centred-design-in-healthcare-a-ui-ux-perspective-a04fb6fee677'
                },
                {
                    event: '',
                    topic: 'Beginners Guide to UI/UX: Scaling Up in Design',
                    year: "2023",
                    link: 'https://josephkalu.medium.com/beginners-guide-to-ui-ux-scaling-up-in-design-0abc1d673a56'
                },
                {
                    event: '',
                    topic: 'Gamification in UI/UX Design',
                    year: "2023",
                    link: 'https://josephkalu.medium.com/gamification-in-ui-ux-design-5d9f7617e515'
                },
                {
                    event: '',
                    topic: 'Designing for Different Screen Sizes and Resolutions',
                    year: "2023",
                    link: 'https://josephkalu.medium.com/designing-for-different-screen-sizes-and-resolutions-434c9ee7f1e1'
                },
                {
                    event: '',
                    topic: 'Web2 and Web3; What are their differences and why you should care',
                    year: "2023",
                    link: 'https://medium.com/@josephkalu/web2-and-web3-what-are-their-differences-and-why-you-should-care-9d86f08a6c6b'
                }
            ]
        }
    ];

    return (
        <article className={'list flex flex-row justify-center items-start'}>
            <h4 className={'h4 list-title'}>
                {type}
            </h4>
            <div className={'list-listing flex flex-col'}>
                {listings[0][type].map((listing, index) => (
                    <div className={`list-listing-hold w-full flex flex-row justify-between ${type}`} key={index}>
                        {type === 'talks' && (<span className="h6 list-listing-hold-event">{listing.event}</span>)}
                        <p className={`p1 list-listing-hold-topic`}>
                            <Links to={listing.link} classes={''} border={true} target={'_blank'}>
                                    {listing.topic}
                            </Links>
                        </p>
                        <span className="p2 list-listing-hold-year text-right">{listing.year}</span>
                    </div>
                ))}
            </div>
        </article>
    );
}

export default Lists;
