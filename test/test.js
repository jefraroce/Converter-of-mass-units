const expect = require('chai').expect;
const cmu = require('..').default;

describe('#cmu', function() {
    it('de toneladas a libras con unidad', function() {
        const resultado = cmu(1, { agregarUnidad: true }).de.toneladas.a.libras();
        expect(resultado).to.equal('2204.622621848776 lbs');
    });

    it('de libras a onzas con precision de 1', function() {
        const resultado = cmu(1, { precision: 1 }).de.kilogramos.a.onzas();
        expect(resultado).to.equal('35.3');
    });

    describe('de toneladas a ', function() {
        it('kilogramos', function() {
            const resultado = cmu(1).de.toneladas.a.kilogramos();
            expect(resultado).to.equal(1000);
        });

        it('libras', function() {
            const resultado = cmu(1).de.toneladas.a.libras();
            expect(resultado).to.equal(2204.622621848776);
        });

        it('onzas', function() {
            const resultado = cmu(1).de.toneladas.a.onzas();
            expect(resultado).to.equal(35274.612861123846);
        });

        it('gramos', function() {
            const resultado = cmu(1).de.toneladas.a.gramos();
            expect(resultado).to.equal(1000000);
        });
    });

    describe('de kilogramos a ', function() {
        it('toneladas', function() {
            const resultado = cmu(1).de.kilogramos.a.toneladas();
            expect(resultado).to.equal(0.001);
        });

        it('libras', function() {
            const resultado = cmu(1).de.kilogramos.a.libras();
            expect(resultado).to.equal(2.2046226218487757);
        });

        it('onzas', function() {
            const resultado = cmu(1).de.kilogramos.a.onzas();
            expect(resultado).to.equal(35.27461286112385);
        });

        it('gramos', function() {
            const resultado = cmu(1).de.kilogramos.a.gramos();
            expect(resultado).to.equal(1000);
        });
    });

    describe('de libras a ', function() {
        it('toneladas', function() {
            const resultado = cmu(1).de.libras.a.toneladas();
            expect(resultado).to.equal(0.00045359237000000004);
        });

        it('kilogramos', function() {
            const resultado = cmu(1).de.libras.a.kilogramos();
            expect(resultado).to.equal(0.45359237);
        });

        it('onzas', function() {
            const resultado = cmu(1).de.libras.a.onzas();
            expect(resultado).to.equal(16.000295248509648);
        });

        it('gramos', function() {
            const resultado = cmu(1).de.libras.a.gramos();
            expect(resultado).to.equal(453.59237);
        });
    });

    describe('de gramos a ', function() {
        it('toneladas', function() {
            const resultado = cmu(1).de.gramos.a.toneladas();
            expect(resultado).to.equal(0.000001);
        });

        it('kilogramos', function() {
            const resultado = cmu(1).de.gramos.a.kilogramos();
            expect(resultado).to.equal(0.001);
        });

        it('libras', function() {
            const resultado = cmu(1).de.gramos.a.libras();
            expect(resultado).to.equal(0.002204622621848776);
        });

        it('onzas', function() {
            const resultado = cmu(1).de.gramos.a.onzas();
            expect(resultado).to.equal(0.03527461286112385);
        });
    });
});