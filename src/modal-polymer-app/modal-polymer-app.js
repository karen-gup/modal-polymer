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
      <button on-click="doClick">Abrir modal</button>
      <button on-click="toClick">Abrir modal 2</button>
      <p>Contador: [[contador]]</p>

      <modal-box id="modal">
      <h2>Modal Box con SLOT</h2>
          <p>Este es el contenido del modal...!</p>
          <p>Podemos poner otras lineas de contenido</p>
      </modal-box>
      <modal-box id="modal2">
      <h2>Modal 2 Box con SLOT</h2>
          <p>Este es el contenido del modal 2...!</p>
          <p>Podemos poner otras lineas de contenido</p>
      </modal-box>
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
  toClick(){
    this.$.modal2.open()
  }
}

window.customElements.define('modal-polymer-app', ModalPolymerApp);
