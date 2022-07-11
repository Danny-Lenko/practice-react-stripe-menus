import React, { useState, useRef, useEffect, useContext } from 'react'
import { Context } from './context'

const Submenu = () => {
  const { 
    currentSublink, 
    coordinates,
    enterSubmenu,
    leaveSubmenu
  } = useContext(Context)
  const { page, links } = currentSublink
  const {x, y} = coordinates

  const ref = useRef()

  useEffect(() => {
    ref.current.style.left = `${x}px`
    ref.current.style.top = `${y}px`
  }, [coordinates])

  const allLinks = links ? links.map(link => (
    <a href={link.url}>{link.icon} {link.label}</a>
  )) : ''

  return (
    <section
      className={`submenu ${currentSublink ? 'show' : ''}`}
      ref={ref}
      onMouseEnter={ enterSubmenu }
      onMouseLeave={ leaveSubmenu }
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-${links ? links.length : 2}`}>
        {allLinks}
      </div>
    </section>
  )
}

export default Submenu
