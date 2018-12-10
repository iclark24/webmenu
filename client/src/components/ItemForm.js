import React from 'react';
import { Form, } from "semantic-ui-react";

class ItemForm extends React.Component {
  state = { name: "" , cost: "", description: ""};

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name, this.state.cost, this.state.description);
    this.setState({ name: "" , cost: "", description: "" })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Item"
            placeholder="Add A Item"
            required
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            />
          <Form.Input
            label="Price"
            type="number"
            placeholder="Add A Item"
            required
            name="cost"
            value={this.state.cost}
            onChange={this.handleChange}
            />
          <Form.TextArea
            label="Description"
            placeholder="Add A Item"
            style={{}}
            required
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            />
        </Form.Group>
        <Form.Button color="green">Submit</Form.Button>

      </Form>

    )
  }
}

export default ItemForm;