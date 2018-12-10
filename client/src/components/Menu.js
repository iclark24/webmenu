import React, {Component} from 'react';
import {Header, Button, Icon} from "semantic-ui-react"
import axios from "axios"
import Items from "./Items"
import ItemForm from "./ItemForm"
// ({ id, complete, name, updateMenu, deleteMenu })

class Menu extends Component {

  state = { 
    items: [], 
    showForm: true,
  }

  toggleForm = () =>this.setState({ showForm: !this.state.showForm })

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

  updateItem = (id) => {
    axios.put(`/api/menus/${this.props.id}/items/${id}`)
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
      <Header as="h2" style={{ marginLeft: "15px" }}>{ this.props.name }</Header>
      <Button icon color="blue" onClick={this.toggleForm}>
        <Icon name={this.state.showForm ? 'times' : 'plus'} />
      </Button>
      <Button 
        icon 
        color="red" 
        size="tiny" 
        onClick={() => this.props.deleteMenu(this.props.id)} 
        style={{ marginLeft: "15px", }}
      >
        <Icon name="trash" />
      </Button>
        { showForm ? <ItemForm addItem={this.addItem} /> : null }
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