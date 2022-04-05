import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

export class ModalBox extends PolymerElement {
  static get template() {
    return html`
      <style>
    
        div {
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            width:100vw;
            background-color: rgba(30,30,30, 0.8);
            transition: opacity 0.3s ease-in;
        }
        section {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 500px;
            height: 300px;
            background-color: #fff;
            box-shadow: 6px 6px 16px #000;
            border-radius: 10px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
        article {
            box-sizing: border-box;
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            padding: 20px;
            margin: 2px;
        }
        span{
            position: absolute;
            top: 10px;
            right:20px;
        }
        .trasparent {
            opacity:0;
        }
        .opaque {
            opacity: 1;
        }
        .closed {
            display: none;
        }

        .material-icons {
          font-family: "Material Icons";
          font-weight: normal;
          font-style: normal;
          font-size: 24px; /* Preferred icon size */
          display: inline-block;
          line-height: 1;
          text-transform: none;
          letter-spacing: normal;
          word-wrap: normal;
          white-space: nowrap;
          direction: ltr;
          color: red;
          margin:5px;
        }
      </style>
      <div  class$="[[modalClass]]"> </div>
      <section on-click="close" class$="[[modalClass]]">
        <span  class="material-icons"> close </span>
        <article>
          <slot></slot>
        </article>
      </section>
    
    `;
  }
  static get properties () {
      return {
      opened: {
          type: Boolean,
          value: false
      },
      modalClass: {
          type: String,
          computed: 'getModalClass(opened)'
      }
    }
  }
  getModalClass(opened){
      if(opened){
          return '';
      }
      return 'closed'
  }
  open(){
      this.opened= true;
  }
  close() {
      this.opened= false;
  }
}

window.customElements.define("modal-box", ModalBox);
