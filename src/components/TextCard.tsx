import React from 'react';
import Links from "./Links.tsx";
import iconMapping from './Icons.tsx'

interface RoleListProps {
    iconName: string;
    title: string;
    copyOne: string;
    copyTwo: string;
    link: string;
    linkLocation: string;
}

const TextCard: React.FC<RoleListProps> = ({iconName, title, copyOne, copyTwo, link, linkLocation}) => {
    const IconComponent = iconMapping[iconName]

    return (
        <>
            <div className="text-card flex flex-col justify-start items-start">
                <div className="text-card-area flex flex-col">
                    <IconComponent size={24} className={'text-card-area-icon'} weight={'light'}/>
                    <div className={'text-card-area-content flex flex-col'}>
                        <div className="text-card-area-content-title">
                            <p className={'h6'}>
                                {title}
                            </p>
                        </div>
                        <div className="text-card-area-content-copy flex flex-col">
                            <p className={'p2'}>{copyOne}</p>
                            <p className={'p2'}>{copyTwo}</p>
                        </div>
                    </div>
                </div>
                <Links to={linkLocation} classes={''} border={true} target={'_self'}>{link}</Links>
            </div>
        </>
    )
}

export default TextCard