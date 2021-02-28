import React from 'react';
import './Widget.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget() {

    const newsArticle = (heading, subtitle) => (
        <div className="widget__article">
            <div className="widget__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widget">
            <div className="widget__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Jacky Lau HIRED", "Top News - New grad has beaten the pandemic")}
            {newsArticle("Coronavirus Vaccine", "Vaccines rolling out throughout the world")}
            {newsArticle("Cryptocurrency", "Bitcoin SURGES to 57k")}
        </div>
    )
}

export default Widget
