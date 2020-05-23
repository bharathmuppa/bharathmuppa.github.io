import {  css } from 'lit-element';

const fullBgColor = css`rgba(177, 180, 220, 0.9)`;
const fillColor = css`rgba(69, 83, 255,0.7)`;
const levelCircles = css`#53f`;
const color4 = css`#25ddf5`;

export const skillStyle = css`
      #rating {
        width: 160px;
        height: 160px;
        margin: 24px;
        display: inline-block;
      }

      .progress-bar-bg {
        fill: ${fullBgColor};
      }
      path.progress-bar {
        fill: ${fillColor};
      }
      circle.progress-bar {
        fill: ${levelCircles};
      }
      .progress-label {
        fill: #53f;
        font-style: italic;
        font-weight: bolder;
        text-transform: capitalize;
        font-size: 20px;
        text-anchor: middle;
        dominant-baseline: central;
      }
      path.javascript-bar{
        fill: rgba(0,0,0,0.5);
       }
       circle.javascript-bar{
         fill: rgba(0,0,0,1);
       }
       .javascript-label{
         fill:  rgba(0,0,0,1);
       }
      path.angular-bar{
       fill: rgba(232, 64, 64, 0.7);
      }
      circle.angular-bar{
        fill: rgba(255,0,0,1);
      }
      .angular-label{
        fill: rgba(255,0,0,0.8);
      }
      path.html5-bar{
        fill: rgba(208, 25, 106, 0.7);
       }
       circle.html5-bar{
         fill: rgb(208, 25, 106);
       }
       .html5-label{
         fill: rgba(208, 25, 106, 0.7);
       }
       path.css-bar{
        fill: rgba(19, 12, 241, 0.7);
       }
       circle.css-bar{
         fill: rgb(19, 12, 241);
       }
       .css-label{
         fill: rgba(19, 12, 241, 0.7);
       }
       path.lit-elements-bar{
        fill: rgb(234, 12, 162,0.5);
       }
       circle.lit-elements-bar{
         fill: rgba(234, 12, 162,1);
       }
       .lit-elements-label{
        fill: rgb(234, 12, 162);
       }
       path.node-bar{
        fill: rgb(63, 160, 99);
       }
       circle.node-bar{
         fill:rgb(0,255,0);
       }
       .node-label{
        fill: rgb(63, 160, 99);
       }
       path.python-bar{
        fill: rgba(255, 165, 0, 0.7);
       }
       circle.python-bar{
         fill: rgb(223, 255, 0);
       }
       .python-label{
        fill:  rgb(255, 165, 0);
       }
       path.azure-bar{
        fill: rgba(19, 12, 241, 0.7);
       }
       circle.azure-bar{
        fill: rgba(19, 12, 241,1);
       }
       .azure-label{
        fill: rgba(19, 12, 241, 1);
       }
       path.paradigms-bar{
        fill: rgba(232, 64, 64, 0.7);
       }
       circle.paradigms-bar{
         fill: rgba(255,0,0,1);
       }
       .paradigms-label{
         fill: rgba(255,0,0,0.8);
       }

    `;