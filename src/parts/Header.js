import React from 'react'
import Button from 'elements/button'
import BrandIcon from 'parts/iconText'
export default function Header(props) {
    const getNavLinkClass = path =>{
        // eslint-disable-next-line no-restricted-globals
        return location.pathname === path ?" active" : "";
    };

    return (
    <div>
      <header className ="spacing-sm">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <BrandIcon>
                
                </BrandIcon>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item${getNavLinkClass("/")}`}>
                            <Button className='nav-link' type='link' href=''>
                                Home
                            </Button>                                       
                        </li>
                        <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                            <Button className='nav-link' type='link' href='/browse-by'>
                                Browse By
                            </Button>                                       
                        </li>
                        <li className={`nav-item${getNavLinkClass("/stories")}`}>
                            <Button className='nav-link' type='link' href='/stories'>
                                Stories
                            </Button>                                       
                        </li>
                        <li className={`nav-item${getNavLinkClass("/agents")}`}>
                            <Button className='nav-link' type='link' href='/agents'>
                                Agents
                            </Button>                                       
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

      </header>
    </div>
  )
}
