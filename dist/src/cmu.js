"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
var cmu = function cmu(valor) {
    var _this = this;

    var opciones = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    // Auto instanciación
    if (!(this instanceof cmu)) {
        return new cmu(valor, opciones);
    }

    // Atributos del Prototipo o Clase

    this.valor = parseFloat(valor);

    var opcionesPorDefecto = {
        precision: null,
        agregarUnidad: false,
        unidades: {
            tonelada: "ton",
            kilogramo: "kg",
            libra: "lb",
            onza: "oz",
            gramo: "gr"
        }
    };

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
                kilogramos: function kilogramos() {
                    return construirRespuesta(_this.valor * 1000, _this.opciones.unidades.kilogramo);
                },
                libras: function libras() {
                    return construirRespuesta(_this.valor * _this.tonelada.valorEnGramos / _this.libra.valorEnGramos, _this.opciones.unidades.libra);
                },
                onzas: function onzas() {
                    return construirRespuesta(_this.valor * _this.tonelada.valorEnGramos / _this.onza.valorEnGramos, _this.opciones.unidades.onza);
                },
                gramos: function gramos() {
                    return construirRespuesta(_this.valor * _this.tonelada.valorEnGramos, _this.opciones.unidades.gramo);
                }
            }
        },
        kilogramos: {
            a: {
                toneladas: function toneladas() {
                    return construirRespuesta(_this.valor / 1000, _this.opciones.unidades.tonelada);
                },
                libras: function libras() {
                    return construirRespuesta(_this.valor * _this.kilogramo.valorEnGramos / _this.libra.valorEnGramos, _this.opciones.unidades.libra);
                },
                onzas: function onzas() {
                    return construirRespuesta(_this.valor * _this.kilogramo.valorEnGramos / _this.onza.valorEnGramos, _this.opciones.unidades.onza);
                },
                gramos: function gramos() {
                    return construirRespuesta(_this.valor * _this.kilogramo.valorEnGramos, _this.opciones.unidades.gramo);
                }
            }
        },
        libras: {
            a: {
                toneladas: function toneladas() {
                    return construirRespuesta(_this.valor * _this.libra.valorEnGramos / _this.tonelada.valorEnGramos, _this.opciones.unidades.tonelada);
                },
                kilogramos: function kilogramos() {
                    return construirRespuesta(_this.valor * _this.libra.valorEnGramos / _this.kilogramo.valorEnGramos, _this.opciones.unidades.libra);
                },
                onzas: function onzas() {
                    return construirRespuesta(_this.valor * _this.libra.valorEnGramos / _this.onza.valorEnGramos, _this.opciones.unidades.onza);
                },
                gramos: function gramos() {
                    return construirRespuesta(_this.valor * _this.libra.valorEnGramos, _this.opciones.unidades.gramo);
                }
            }
        },
        onzas: {
            a: {
                toneladas: function toneladas() {
                    return construirRespuesta(_this.valor * _this.onza.valorEnGramos / _this.tonelada.valorEnGramos, _this.opciones.unidades.tonelada);
                },
                kilogramos: function kilogramos() {
                    return construirRespuesta(_this.valor * _this.onza.valorEnGramos / _this.kilogramo.valorEnGramos, _this.opciones.unidades.libra);
                },
                libras: function libras() {
                    return construirRespuesta(_this.valor * _this.onza.valorEnGramos / _this.libra.valorEnGramos, _this.opciones.unidades.onza);
                },
                gramos: function gramos() {
                    return construirRespuesta(_this.valor * _this.onza.valorEnGramos, _this.opciones.unidades.gramo);
                }
            }
        },
        gramos: {
            a: {
                toneladas: function toneladas() {
                    return construirRespuesta(_this.valor / _this.tonelada.valorEnGramos, _this.opciones.unidades.tonelada);
                },
                kilogramos: function kilogramos() {
                    return construirRespuesta(_this.valor / _this.kilogramo.valorEnGramos, _this.opciones.unidades.gramo);
                },
                libras: function libras() {
                    return construirRespuesta(_this.valor / _this.libra.valorEnGramos, _this.opciones.unidades.libra);
                },
                onzas: function onzas() {
                    return construirRespuesta(_this.valor / _this.onza.valorEnGramos, _this.opciones.unidades.onza);
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
    };var construirRespuesta = function construirRespuesta(resultado, unidad) {
        var tmp = resultado;
        if (_this.opciones.precision !== undefined && _this.opciones.precision !== null && (resultado <= 0 || resultado > 1)) {
            tmp = resultado.toFixed(_this.opciones.precision);
        }

        if (_this.opciones.agregarUnidad) {
            tmp += resultado == 1 ? unidad : " " + unidad + "s";
        }
        return tmp;
    };
};

exports.default = cmu;