import React from 'react';
import earthquakeData from '../../../api/data'
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import styles from './Details.style'

const Details = ({ className }) => {
    const { id } = useParams()
    const schema = [
        { label: "Title", value: "title" },
        { label: "Magnititude", value: "mag" },
        { label: "Time", value: "time" },
        { label: "Status", value: "status" },
        { label: "Tsunami", value: "tsunami" },
        { label: "Type", value: "type" }
    ]

    const details = earthquakeData.data.features.find(earthquake => earthquake.id === id)

    const renderDetails =
        schema.map(field => {
            return (
                <div className='row' key={field.value}>
                    <div className='title'>
                        {field.label}
                    </div>
                    <div className='value'>
                        {field.value === "time" ? new Date(details.properties[field.value]).toUTCString() : details.properties[field.value]}
                    </div>
                </div>
            )
        });

    return (
        <div className={className}>
            <h1>{details.properties.place}</h1>
            {renderDetails}
        </div>
    )
}

export default styled(Details) `
${styles}
`;