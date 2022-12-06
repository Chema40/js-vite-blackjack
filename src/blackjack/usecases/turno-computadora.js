 import { pedirCarta } from './pedir-carta';
 import { valorCarta } from './valor-carta';
 import { crearCartaHTML } from './crear-carta-html';

 /**
  * turno de la computadora
  * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar
  * @param {HTMLElement} puntosHTML HTML para mostrar puntos
  * @param {HTMLElement} divCartasComputadora HTML para mostrar las cartas
  * @param {Array<string>} deck 
  */
 
 export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora , deck = []) => {

    if(!puntosMinimos) throw new Error('puntosMinimos es necesario');
    if(!deck) throw new Error('El deck es necesario');
    if(!puntosHTML) throw new Error('Son necesarios');

    let puntosComputadora = 0;
 
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}