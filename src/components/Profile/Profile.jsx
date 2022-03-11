import React from 'react'
import earthQuakeData from '../../api/data'
import styles from './Profile.style'
import styled from 'styled-components'


const Profile = ({ className }) => {

    const schema = [
        { label: "First Name", value: "firstName" },
        { label: "Last Name", value: "lastName" },
        { label: "Phone", value: "phone" },
        { label: "Email", value: "email" },
        { label: "Bio", value: "bio" }
    ]

    const profile = earthQuakeData.profile

    const renderProfile = <div className='second-column'>
        {schema.map((field, index) => {
            return (
                <div className='row' key={index}>
                    <div className='title'>
                        {field.label}
                    </div>
                    <div className='value'>
                        {profile[field.value]}
                    </div>
                </div>
            )
        }
        )}
    </div>

    return (
        <div className={className}>
            <h1 className='header'>Profile</h1>
            <div className='row'>
                <div className='first-column'>
                    <img className="avatar" src={profile.avatarImage} />
                </div>
                {renderProfile}
            </div>
        </div>
    )
}

export default styled(Profile) `
${styles}
`;
