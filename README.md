# Converter of mass units

Convierte un valor de una de las siguientes unidades de medida de masa (Tonelada, Kilogramo, Libra, Onza, Gramo) en una de las otras.

## Instalación

```
npm install converter-of-mass-units
```

## Uso

```
import cmu from 'converter-of-mass-units'

// 1 kg a toneladas
cmu(1, { agregarUnidad: true }).de.kilogramos.a.toneladas();

// 1 kg a libras
cmu(1, { agregarUnidad: true }).de.kilogramos.a.libras();

// 1 kg a onzas
cmu(1, { agregarUnidad: true }).de.kilogramos.a.onzas();

// 1 kg a gramos
cmu(1, { agregarUnidad: true }).de.kilogramos.a.gramos();

// Instanciación de un nuevo objeto
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

[MIT](https://opensource.org/licenses/MIT)