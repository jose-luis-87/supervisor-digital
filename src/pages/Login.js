import React, { Component } from 'react';
import axios from 'axios';
import Logo from '../components/Logo'
import Edificio from '../components/Edificio';


const baseurl = "http://localhost:3002/usuarios";



export default class Login extends Component {
     state={
          form:{
               username:'',
               password:''
          }
     }

     handleChange=async e=>{
          await this.setState({
               form:{
                    ...this.state.form,
                    [e.target.name]: e.target.value
               }
          })
          
     }

     iniciarSesion=async()=>{
          await axios.get(baseurl, {params: {username: this.state.form.username, password: this.state.form.password}})
          .then(response=>{
               console.log(response.data);
          })
          .catch(error=>{
               console.log(error);
          })

     }
     
     render() {
          return (
               <div>
                  <div className="containerForm">
                       <div className="columGraphic">
                            <Logo width={160}/>
                            <Edificio width={400} opacity={0.2}/>
                       </div>
                       <div className="columForm">
                              <form>
                                   <label>Usuario: </label>
                                   <br/>
                                   <input
                                        type="text"
                                        className="inputform"
                                        name="username"
                                        onChange={this.handleChange}
                                   />
                                   <br/>
                                   <label>Contraseña: </label>
                                   <br/>
                                   <input
                                        type="password"
                                        className="inputform"
                                        name="password"
                                        onChange={this.handleChange}
                                   />
                                   <div className="containerBtn">
                                        <p>¿Olvidaste tu contraseña?</p>
                                        <button className="btnSesion" onClick={()=> this.iniciarSesion()}>Iniciar sesión</button> 
                                   </div>
                                   
                              </form>
                       </div>
                  </div>
                   
                  
 
                    
               </div>
          )
     }
}
