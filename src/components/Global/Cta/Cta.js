import React from 'react'
import { Link } from 'gatsby'

export default function Cta({ url, label, target = null, isPrimary = false }) {
  return (
    <div>
      <Link className={`btn ${isPrimary ? "btn-primary" : ""}`} to={url}>{label}</Link>
    </div>
  )
}
