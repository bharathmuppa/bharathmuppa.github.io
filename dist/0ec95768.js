import{c as p,L as h,h as u}from"./d5bd5c63.js";

let e; let t; let i; let o; let s; let n; let r; let l; let a; let d; const c=e=>e;const g=p(e||(e=c`#53f`)); const f=p(t||(t=c`#4553ff`)); const b=p(i||(i=c`#4f40ff`));p(o||(o=c`#25ddf5`));customElements.define("ec-stripes",class extends h{constructor(){super()}

static get styles(){return p(s||(s=c`#slanted-bg{width:100%;height:100%;overflow:hidden;-webkit-transform:skewY(-4deg);transform:skewY(-4deg);-webkit-transform-origin:0;transform-origin:0;background:linear-gradient(150deg,#53f 15%,#05d5ff 70%,#25ddf5 94%);top:-5px;position:relative}div#slanted-bg span{position:absolute}span:nth-child(1){background:${0};left:0;height:190px;width:33%;border-radius:16px;z-index:2}span:nth-child(2){left:30%;height:160px;background:${0};width:25%;border-radius:16px;z-index:1}span:nth-child(3){left:80%;height:150px;background:${0};width:0%;border-radius:0}span:nth-child(4){height:69px;transform:skew(-4deg);width:200px;border-radius:12px;background:linear-gradient(150deg,#53f 15%,#05d5ff 70%,#25ddf5 94%);bottom:-48px;right:0;border:10px solid #fff}span:nth-child(5){height:180px;border-radius:12px;transform:skew(4deg);bottom:-48px;right:0}.bgImg{border:10px solid #fff;width:130px;background-position:right;background-image:url(src/assets/mine.png);background-repeat:no-repeat}`),g,f,b)}

render(){return u(n||(n=c` <div id="slanted-bg" aria-hidden="true"> <span></span> <span></span> <span></span> <span></span> <span class="bgImg"></span> </div> `))}});customElements.define("ec-menu",class extends h{static get styles(){return p(r||(r=c`.table{display:table;margin:0 auto}ul.horizontal-list{display:flex;list-style:none;padding-top:20px}ul.horizontal-list li{display:inline;font-size:1.2rem;margin-right:16px}ul.horizontal-list li:hover{color:hsla(0,0%,100%,.5);cursor:pointer}`))}

constructor(){super()}

navigateToAboutMe(){document.querySelector("#about-me").scrollIntoView({behavior:"smooth"})}

navigateToSkills(){document.querySelector("#skills").scrollIntoView({behavior:"smooth"})}

navigateToArticles(){document.querySelector("#articles").scrollIntoView({behavior:"smooth"})}

navigateToMusings(){document.querySelector("#musings").scrollIntoView({behavior:"smooth"})}

render(){return u(l||(l=c`<nav id="table"> <ul class="horizontal-list"> <li @click="${0}"> AboutMe </li> <li @click="${0}"> Skills </li> <li @click="${0}"> Articles </li> <li @click="${0}"> Musings </li> </ul> </nav> `),this.navigateToAboutMe,this.navigateToSkills,this.navigateToArticles,this.navigateToMusings)}});customElements.define("ec-header",class extends h{static get properties(){return{title:{type:String},subTitle:{type:String},description:{type:String},page:{type:String}}}

static get styles(){return p(a||(a=c`#header{position:relative;width:100%;display:block;height:70vh}.introduction{position:absolute;top:0;height:500px;color:#fff;padding:8px 16px}.menu{position:absolute;top:0;right:0;width:100%;height:100px;color:#fff;display:flex;justify-content:flex-end;padding:8px 16px}.introduction h1{font-size:32px}.introduction h3{font-size:32px}.life-style{width:400px;height:auto;position:absolute;left:40vw;bottom:-15px;border-radius:8px;box-shadow:6px 6px rgba(116,235,251,.6);z-index:1;color:#fff;padding:8px 16px;background:#4553ff}.life-style h3 .sub-title{font-size:18px;line-height:28px;color:#fff}.life-style h3 .description{font-size:16px;font-style:italic;line-height:28px;color:#d9fcff}.sticky{position:fixed;top:0;width:100%}.sticky+.content{padding-top:102px}`))}

constructor(){super(),this.title="Bharath Muppa",this.subTitle="I am a Full Stack Web Developer",this.description="Who lives in world of computer science and engineering. I always feel electrified to be part of digital cognition."}

render(){return u(d||(d=c` <header id="header"> <ec-stripes></ec-stripes> <ec-menu class="menu"></ec-menu> <div class="introduction"> <h1>${0}</h1> </div> <div class="life-style"> <h3> <b class="sub-title"><blockquote>${0}</blockquote></b> <blockquote class="description">${0}</blockquote> </h3> </div> </header> `),this.title,this.subTitle,this.description)}

scrollFunction(){document.body.scrollTop>50||document.documentElement.scrollTop>50?document.getElementById("header").style.fontSize="30px":document.getElementById("header").style.fontSize="90px"}});
