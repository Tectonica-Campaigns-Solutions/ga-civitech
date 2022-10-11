import React from 'react'
import { Link } from 'gatsby'

import "./index.scss";

export default function Shortcut({ title, description, btnLabel, btnUrl }) {
    return (
        <div className="shortcut">
            <h4>{title}</h4>
            <p>{description}</p>

            <Link to={btnUrl}>{btnLabel}</Link>
        </div>
    )
}
