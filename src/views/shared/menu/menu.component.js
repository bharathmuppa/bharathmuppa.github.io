/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit-element';

export class Menu extends LitElement {
  static get styles() {
    return css`
      .table {
        display: table; /* Allow the centering to work */
        margin: 0 auto;
      }
      ul.horizontal-list {
        display: flex;
        list-style: none;
        padding-top: 20px;
      }
      ul.horizontal-list li {
        display: inline;
        font-size:1.2rem;
        margin-right:16px;
   
      }
      ul.horizontal-list li:hover{
        color: hsla(0,0%,100%,.5);
        cursor: pointer;
      }
    `;
  }


  navigateToAboutMe(){
    document.querySelector('#about-me').scrollIntoView({ 
        behavior: 'smooth' 
      });
  }

  navigateToSkills(){
    document.querySelector('#skills').scrollIntoView({ 
        behavior: 'smooth' 
      });
  }

  navigateToArticles(){
    document.querySelector('#articles').scrollIntoView({ 
        behavior: 'smooth' 
      });
  }

  navigateToMusings(){
    document.querySelector('#musings').scrollIntoView({ 
        behavior: 'smooth' 
      });
  }

  render() {
    return html`<nav id="table">
      <ul class="horizontal-list">
        <li @click="${this.navigateToAboutMe}">         
          AboutMe
        </li>
        <li  @click="${this.navigateToSkills}">
          Skills
        </li>
        <li @click="${this.navigateToArticles}">
          Articles
        </li>
        <li @click="${this.navigateToMusings}">
          Musings
        </li>
      </ul>
    </nav> `;
  }
}
