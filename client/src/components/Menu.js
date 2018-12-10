import React, {Component} from 'react';
import {Header, Button, Icon, Segment} from "semantic-ui-react"
import axios from "axios"
import Items from "./Items"
import ItemForm from "./ItemForm"
import MenuForm from "./MenuForm"
// ({ id, complete, name, updateMenu, deleteMenu })

class Menu extends Component {

  state = { 
    items: [], 
    showForm: false,
    editing: false,
  }

  toggleForm = () =>this.setState({ showForm: !this.state.showForm })

  toggleEdit = () => this.setState({ editing: !this.state.editing, });


  componentDidMount() {
    axios.get(`/api/menus/${this.props.id}/items`)
      .then( res => {
        this.setState({ items: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  addItem = (name, cost, description) => {
    axios.post( `/api/menus/${this.props.id}/items`, {name, cost, description})
      .then( res => {
        const { items } = this.state;
        this.setState({items: [...items, res.data]})
      })
  }

  updateItem = (id, item) => {
    axios.put(`/api/menus/${this.props.id}/items/${id.id}`, item)
    .then( res => {
      const items = this.state.items.map( m => {
        if (m.id === id)
          return res.data
        return m
      })
      this.setState({ items })
    })
  }

  deleteItem = (id) => {
    axios.delete( `/api/menus/${this.props.id}/items/${id}`)
      .then( res => {
        const {items} = this.state;
        this.setState({ items: items.filter(i => i.id !== id )})
      })
  }

  render() {
    const {showForm} = this.state;
    return (
    <div>

      <Segment basic style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Button icon color="blue" onClick={this.toggleEdit}>
          <Icon name="pencil" />
        </Button>
        {this.state.editing ?
          <MenuForm { ...this.props } toggleEdit={this.toggleEdit}></MenuForm>
            :
          <Header as="h2" style={{ marginLeft: "15px" }}>{ this.props.name }</Header>
        }

      <Button 
        icon 
        color="red" 
        size="tiny" 
        onClick={() => this.props.deleteMenu(this.props.id)} 
        style={{ marginLeft: "15px", }}
      >
        <Icon name="trash" />
      </Button>
      </Segment>
      <Segment basic>
      <Button icon color="blue" onClick={this.toggleForm}>
        <Icon name={this.state.showForm ? 'times' : 'plus'} />
      </Button> New Item
      { showForm ? <ItemForm addItem={this.addItem} /> : null }
      </Segment>
      <Items
        items={this.state.items}
        updateItem={this.updateItem}
        deleteItem={this.deleteItem}
      />
    </div>
    )
  }
}


export default Menu;