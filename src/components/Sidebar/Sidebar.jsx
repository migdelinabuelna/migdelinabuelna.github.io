import React from "react";
import { Link } from 'react-router-dom'
import {  Icon, Menu, MenuItem, Sidebar } from 'semantic-ui-react'
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
            <Menu.Item as='a' >
                <Link to="/"> <Icon name='home' color="brown"/> HOME</Link>
            </Menu.Item>
            <Menu.Item>
                <a href="https://github.com/migdelinabuelna"> <Icon name="github" color="brown"/> GITHUB</a>
            </Menu.Item>
            <Menu.Item as='a'>
                <Link to="/projects"> <Icon name='book' color="brown" />PROJECTS</Link>
            </Menu.Item>
            <Menu.Item as='a'>
                <Link to="/resume"><Icon name='file alternate outline' color="brown"/>RESUME </Link>
            </Menu.Item>
            <Menu.Item as='a'>
                <Link to="/contact"><Icon name='mail' color="brown"/>CONTACT ME </Link>
            </Menu.Item>
        </Sidebar>
    )
}


