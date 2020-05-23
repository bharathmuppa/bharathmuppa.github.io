import { LitElement, html, css } from 'lit-element';
import 'fa-icons';

export class Footer extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
      .footer {
        paddng: 2rem;
        height: 15vh;
      }

      .flex-center {
        width: 100%;
        background: #000;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .icon-3d {
        margin: 16px;
        cursor: pointer;
      }
    `;
  }

  openMail() {
    window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bharathmuppa@gmail.com&tf=1', '_blank');
  }

  openLinkedin() {
    window.open('https://www.linkedin.com/in/bharathmuppa/', '_blank');
  }

  openTwitter() {
    window.open('https://twitter.com/myselfbharath', '_blank');
  }

  openArticles() {
    window.open('https://dev.to/bharathmuppa', '_blank');
  }

  render() {
    return html`
      <div class="footer flex-center">
        <fa-icon
          class="fab fa-google icon-3d"
          src="../src/assets/brands.svg"
          style="fill: #2980B9;height: 3em;width: 3em;"
          path-prefix="../sr/assets"
          @click="${this.openMail}"
        ></fa-icon>
        <fa-icon
          class="fab fa-linkedin icon-3d"
          src="../src/assets/brands.svg"
          path-prefix="../sr/assets"
          style="fill: #2980B9;height: 3em;width: 3em; "
          @click="${this.openLinkedin}"
        ></fa-icon>
        <fa-icon
          class="fab fa-twitter icon-3d"
          src="../src/assets/brands.svg"
          path-prefix="../sr/assets"
          style="fill: #2980B9;height: 3em;width: 3em;"
          @click="${this.openTwitter}"
        ></fa-icon>
        <fa-icon
          class="fab fa-dev icon-3d"
          src="../src/assets/brands.svg"
          path-prefix="../sr/assets"
          style="fill: #2980B9;height: 3em;width: 3em;"
          @click="${this.openArticles}"
        ></fa-icon>
      </div>
    `;
  }
}
