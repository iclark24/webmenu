import React from 'react';
import {Item as SITEM, Button, Icon} from "semantic-ui-react"

const Item = ({ id, cost, name, description, updateItem, deleteItem }) => (
  <div>
    <SITEM>
      <SITEM.Content>
      <Button 
        icon 
        color="red" 
        size="tiny" 
        onClick={() => deleteItem(id)} 
        style={{ marginLeft: "15px", }}
      >
        <Icon name="trash" />
      </Button>
        <SITEM.Header as="h2">{ name }</SITEM.Header>
        <SITEM.Description>{ description }</SITEM.Description>
        <SITEM.Meta>${ cost }</SITEM.Meta>
      </SITEM.Content>
    </SITEM>
  </div>
)


export default Item;