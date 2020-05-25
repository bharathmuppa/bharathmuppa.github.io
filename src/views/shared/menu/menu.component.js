/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit-element';

export class Menu extends LitElement {
  static get properties() {
    return {
      isActive: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.isActive = false;
  }

  static get styles() {
    return css`
      .menu--desktop {
        display: table; /* Allow the centering to work */
      }
      ul.horizontal-list--desktop {
        display: flex;
        list-style: none;
        padding-top: 20px;
      }
      ul.horizontal-list--desktop li {
        display: inline;
        font-size: 1.2rem;
        margin-right: 16px;
      }
      ul.horizontal-list--desktop li:hover {
        color: hsla(0, 0%, 100%, 0.5);
        cursor: pointer;
      }
      .menu--mobile,
      .horizontal-list--mobile {
        display: none;
      }
      @media only screen and (max-width: 800px) {
        .menu--desktop {
          display: none !important;
        }
        .menu--mobile {
          display: inline-block;
          width: 150px;
          border-radius: 50%;
          height: 150px;
          position: fixed;
          background: white;
          z-index: 10;
          top: -100px;
          right: -100px;
        }

        .bars,.close{
          display:none;
        }
        .bars.active {
          display:inline-block;
      
          width: 2em;
          position: absolute;
          top: 100px;
          right: 100px;
          padding: 8px;
        }
        .close.active {
          display:inline-block;
          transition: all 1s;
          width: 2em;
          position: absolute;
          top: 100px;
          right: 100px;
          padding: 8px;
        }

        .horizontal-list--mobile {
          transition: top 0.5s;
          transition: right 0.5s;
          position: fixed;
          z-index: 8;
          width: calc(100vw);
          height: calc(100vw);
          border-radius: 50%;
          top: calc(-100vw);
          right: calc(-100vw);
          border-shadow: 1px 1px 12px black;
          display: flex;
          flex-direction: column;
          list-style: none;
          padding: 20px;
          background: white;
          box-shadow: 1px 1px 16px rgb(85, 51, 255);
        }
        .horizontal-list--mobile span {
          top: calc(-100vw);
        }

        .horizontal-list--mobile.active {
          top: calc(-100vw / 2);
          right: calc(-100vw / 2);
        }
        ul.horizontal-list--desktop li {
          display: inline;
          font-size: 1.2rem;
          margin-right: 16px;
        }
        .horizontal-list--mobile span {
          position: fixed;
          font-size: 1.2rem;
          display: inline-block;
          color: rgb(85, 51, 255);
          font-weight: bolder;
          cursor: pointer;
          transition: top ease-in 1s;
        }
        .horizontal-list--mobile.active span:nth-child(1) {
          top: 2vh;
          left: calc(50vw);
        }

        .horizontal-list--mobile.active span:nth-child(2) {
          top: 8vh;
          left: calc(54vw);
        }
        .horizontal-list--mobile.active span:nth-child(3) {
          top: 14vh;
          left: calc(58vw);
        }
        .horizontal-list--mobile.active span:nth-child(4) {
          top: 20vh;
          left: calc(62vw);
        }
      }
    `;
  }

  navigateToAboutMe() {
    this.isActive = false;
    document.querySelector('#about-me').scrollIntoView({
      behavior: 'smooth',
    });
  }

  navigateToSkills() {
    this.isActive = false;
    document.querySelector('#skills').scrollIntoView({
      behavior: 'smooth',
    });
  }

  navigateToArticles() {
    this.isActive = false;
    document.querySelector('#articles').scrollIntoView({
      behavior: 'smooth',
    });
  }

  navigateToMusings() {
    this.isActive = false;
    document.querySelector('#musings').scrollIntoView({
      behavior: 'smooth',
    });
  }

  toggleClass() {
    this.isActive = !this.isActive;
  }

  render() {
    return html`<nav class="menu--desktop">
        <ul class="horizontal-list--desktop">
          <li @click="${this.navigateToAboutMe}">
            AboutMe
          </li>
          <li @click="${this.navigateToSkills}">
            Skills
          </li>
          <li @click="${this.navigateToArticles}">
            Articles
          </li>
          <li @click="${this.navigateToMusings}">
            Musings
          </li>
        </ul>
      </nav>
      <span class="menu--mobile ${this.isActive ? 'active' : ''}">
        <img
          src="../src/assets/images/svg/bars-solid.svg"
          class="bars ${!this.isActive ? 'active' : ''}"
          alt="repos"
          @click="${this.toggleClass}"
        />
        <img
          src="../src/assets/images/svg/times.svg"
          class="close ${this.isActive ? 'active' : ''}"
          alt="repos"
          @click="${this.toggleClass}"
        />
      </span>
      <div class="horizontal-list--mobile ${this.isActive ? 'active' : ''}">
        <span @click="${this.navigateToAboutMe}">
          AboutMe
        </span>
        <span @click="${this.navigateToSkills}">
          Skills
        </span>
        <span @click="${this.navigateToArticles}">
          Articles
        </span>
        <span @click="${this.navigateToMusings}">
          Musings
        </span>
      </div>`;
  }
}
