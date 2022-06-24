import React from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

export class AxiosExample extends React.Component
{
   constructor()
   {
    super();

    this.state = {

       tdata:[],
       'tname':'',
       'tmobile':''      

     }
     this.updateName = this.updateName.bind(this);
     this.updateMobile = this.updateMobile.bind(this);
     this.updateSubmit = this.updateSubmit.bind(this);
    
   }
   updateName(event)
   {
   
      this.setState({tname:event.target.value});
    
    
       event.preventDefault();
   }
   updateMobile(event)
   {
   
      this.setState({tmobile:event.target.value});
    
    
       event.preventDefault();
   }
   updateSubmit(event)
   {
   
    axios
    .post("http://127.0.0.1:5000/personnel", {
      name: this.state.tname,
      mobile:this.state.tmobile
    })
    .then((response) => {
     // setPost(response.data);
     window.location.href="/";
    });
    
    
       event.preventDefault();
   }
   componentDidMount()
   {
    axios.get('http://127.0.0.1:5000/personnel').then((repos) => {
    
      this.setState({ tdata: repos.data})

      console.log(this.state.tdata)
    });

    }

   render()

   {

       return(

           <div>
               <Link to="/Edit" state="abc">Edit</Link>
               <table border='1'>

               <tbody>
                  <tr><th>Id</th><th>Name</th><th>Mobile</th><th>E</th><th>D</th></tr>
                  {this.state.tdata.map((person,i)=> <TableRow Key={i} data={person} />)}   
                  
                  </tbody>
                  <tbody>
                    <tr><td></td><td><input type="text"  onChange={this.updateName}></input></td><td><input type="text" onChange={this.updateMobile} ></input></td><td><input type="button" name="btnsubmit" value="Insert" onClick={this.updateSubmit} /></td></tr>
                  </tbody>
               </table>
               <h1>Welcome in REST API Implementation in React JS</h1>
           </div>
       )
   }
}


class TableRow extends React.Component
{
    render()
    {
        return(

            <tr>

             

             <td>{this.props.data._id}</td>

             <td>{this.props.data.name}</td>
             <td>{this.props.data.mobile}</td>
             <td><Link to="/Edit" state={this.props.data._id} >Edit</Link></td>
             <td><Link to="/Delete">Delete</Link></td>

            
             

          </tr>
        )
    }
}
