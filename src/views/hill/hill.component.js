import { LitElement, html, css } from 'lit-element';

export class Hill extends LitElement {
  static get styles() {
    return css`
      .hill {
        width: 100%;
        min-height: 40vh;
        background-size: 400px;
        background-image: url('./src/assets/images/hanging/hill.png');
        background-position: bottom right;
        background-repeat: no-repeat;
        display: flex;
        flex-flow: column-reverse;
        padding: 8px;
      }
      h1 {
        text-transform: capitalize;
        font-size: xx-large;
        color: lightgray;
        width:60%;
        font-family: monospace;
        overflow: hidden;
        white-space: no-wrap;
        letter-spacing: 0.15em; /* Adjust as needed */
      }
      blockquote {
        margin: 1.5em 10px;
        padding: 0.5em 10px;
      }
      blockquote:before {
        color: #ccc;
        content: open-quote;
        font-size: 4em;
        line-height: 0.1em;
        margin-right: 0.25em;
        vertical-align: -0.4em;
      }
      blockquote:after {
        content: '\.';
        animation: blink-caret 5s  infinite;
      }

      /* The typing effect */
      @keyframes typing {
        from {
          width: 0;
        }
        to {
          width: 60vw;
        }
      }

      /* The typewriter cursor effect */
      @keyframes blink-caret {
        from,
        to {
          color: orange;
          content: '\.';
        }
        50% {
          color: transparent;
          content: '\.\.\.';
        }
      }
      @media only screen and (min-width:1300px) {
        .hill {
            background-size: contain;
          }
      }
      @media only screen and (max-width: 400px) {
        .hill{
          flex-flow: column;
          width: 100%;
          min-height: 50vh;      
        }
        .hill h1 {
          font-size: 18px;
          width: 100%;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="hill">
        <h1>
          <blockquote>
            every Mountain top is within Reach, if you just keep climbing
          </blockquote>
        </h1>
      </div>
    `;
  }
}
