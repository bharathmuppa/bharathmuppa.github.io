import{L as r,c as a,h as o}from"./d5bd5c63.js";

let e; let t; let i; let s; const n=e=>e;customElements.define("fa-icon",class extends r{static get properties(){return{color:String,iClass:{attribute:"class"},src:String,style:String,size:String,pathPrefix:{attribute:"path-prefix"}}}

static get styles(){return a(e||(e=n`:host{display:inline-block;padding:0;margin:0}:host svg{fill:var(--fa-icon-fill-color,currentcolor);width:var(--fa-icon-width,19px);height:var(--fa-icon-height,19px)}`))}

getSources(e){const t={fas:"solid",far:"regular",fal:"light",fab:"brands",fa:"solid"}; const i=e=>e.replace("fa-","");const s=(e=>{const s=e.split(" ");return[t[s[0]],i(s[1])]})(e);return`${this.pathPrefix}/@fortawesome/fontawesome-free/sprites/${s[0]}.svg#${s[1]}`}

constructor(){super(),this.iClass="",this.src="",this.style="",this.size="",this.color="",this.pathPrefix="node_modules"}

firstUpdated(){this.src=this.getSources(this.iClass)}

_parseStyles(){return`\n      ${this.size?`width: ${this.size};`:""}\n      ${this.size?`height: ${this.size};`:""}\n      ${this.color?`fill: ${this.color};`:""}\n      ${this.style}\n    `}

render(){return o(t||(t=n` <svg .style="${0}"> <use href="${0}"> </use> </svg> `),this._parseStyles(),this.src)}});customElements.define("ec-footer",class extends r{static get properties(){return{title:{type:String},page:{type:String}}}

static get styles(){return a(i||(i=n`.footer{paddng:2rem;height:15vh}.flex-center{width:100%;background:#000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.icon-3d{margin:16px;cursor:pointer}`))}

openMail(){window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bharathmuppa@gmail.com&tf=1","_blank")}

openLinkedin(){window.open("https://www.linkedin.com/in/bharathmuppa/","_blank")}

openTwitter(){window.open("https://twitter.com/myselfbharath","_blank")}

openArticles(){window.open("https://dev.to/bharathmuppa","_blank")}

render(){return o(s||(s=n` <div class="footer flex-center"> <fa-icon class="fab fa-google icon-3d" path-prefix="../node_modules" style="fill:#2980b9;height:3em;width:3em" @click="${0}"></fa-icon> <fa-icon class="fab fa-linkedin icon-3d" path-prefix="../node_modules" style="fill:#2980b9;height:3em;width:3em" @click="${0}"></fa-icon> <fa-icon class="fab fa-twitter icon-3d" path-prefix="../node_modules" style="fill:#2980b9;height:3em;width:3em" @click="${0}"></fa-icon> <fa-icon class="fab fa-dev icon-3d" path-prefix="../node_modules" style="fill:#2980b9;height:3em;width:3em" @click="${0}"></fa-icon> </div> `),this.openMail,this.openLinkedin,this.openTwitter,this.openArticles)}});
