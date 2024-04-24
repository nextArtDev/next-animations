import React from 'react'
import './v-fold.scss'
type Props = {}

function VFold({}: Props) {
  return (
    <div className="h-screen pt-8">
      <blockquote className="letter">
        <p>Dear User,</p>
        <p>
          Sed posuere vulputate lacus, non euismod mauris tempus at. Ut
          sollicitudin sem quam, eget faucibus dolor cursus ac. Pellentesque
          aliquam sollicitudin magna id molestie. Proin ut eros risus. Vivamus
          consectetur ligula maximus purus suscipit, ac feugiat metus dapibus.
        </p>

        <p>Sincerely,</p>
        <p>Senders Name</p>
      </blockquote>
    </div>
  )
}

export default VFold
