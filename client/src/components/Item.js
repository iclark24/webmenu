import React from 'react';
import {Item as SITEM, Button, Icon, Segment} from "semantic-ui-react"
import ItemForm from "./ItemForm"

// ({ id, cost, name, description, updateItem, deleteItem })
class Item extends React.Component {

  state = {
    editing: false
  }

  toggleEdit = () => this.setState({ editing: !this.state.editing, });


  render() {
    return(
      <div>
        <SITEM>
          <SITEM.Content>
          <Segment basic style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Button icon color="blue" onClick={this.toggleEdit}>
            <Icon name="pencil" />
          </Button>
          <Button 
            icon 
            color="red" 
            size="tiny" 
            onClick={() => this.props.deleteItem(this.props.id)} 
            style={{ marginLeft: "15px", }}
          >
            <Icon name="trash" />
          </Button>
          </Segment>
          {this.state.editing ? 
            <ItemForm { ...this.props } toggleEdit={this.toggleEdit}></ItemForm>
            :
            <div>
            <SITEM.Header as="h2" style={{ marginLeft: "15px" }}>{ this.props.name }</SITEM.Header>
            <SITEM.Description style={{ marginLeft: "15px" }}>{ this.props.description }</SITEM.Description>
            <SITEM.Meta style={{ marginLeft: "15px" }}>${ this.props.cost }</SITEM.Meta>
            </div>
          }
          </SITEM.Content>
        </SITEM>
      </div>
    )
  }
}


export default Item;