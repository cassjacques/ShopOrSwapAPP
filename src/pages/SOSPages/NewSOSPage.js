import React from 'react';

class NewSOSPage extends React.Component {
  state = {
    title: '',
    blogPost: '',
    brand: '',
    size: '',
    condition: '',
    price: '',
  };



  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/api/v1/soss', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        return response.json
      })
      .then((jsonData) => {
        this.props.history.push('/soss');
      })
      .catch((err) => {
        console.log(err)
      });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Add A New SOS</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label><br />
            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="blogPost">Blog Post</label><br />
            <textarea id="blogPost" name="blogPost" cols="20" rows="20" value={this.state.blogPost} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="brand">Brand</label><br />
            <input type="text" id="brand" name="brand" value={this.state.brand} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="size">size</label><br />
            <input type="text" id="size" name="size" value={this.state.size} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="condition">condition</label><br />
            <input type="text" id="condition" name="condition" value={this.state.condition} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="price">price</label><br />
            <input type="text" id="price" name="price" value={this.state.price} onChange={this.handleChange} />
          </div>
          <button type="submit">Add SOS</button>
        </form>
      </div>
    );
  }
}

export default NewSOSPage;