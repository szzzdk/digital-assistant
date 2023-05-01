import React from 'react';

const ProfileCard = ({title, handle, image, description}) => {
    //const {title, handle} = props is the same as ({title, handle})
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <figure>
                        <img src={image} alt="pda logo"/>
                    </figure>
                </div>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;