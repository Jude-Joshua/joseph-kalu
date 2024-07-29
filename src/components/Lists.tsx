import React from "react";

interface ListProps {
    type: 'talks' | 'articles';
}

const Lists: React.FC<ListProps> = ({ type }) => {
    const listings = [
        {
            "talks": [
                {
                    year: '2024',
                    topic: "WCGA 2.0 and UX",
                    event: 'ACM SIGCHI Lagos',
                },
                {
                    year: '2024',
                    topic: "Building for All: Designing for Accessibility and Inclusivity",
                    event: 'Abia Tech Flock',
                },
                {
                    year: '2024',
                    topic: "Sketching & Prototyping Techniques",
                    event: 'GOMYCODE',
                },
                {
                    year: '2024',
                    topic: "What Influences users’ purchase decisions?",
                    event: 'Log10Media',
                }
            ],
            "articles": [
                {
                    event: '',
                    topic: 'Transforming Nigeria into Africa\'s tech hub',
                    year: "2024"
                },
                {
                    event: '',
                    topic: 'The Business Value of Good Design',
                    year: "2023"
                },
                {
                    event: '',
                    topic: 'The Power of User-Centred Design in Healthcare: A UI/UX Perspective',
                    year: "2023"
                },
                {
                    event: '',
                    topic: 'Leadership in Design: A Roadmap to Success',
                    year: "2023"
                },
                {
                    event: '',
                    topic: 'Beginners Guide to UI/UX: Scaling Up in Design',
                    year: "2023"
                },
                {
                    event: '',
                    topic: 'Effective Design Strategies for Business Growth',
                    year: "2023"
                },
                {
                    event: '',
                    topic: 'Designing for Different Screen Sizes and Resolutions',
                    year: "2023"
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
                        <span className={`${type === 'talks' ? 'p1' : 'h6'} list-listing-hold-topic`}>{listing.topic}</span>
                        <span className="p2 list-listing-hold-year text-right">{listing.year}</span>
                    </div>
                ))}
            </div>
        </article>
    );
}

export default Lists;
