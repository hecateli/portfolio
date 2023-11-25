import * as React from 'react'
import { side_drawer_container } from './SideDrawer.module.css'

const SideDrawer = ({children}) => {
    return (
        <aside className={side_drawer_container}>
            {children}
        </aside>
    )
}

export default SideDrawer