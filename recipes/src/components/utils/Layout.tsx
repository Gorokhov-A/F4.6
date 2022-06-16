import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav nav-list">
          <li className="nav nav-list-item">
            <Link className="nav-link" to="/">
              Recipes
            </Link>
          </li>

          <li className="nav nav-list-item">
            <a className="nav-link" href="/api/">
              API
            </a>
          </li>
          <li className="nav nav-list-item">
            <a className="nav-link" href="/api/docs/">
              API Docs
            </a>
          </li>
          <li className="nav nav-list-item">
            <a className="nav-link" href="/api/schema/">
              API Schema
            </a>
          </li>
        </ul>
      </nav>

      <hr />
    </div>
  )
}
