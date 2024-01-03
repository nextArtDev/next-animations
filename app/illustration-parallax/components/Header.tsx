import { FC } from 'react'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="header flex justify-between pt-[0.64rem] py-[0.88rem] pb-0 ">
      <div className="left-wrap flex ">
        <div className="header-text text-[var(--font-size-header-text)] leading-[var(--line-height-header-text)] font-medium ">
          Unusual Stories
        </div>
      </div>
      <div className="right-wrap">
        <ul className="header-menu flex  ">
          <li className="header-link mr-[0.3rem] text-[var(--font-size-header-link)] leading-[var(--line-height-header-link)]  font-normal ">
            Tales
          </li>
          <li className="header-link mr-[0.3rem] text-[var(--font-size-header-link)] leading-[var(--line-height-header-link)]  font-normal ">
            About
          </li>
          <li className="header-link text-[var(--font-size-header-link)] leading-[var(--line-height-header-link)]  font-normal ">
            Contacts
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
