import React from "react";
import "./style.css";
import axios from "axios";

import { getCodex, saveCodex } from "../../utils/API";
import { List } from "../List";
import {userContext} from "../../utils/appContext";

// export default () => {
//   // const { user } = useContext(userContext)
//   // const [codex, setCodex] = useState([])
//   const handleSubmit = codex => saveCodex(codex)
// }

class CardForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        authors: '',
        description: '',
        school: '',
        pdflinks: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A project was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <br/>
            <input 
              type="text" 
              value={this.state.title} 
              onChange={ event => this.setState({ title: event.target.value })} 
            />
          </label>
        <br />
          <label>
            Author(s):
            <br />
            <input 
              type="text" 
              value={this.state.authors} 
              onChange={ event => this.setState({ authors: event.target.value })} 
            />
          </label>
        <br />
          <label>
            Description:
            <br />           
            <textarea 
              type="text" 
              value={this.state.description} 
              onChange={ event => this.setState({ description: event.target.value })}
            />          
          </label>
        <br />
          <label>
            School:
            <br />           
            <input 
              type="text" 
              value={this.state.school} 
              onChange={ event => this.setState ({ school: event.target.value })} 
            />          
          </label>
        <br />
          <label>
            <input 
              type="file" 
              value={this.state.pdflinks}
              onChange={ event => this.setState({ pdflinks: event.target.value  })}
            />
          </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>
      );
    }
  }

  export default CardForm