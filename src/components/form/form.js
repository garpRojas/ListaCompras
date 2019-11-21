import React from 'react';
import Data from "../data/data.json"; 

const listData = Data.list;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: 'Glenn',
                name: '',
                 notas: '',
                 precio: 0,
                 lugar: '',
                 comprado: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    this.setState({[target.name]: target.value});
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
      
    let item = {
            "titulo":this.state.name, 
            "notas":this.state.notas, 
            "precio":this.state.precio, 
            "lugar":this.state.precio, 
            "user":this.state.user, 
            "date":"3 days ago", 
            "comprado":this.state.comprado};
    
    listData.push(item);

    console.log(item);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="col-lg-6 col-sm-10 offset-lg-3 offset-sm-1">
  <div className="form-group">
    <select className="form-control" name="user" value={this.state.user} onChange={this.handleChange}>
      <option value="Glenn">Glenn</option>
      <option value="Faby">Faby</option>
    </select>
     </div>
    <div className="form-group">
    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} id="inputTitle" aria-describedby="artuculoName" placeholder="Nombre del Articulo"></input>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" name="notas" value={this.state.notas} onChange={this.handleChange} id="inputNotas" placeholder="Notas"></input>
  </div>
             <div className="form-group">
    <input type="text" className="form-control" name="precio" value={this.state.precio} onChange={this.handleChange} id="inputPrecio" placeholder="Precio"></input>
  </div>
             <div className="form-group">
    <input type="text" className="form-control" name="lugar" value={this.state.lugar} onChange={this.handleChange} id="inputLugar" placeholder="Lugar"></input>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" name="comprado" value={this.state.comprado} onChange={this.handleChange} id="checkComprado"></input>
    <label className="form-check-label" for="checkComprado">Comprado</label>
  </div>
  <button type="submit" className="btn btn-primary">Agregar</button>

      </form>
    );
  }
}

export default Form;