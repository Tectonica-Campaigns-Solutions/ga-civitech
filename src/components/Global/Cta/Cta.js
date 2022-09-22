import React from 'react'
import { Link } from 'gatsby'

export default function Cta({url, label, target=null}) {
  return (
    <div>
      <Link to={url}>{label}</Link>
    </div>
  )
}
