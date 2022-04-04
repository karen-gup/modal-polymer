import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../modal-polymer-app/modal-box'

class ModalPolymerApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background: pink;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          padding: 5px;
        }
       
      </style>
      <h2>Hello!</h2>
      <p>Este es un modal</p>
      <p>[[prop1]]</p>
      <button on-click="doClick">click</button>
      <p>Contador: [[contador]]</p>
      <modal-box id="modal"></modal-box>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Aun no se hace click en modal'
      },
      contador: {
        type: Number,
        value: 0
      }
    };
  }
  doClick(){
    this.prop1 = 'Ya se hizo click'
    this.contador++
    this.$.modal.open()
  }
}

window.customElements.define('modal-polymer-app', ModalPolymerApp);
