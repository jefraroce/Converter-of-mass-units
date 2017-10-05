# Converter of mass units

Convierte un valor de una de las siguientes unidades de medida de masa (Tonelada, Kilogramo, Libra, Onza, Gramo) en una de las otras.

## Instalación

```javascript
npm install converter-of-mass-units
```

## Uso

```javascript
import cmu from 'cmu';

// Forma mas corta
cmu(1).de.libras.a.onzas();

// Agregando la abreviatura de la medidad
cmu(1, { agregarUnidad: true }).de.libras.a.onzas();

// Agregando precision al resultado
cmu(1, { precision: 1 }).de.libras.a.onzas();

// Otros ejemplos
// 1 kg a toneladas
cmu(1, { agregarUnidad: true }).de.kilogramos.a.toneladas();

// 1 kg a libras
cmu(1, { agregarUnidad: true }).de.kilogramos.a.libras();

// 1 kg a onzas
cmu(1, { agregarUnidad: true }).de.kilogramos.a.onzas();

// 1 kg a gramos
cmu(1, { agregarUnidad: true }).de.kilogramos.a.gramos();


// Instanciación de un nuevo objeto con todas las posibles configuraciones
var custom_cmu = new cmu(5, {
    agregarUnidad: true,
    precision: 2,
    unidades: {
        tonelada: "custom_ton",
        kilogramo: "custom_kg",
        libra: "custom_lb",
        onza: "custom_oz",
        gramo: "custom_gr"
    }
});

custom_cmu.de.libras.a.toneladas();
custom_cmu.de.gramos.a.onzas();
custom_cmu.de.kilogramos.a.onzas();
```

## Créditos
- [Jeisson Rosas](https://twitter.com/jefraroce)

## Licencia

MIT

Copyright 2017 Jeisson Rosas

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.