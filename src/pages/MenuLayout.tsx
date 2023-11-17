import * as React from 'react'
import MainMenuComponent from "../menu"

interface MenuLayoutProps {
  children?: React.ReactNode; // Optional children prop
}

class MenuLayout extends React.Component<MenuLayoutProps> {
  render() {
    return <>
        <MainMenuComponent />
        <h1>Loam Season</h1>
        <div>
            {this.props.children}
        </div>
    </>
  }
}

export default MenuLayout
