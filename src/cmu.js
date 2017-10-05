"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * Modulo para convertir un valor de una especifica unidad de masa a otra.
 * @author Jeisson Rosas
 */

/**
 * Convierte un valor de una de las siguientes unidades de medida de masa (Tonelada, Kilogramo, Libra, Onza, Gramo) en una de las otras.
 * @param {Number} valor valor a convertir a otro unidad de medida.
 * @param {Object}} opciones de personalización usadas en la respuesta.
 * @return {String|Number}
 */
var cmu = function(valor, opciones = {}) {

    // Auto instanciación
    if (!(this instanceof cmu)) {
        return new cmu(valor, opciones);
    }

    // Atributos del Prototipo o Clase

    this.valor = parseFloat(valor);

    const opcionesPorDefecto = {
        precision: null,
        agregarUnidad: false,
        unidades: {
            tonelada: "ton",
            kilogramo: "kg",
            libra: "lb",
            onza: "oz",
            gramo: "gr"
        }
    }

    this.opciones = Object.assign({}, opcionesPorDefecto, opciones);

    // Creación de unidades
    this.tonelada = { valorEnGramos: 1000000 };
    this.kilogramo = { valorEnGramos: 1000 };
    this.libra = { valorEnGramos: 453.59237 };
    this.onza = { valorEnGramos: 28.349 };
    this.gramo = { valorEnGramos: 1 };

    // Metodos publicos
    this.de = {
        toneladas: {
            a: {
                kilogramos: () => construirRespuesta(this.valor * 1000, this.opciones.unidades.kilogramo),
                libras: () => construirRespuesta(this.valor * this.tonelada.valorEnGramos / this.libra.valorEnGramos, this.opciones.unidades.libra),
                onzas: () => construirRespuesta(this.valor * this.tonelada.valorEnGramos / this.onza.valorEnGramos, this.opciones.unidades.onza),
                gramos: () => construirRespuesta(this.valor * this.tonelada.valorEnGramos, this.opciones.unidades.gramo)
            }
        },
        kilogramos: {
            a: {
                toneladas: () => construirRespuesta(this.valor / 1000, this.opciones.unidades.tonelada),
                libras: () => construirRespuesta(this.valor * this.kilogramo.valorEnGramos / this.libra.valorEnGramos, this.opciones.unidades.libra),
                onzas: () => construirRespuesta(this.valor * this.kilogramo.valorEnGramos / this.onza.valorEnGramos, this.opciones.unidades.onza),
                gramos: () => construirRespuesta(this.valor * this.kilogramo.valorEnGramos, this.opciones.unidades.gramo)
            }
        },
        libras: {
            a: {
                toneladas: () => construirRespuesta(this.valor * this.libra.valorEnGramos / this.tonelada.valorEnGramos, this.opciones.unidades.tonelada),
                kilogramos: () => construirRespuesta(this.valor * this.libra.valorEnGramos / this.kilogramo.valorEnGramos, this.opciones.unidades.libra),
                onzas: () => construirRespuesta(this.valor * this.libra.valorEnGramos / this.onza.valorEnGramos, this.opciones.unidades.onza),
                gramos: () => construirRespuesta(this.valor * this.libra.valorEnGramos, this.opciones.unidades.gramo)
            }
        },
        onzas: {
            a: {
                toneladas: () => construirRespuesta(this.valor * this.onza.valorEnGramos / this.tonelada.valorEnGramos, this.opciones.unidades.tonelada),
                kilogramos: () => construirRespuesta(this.valor * this.onza.valorEnGramos / this.kilogramo.valorEnGramos, this.opciones.unidades.libra),
                libras: () => construirRespuesta(this.valor * this.onza.valorEnGramos / this.libra.valorEnGramos, this.opciones.unidades.onza),
                gramos: () => construirRespuesta(this.valor * this.onza.valorEnGramos, this.opciones.unidades.gramo)
            }
        },
        gramos: {
            a: {
                toneladas: () => construirRespuesta(this.valor / this.tonelada.valorEnGramos, this.opciones.unidades.tonelada),
                kilogramos: () => construirRespuesta(this.valor / this.kilogramo.valorEnGramos, this.opciones.unidades.gramo),
                libras: () => construirRespuesta(this.valor / this.libra.valorEnGramos, this.opciones.unidades.libra),
                onzas: () => construirRespuesta(this.valor / this.onza.valorEnGramos, this.opciones.unidades.onza)
            }
        }
    }

    // Metodos privados

    /**
     * Prepara y construye el formato de respuesta.
     * @param {Number} resultado valor luego de la conversión.
     * @param {String} unidad texto que sera usado como unidad de medida.
     * @return {String|Number}
     */
    const construirRespuesta = (resultado, unidad) => {
        let tmp = resultado;
        if (this.opciones.precision !== undefined && this.opciones.precision !== null && (resultado <= 0 || resultado > 1)) {
            tmp = resultado.toFixed(this.opciones.precision);
        }

        if (this.opciones.agregarUnidad) {
            tmp += resultado == 1 ? unidad : ` ${unidad}s`;
        }
        return tmp;
    }
}

export default cmu;