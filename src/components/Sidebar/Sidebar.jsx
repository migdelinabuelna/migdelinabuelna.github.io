import React from "react";
import { Link } from 'react-router-dom'
import { Icon, Menu, Sidebar, Image } from 'semantic-ui-react'
import './Sidebar.css'

export default function PageSidebar() {
    return (
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          visible
          width='thin'
          className="side-bar">
            <Image src="https://i.imgur.com/qzhKb9W.jpg" circular/>
            <Menu.Item as='a' >
                <Link to="/"> <Icon name='home' color="brown"/> HOME</Link>
            </Menu.Item>
            <Menu.Item as='a'>
                <Link to="/projects"> <Icon name='book' color="brown" />PROJECTS</Link>
            </Menu.Item>
            <Menu.Item as='a'>
                <Link to="/resume"><Icon name='file alternate outline' color="brown"/>RESUME</Link>
            </Menu.Item>
            <Menu.Item as='a'>
                <Link to="/contact"><Icon name='mail' color="brown"/>CONTACT</Link>
            </Menu.Item>
        </Sidebar>
    )
}
