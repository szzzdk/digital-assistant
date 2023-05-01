import React from 'react';

const ProfileCard = ({title, handle, image}) => {
    //const {title, handle} = props is the same as ({title, handle})
    return (
        <div>
            <img src={image} alt="pda logo"/>
            <div>Profile is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

export default ProfileCard;