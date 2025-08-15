import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"

export default function Links() {
  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item">
        <a
          href="mailto:farasadilah0@gmail.com"
          target="_blank"
          rel="noreferrer"
          alt="email link"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      {/* <li className="list-group-item">
        <a
          href="https://github.com/githubName"
          target="_blank"
          rel="noreferrer"
          alt="github link"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li> */}
      <li className="list-group-item">
        <a
          href="https://instagram.com/1ovingyas"
          target="_blank"
          rel="noreferrer"
          alt="linkedin link"
        >
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
      </li>
      <li className="list-group-item">
        <a
          href="https://twitter.com/ayasieeee"
          target="_blank"
          rel="noreferrer"
          alt="twitter link"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
    </ul>
  )
}
