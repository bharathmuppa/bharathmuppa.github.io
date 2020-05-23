import { LitElement, html, css } from 'lit-element';
import '../about-me/about-me.js';
import '../skills/skills.js';
import '../articles/articles.js';
import '../pet-projects/pet-projects.js';
import '../musings/musings.js';
import '../hill/hill.js';

export class Body extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
      
    `;
  }

  render() {
    return html`
      <ec-about-me id="about-me">
      </ec-about-me>
      <ec-skills id="skills"></ec-skills>
      <ec-articles id="articles"></ec-articles>
      <!-- <ec-pet-projects id="pet-projects"></ec-pet-projects> -->
      <ec-musings id="musings"></ec-musings>
      <ec-hill></ec-hill>
    `;
  }

  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like 
     * encapsulated CSS and slots are unavailable.
     */
      return this;
    }
}
