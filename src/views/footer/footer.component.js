/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit-element';

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
        width: 3em;
      }
     
    `;
  }

  openMail() {
    window.open(
      'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bharathmuppa@gmail.com&tf=1',
      '_blank'
    );
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
  
  openGithub() {
    window.open('https://github.com/bharathmuppa', '_blank');
  }
  downloadResume(){
    var link = document.createElement("a");
    // If you don't know the name or want to use
    // the webserver default set name = ''
    link.setAttribute('download', "BharathMuppa_CV.pdf");
    link.href = "./src/assets/BharathMuppa_CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  render() {
    return html`
      <div class="footer flex-center">
        <img
          src="../src/assets/images/social/google.svg"
          class="icon-3d"
          alt="Mail"
          @click="${this.openMail}"
        />
        <img
          src="../src/assets/images/social/linkedin-in.svg"
          class="icon-3d"
          alt="Linkedin"
          @click="${this.openLinkedin}"
        />
        <img
          src="../src/assets/images/social/twitter.svg"
          class="icon-3d"
          alt="Twitter, views are my own"
          @click="${this.openTwitter}"
        />
        <img
          src="../src/assets/images/social/dev.svg"
          class="icon-3d"
          alt="Hobbies"
          @click="${this.openArticles}"
        />
        <img
          src="../src/assets/images/social/github.svg"
          class="icon-3d"
          alt="repos"
          @click="${this.openGithub}"
        />
        <img
        src="../src/assets/images/social/resume.svg"
        class="icon-3d"
        alt="repos"
        @click="${this.downloadResume}"
      />
      </div>
    `;
  }
}
