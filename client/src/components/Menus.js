import React from 'react';
import Menu from './Menu';
import {Segment} from "semantic-ui-react"

const Menus = ({ menus, updateMenu, deleteMenu }) => (
  <div>
    { menus.map( menus => 
      <Segment raised color="red">
        <Menu
          key={menus.id}
          {...menus}
          updateMenu={updateMenu}
          deleteMenu={deleteMenu}
          />
      </Segment>
      )
    }
  </div>
)

export default Menus;