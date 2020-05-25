/* eslint-disable prefer-template */
import { LitElement, html, css } from 'lit-element';
import * as skillColors from '../skill/skill.styles.js';

export class SkillMeter extends LitElement {
  constructor() {
    super();
    this.rating = 0;
    this.name = '';
  }

  static get properties() {
    return {
      name: {
        type: String,
      },
      rating: {
        type: Number,
      },
      color:{
        type: String,
      }, 
    };
  }

  static get styles() {
    return css`
      .meter-container {
        display: flex;
        flex-direction: column;
        margin: 1rem 0 1.5rem 0;
      }
      .meter-container__title {
        font-size: 18px;
      
      }
      .meter-container__display {
        width:0;
        height: 20px;
        border-radius: 0 0 15px;
        border:1px solid grey;
        position:absolute;
        
        transition: all 2s;
        animation-name: example;
        animation-duration: 4s;
    }
    .meter-container__display-wrapper{
        width:100%;
        height: 20px;
        box-shadow: 1px 1px 2px rgba(69, 83, 255,0.7);
        border-radius: 0 0 15px;
        position:relative;
        background : white;
    }
    @keyframes example {
        from {width: 0;}
        to {width: 45%;}
      }
 
    `;
  }

  render() {
    return html` <div class="meter-container">
      <span class="meter-container__title">${this.name}</span>
      <!-- <meter class="meter-container__display"
        style="width: 100%;height:20px;"
        max="100"
        low="25"
        high="75"
        optimum="65"
        value="${this.rating * 10}"
      ></meter> -->
      <div class="meter-container__display-wrapper" >
      <div class="meter-container__display " style="width:${this.rating*10}%;background-color:${this.color}" ></div>
      </div>
    </div>`;
  }
}
