import React from 'react'
import './animated-effect.scss'
type Props = {}

function AnimatedEffect({}: Props) {
  return (
    <div className="body7 h-auto text-black/60 ">
      <h3>Animated Paper Effect with CSS</h3>
      <link
        href="https://fonts.googleapis.com/css?family=PT+Sans"
        rel="stylesheet"
        type="text/css"
      />

      <h2 className="no-separator ">Raise on hover from flat</h2>
      <a href="" className="btn paper-raise">
        Try Me
      </a>

      <h2>Flatten on hover from raised</h2>
      <a href="" className="btn paper paper-raise-flatten">
        Try Me
      </a>

      <h2>Raise from Less flat position on hover</h2>
      <a href="" className="btn paper paper-raise">
        Try Me
      </a>

      <h2>Lift sides on Hover</h2>
      <a href="" className="btn paper-lift">
        Try Me
      </a>

      <h2>Flatten sides on hover</h2>
      <a href="" className="btn paper-flatten">
        Try Me
      </a>

      <h2>Curl right corner on hover</h2>
      <a href="" className="btn paper paper-curl-right">
        Try Me
      </a>

      <h2>Curl right side on hover</h2>
      <a href="" className="btn paper paper-curl-right-side">
        Try Me
      </a>

      <h2>Curl bottom corners on hover</h2>
      <a href="" className="btn paper paper-curl">
        Try Me
      </a>

      <h2>Group examples</h2>
      <h2>Raise on hover</h2>
      <ul>
        <li>
          <a href="" className="btn paper-raise">
            Button One
          </a>
        </li>
        <li>
          <a href="" className="btn paper-raise">
            Button Two
          </a>
        </li>
        <li>
          <a href="" className="btn paper-raise">
            Button Three
          </a>
        </li>
      </ul>

      <h2>Flatten on hover</h2>
      <ul>
        <li>
          <a href="" className="btn paper paper-raise-flatten">
            Button One
          </a>
        </li>
        <li>
          <a href="" className="btn paper paper-raise-flatten">
            Button Two
          </a>
        </li>
        <li>
          <a href="" className="btn paper paper-raise-flatten">
            Button Three
          </a>
        </li>
      </ul>

      <h2>Less flat raise on hover</h2>
      <ul>
        <li>
          <a href="" className="btn paper paper-raise">
            Button One
          </a>
        </li>
        <li>
          <a href="" className="btn paper paper-raise">
            Button Two
          </a>
        </li>
        <li>
          <a href="" className="btn paper paper-raise">
            Button Three
          </a>
        </li>
      </ul>

      <h2>Lift sides on hover</h2>
      <ul>
        <li>
          <a href="" className="btn paper-lift">
            Button One
          </a>
        </li>
        <li>
          <a href="" className="btn paper-lift">
            Button Two
          </a>
        </li>
        <li>
          <a href="" className="btn paper-lift">
            Button Three
          </a>
        </li>
      </ul>

      <h2>Flatten sides on hover</h2>
      <ul>
        <li>
          <a href="" className="btn paper-flatten">
            Button One
          </a>
        </li>
        <li>
          <a href="" className="btn paper-flatten">
            Button Two
          </a>
        </li>
        <li>
          <a href="" className="btn paper-flatten">
            Button Three
          </a>
        </li>
      </ul>

      <h2>Curl right corner on hover</h2>
      <ul>
        <li>
          <a href="" className="btn paper paper-curl-right">
            Button One
          </a>
        </li>
        <li>
          <a href="" className="btn paper paper-curl-right">
            Button Two
          </a>
        </li>
        <li>
          <a href="" className="btn paper paper-curl-right">
            Button Three
          </a>
        </li>
      </ul>

      <h2>Curl right side on hover</h2>
      <ul>
        <li>
          <a href="" className="btn paper paper-curl-right-side">
            Button One
          </a>
        </li>
        <li>
          <a href="" className="btn paper paper-curl-right-side">
            Button Two
          </a>
        </li>
        <li>
          <a href="" className="btn paper paper-curl-right-side">
            Button Three
          </a>
        </li>
      </ul>

      <h2>Curl bottom corners on hover</h2>
      <ul>
        <li>
          <a href="" className="btn paper paper-curl">
            Button One
          </a>
        </li>
        <li>
          <a href="" className="btn paper paper-curl">
            Button Two
          </a>
        </li>
        <li>
          <a href="" className="btn paper paper-curl">
            Button Three
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AnimatedEffect
