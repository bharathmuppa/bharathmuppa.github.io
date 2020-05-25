/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit-element';
import '../shared/stripes/stripes.js';
import '../shared/menu/menu.js';

export class Header extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      subTitle: { type: String },
      description: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
      #header {
        position: relative;
        width: 100%;
        display: block;
        height: 70vh;
      }
      .introduction {
        position: absolute;
        top: 0;
        height: 500px;
        color: #fff;
        padding: 8px 16px;
      }
      .menu {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100px;
        color: #fff;
        display: flex;
        justify-content: flex-end;
        padding: 8px 16px;
      }

      .introduction h1 {
        font-size: 32px;
      }
      .introduction h3 {
        font-size: 32px;
      }
      .life-style {
        width: 400px;
        height: auto;
        position: absolute;
        left: 40vw;
        bottom: -15px;
        border-radius: 8px;
        box-shadow: 6px 6px rgba(116, 235, 251, 0.6);
        z-index: 1;
        color: #fff;
        padding: 8px 16px;
        background: #4553ff;
      }
      .life-style h3 .sub-title {
        font-size: 18px;
        line-height: 28px;
        color: #fff;
      }
      .life-style h3 .description {
        font-size: 16px;
        font-style: italic;
        line-height: 28px;
        color: rgb(217, 252, 255);
      }
      .sticky {
        position: fixed;
        top: 0;
        width: 100%;
      }
      .sticky + .content {
        padding-top: 102px;
      }
      @media only screen and (max-width: 600px) {
        .life-style{
          width: 90vw;
          left:5vw;
          right:5vw;
          box-sizing: border-box;
        }
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Bharath Muppa';
    this.subTitle = 'I am a Full Stack Web Developer';
    this.description =
      'Who lives in world of computer science and engineering. I always feel electrified to be part of digital cognition.';
  }

  render() {
    return html`
      <!-- Header -->

      <header id="header">
        <ec-stripes></ec-stripes>
        <ec-menu class="menu"></ec-menu>
        <div class="introduction">
          <h1>${this.title}</h1>
        </div>
        <div class="life-style">
          <h3>
            <b class="sub-title"><blockquote>${this.subTitle}</blockquote></b>
            <blockquote class="description">${this.description}</blockquote>
          </h3>
        </div>
      </header>
    `;
  }

  scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById('header').style.fontSize = '30px';
    } else {
      document.getElementById('header').style.fontSize = '90px';
    }
  }
}
