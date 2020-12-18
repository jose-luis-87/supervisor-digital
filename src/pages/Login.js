import React, { Component } from 'react';
import axios from 'axios';
import Logo from '../components/Logo'
import Edificio from '../components/Edificio';


const baseurl = "http://localhost:3002/usuarios";



export default class Login extends Component {
     
     render() {

          function GotoLink (url) {
               window.location.href = url;
           }
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
                                        placeholder="Ingresa un usuario"
                                        //onChange={this.handleChange}
                                   />
                                   <br/>
                                   <label>Contraseña: </label>
                                   <br/>
                                   <input
                                        type="password"
                                        className="inputform"
                                        name="password"
                                        placeholder="Ingresa una contraseña"
                                        //onChange={this.handleChange}
                                   />
                                   <div className="containerBtn">
                                        <p>¿Olvidaste tu contraseña?</p>
                                        <button className="btnSesion" onClick={()=>  GotoLink('/home')}>Iniciar sesión</button> 
                                   </div>
                                   
                              </form>
                       </div>
                  </div>
                   
                  
 
                    
               </div>
          )
     }
}
