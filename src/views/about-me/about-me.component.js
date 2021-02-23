import { LitElement, html, css } from 'lit-element';

export class AboutMe extends LitElement {
  static get styles() {
    return css`
      #description {
        line-height: 42px;
        letter-spacing: 1.5px;
        padding: 56px;
        font-size: 24px;
        color: rgb(82, 95, 127);
        display: flex;
        justify-content: center;
      }
      #description span {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 80%;
        font-style: italic;
      }
      #description span b {
        font-style: normal;
      }

      @media only screen and (max-width:600px) {
        #description {
          padding: 0;
          font-size: 18px;
          margin-top: 3rem;
        }
      }
    `;
  }

  render() {
    return html`
      <article id="description">
          <span>
          I would like to introduce myself as <b>Full stack web developer</b>, with more
        than <b>${new Date().getFullYear()-new Date(2013,12,23).getFullYear()}</b> years of experience in software development. I have immense
        pleasure in working on complex tasks and designs for web and mobile
        project. I love working with people who are erudites, love to share
        knowledge and provides positive criticism.
        <b>Programing paradigms</b>, <b>Design patterns</b>,
        <b>anti-patterns</b>, <b>Computer Network</b>, <b>Quantum Computing</b> are my favorite
        topics in computer science. Without much ado i would like you to check
        my skills.
        <span>
      </article>
    `;
  }
}
