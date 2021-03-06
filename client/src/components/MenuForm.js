import React from 'react';
import { Form, } from "semantic-ui-react";

class MenuForm extends React.Component {
  state = { name: '' };

  componentDidMount() {
    if (this.props.id)
      this.setState({ name: this.props.name });
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.updateMenu({id: this.props.id}, {...this.state});
      this.props.toggleEdit()
    } else {
      this.props.addMenu(this.state.name);
    }
    this.setState({ name: ""})
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Menu"
          placeholder="Add A Menu"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Button color="green">Submit</Form.Button>

      </Form>
    )
  }
}

export default MenuForm;