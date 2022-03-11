import React from 'react';
import earthquakeData from '../../api/data'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import styles from './Header.style'

const Header = ({ className }) => {
    return (
        <div className={className}>
            <div className="link">
                <Link to={`/`}>
                    <img alt={earthquakeData.site.title} src={earthquakeData.site.logoImage} className="logo-image"/>
                </Link>
            </div>
            <div className="title">{earthquakeData.site.title}</div>
            <div>
                <Link to={"/profile"} className="link">
                    Welcome {earthquakeData.profile.firstName}
                </Link>
            </div>
        </div>)
}

export default styled(Header) `
${styles}
`;