import React from 'react';
import Item from './Item';
import {Segment} from "semantic-ui-react"
import {Item as SITEM} from "semantic-ui-react"


const Items = ({ items, updateItem, deleteItem }) => (
  <div>
    { items.map( items => 
      <Segment>
        <SITEM.Group>
          <Item
            key={items.id}
            {...items}
            updateItem={updateItem}
            deleteItem={deleteItem}
            />
        </SITEM.Group>
      </Segment>
      )
    }
  </div>
)

export default Items;