import { LitElement, html, css } from 'lit-element';

export class Flip extends LitElement {
static get properties(){
    return {
        frontImage:{
            type: String 
        },
        backContent:{
            type: Object
        }
    }
}


  render() {
    return html`
      <div
        class="flip-container"
        @touchstart="${this.classList.toggle('hover')}"
      >
        <div class="flipper">
          <div class="front">
            <span class="name">David Walsh</span>
          </div>
          <div class="back">
            <div class="back-logo"></div>
            <div class="back-title">@davidwalshblog</div>
            <p>
              Mozilla Web Developer, MooTools & jQuery Consultant, MooTools Core
              Developer, Javascript Fanatic, CSS Tinkerer, PHP Hacker, and web
              lover.
            </p>
          </div>
        </div>
      </div>
    `;
  }
}
