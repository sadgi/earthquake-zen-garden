import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import earthQuakeData from '../../../api/data'
import styled from 'styled-components'
import styles from './Listing.style'

const Listing = ({ className }) => {

    const [sortedData, setSortedData] = useState(earthQuakeData.data.features)
    const [sortedField, setSortedField] = useState("place")
    const [sort, setSort] = useState(false)

    const fieldSort = (name) => {
        setSort(!sort)
        sortedData.sort((a, b) => {
            if (a.properties[name] < b.properties[name]) {
                return sort ? 1 : -1
            }
            if (a.properties[name] > b.properties[name]) {
                return sort ? -1 : 1
            }
            return 0
        })
        setSortedField(name)
        setSortedData(sortedData)
    }

    const tableData = sortedData.map((earthquake) => {
        return (
            <tr key={earthquake.id}>
                <td className="details">
                    <Link to={`/details/${earthquake.id}`}>{earthquake.properties.place}</Link>
                </td>
                <td >{earthquake.properties.mag}</td>
                <td >{new Date(earthquake.properties.time).toUTCString()}</td>
            </tr>
        )
    });

    return (
        <div className={className}>
            <h1 className="header">{" USGS All Earthquakes, Past Hour"}</h1>
            <table className="earthquake">
                <thead>
                    <tr>
                        <th onClick={() => fieldSort('place')}>Title</th>
                        <th onClick={() => fieldSort('mag')} >Magnitude</th>
                        <th onClick={() => fieldSort('time')} >Time</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div >)
}

export default styled(Listing) `
${styles}
`;