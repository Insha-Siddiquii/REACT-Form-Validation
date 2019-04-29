import React from 'react';
import './App.css'; 
import SimpleReactValidator from 'simple-react-validator';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state ={
        name: '',
        email: '',
        review: '',
        password:'',
        contact: '',
        date: '',
        amount:''

      }
      this.validator = new SimpleReactValidator({
        validators: {
          password: {  // name the rule
            message: 'The password must contain alpha numeric with atleast one special characters _-!@# $% ^& *.',
            rule: (val, params, validator) => {
              return validator.helpers.testRegex(val,/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i) && params.indexOf(val) === -1
            }
           
          }
        }
      });
      this.submitForm = this.submitForm.bind(this);
      this.setTitle = this.setTitle.bind(this);
      this.setEmail = this.setEmail.bind(this);
      this.setReview = this.setReview.bind(this);
      this.setPassword = this.setPassword.bind(this);
      this.setContact = this.setContact.bind(this);
      this.setDate = this.setDate.bind(this);
      this.setAmount = this.setAmount.bind(this);
    
    }
    submitForm(){
      if (this.validator.allValid() ) {
        alert('You submitted the form and stuff!');
      } else {
        this.validator.showMessages();
        // rerender to show messages for the first time
        this.forceUpdate();
      }
      

      
    }
    setTitle(event){
      this.setState(
        {title : event.target.value}
    );
        
    }
    setEmail(event){
      this.setState(
        {email : event.target.value}
    );
        
    }
    setReview(event){
      this.setState(
        {review : event.target.value}
    );
    }
    setPassword(event){
      this.setState(
        {password : event.target.value}
    );
    }
    setContact(event){
      this.setState(
        {contact : event.target.value}
    );
    }
    setDate(event){
      this.setState(
        {date : event.target.value}
    );
    }
    setAmount(event){
      this.setState(
        {amount : event.target.value}
    );
    }
    
  
render(){
   return (
      <div className="container">
        <h1>Form Validation</h1>
        <div className="form-group col-xs-4" >
          <label>Title</label>
          <input className="form-control" defaultValue={this.state.title} onChange={this.setTitle} />


          {this.validator.message('title', this.state.title, 'required|alpha_space')}

        </div>
        <div className="form-group col-xs-4">
          <label>Email</label>
          <input className="form-control" defaultValue={this.state.email} onChange={this.setEmail} />


          {this.validator.message('email', this.state.email, 'required|email')}

        </div>
        <div className="form-group col-xs-4">
          <label>Password</label>
          <input className="form-control" type="password" defaultValue={this.state.password} onChange={this.setPassword} />


          {this.validator.message('password', this.state.password, 'required|password' )}

        </div>
        <div className="form-group col-xs-4">
          <label>Contact</label>
          <input className="form-control" type="tel" defaultValue={this.state.contact} onChange={this.setContact} />


          {this.validator.message('contact', this.state.contact, 'required|phone')}

      </div>
      <div className="form-group col-xs-4">
          <label>Date</label>
          <input className="form-control" type="date" defaultValue={this.state.date} onChange={this.setDate} />


          {this.validator.message('date', this.state.date, 'required')}

      </div>
      <div className="form-group col-xs-4">
          <label>Amount</label>
          <input className="form-control" type="number" defaultValue={this.state.amount} onChange={this.setAmount} />


          {this.validator.message('amount', this.state.amount, 'required')}

      </div>
      <div className="form-group col-xs-4">
          <label>Review</label>
          <textarea className="form-control" defaultValue={this.state.review} onChange={this.setReview} />


          {this.validator.message('review', this.state.review, 'required|min:5|max:120')}

      </div>
      
        <button className="btn btn-primary" onClick={this.submitForm}>Save Review</button>
      
        
      </div>

    );
  }
}



export default App;
