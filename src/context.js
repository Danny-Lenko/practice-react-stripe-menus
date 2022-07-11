import React, { useState, createContext } from 'react'
import sublinks from './data'

const Context = createContext()

function ContextProvider({ children }) {
   const [sidebarOpened, setSidebarOpened] = useState(false)
   const [currentSublink, setCurrentSublink] = useState('')
   const [coordinates, setCoordinates] = useState({})
   const [savedSublink, setSavedSublink] = useState(false)

   function openSidebar() {
      setSidebarOpened(true)
   }

   function closeSidebar() {
      setSidebarOpened(false)
   }

   function findSublink(name, e) {
      const left = e.target.getBoundingClientRect().left
      const right = e.target.getBoundingClientRect().right
      const x = (left + right) / 2
      const y = e.target.getBoundingClientRect().bottom - 3
      const actualSublink = sublinks.find(link => link.page === name)

      setCurrentSublink(actualSublink)
      setSavedSublink(actualSublink)
      setCoordinates({x:x, y:y})
   }

   function resetSubmenu() {
      setCurrentSublink('')
   }

   function enterSubmenu(e) {
      setCurrentSublink(savedSublink)
   }

   function leaveSubmenu(){
      setSavedSublink('')
      setCurrentSublink('')
   }

   return(
      <Context.Provider value={{
         sidebarOpened,
         openSidebar,
         closeSidebar,
         findSublink,
         currentSublink,
         resetSubmenu,
         coordinates,
         enterSubmenu,
         leaveSubmenu
      }}>
         { children }
      </Context.Provider>
   )
}

export { Context, ContextProvider }