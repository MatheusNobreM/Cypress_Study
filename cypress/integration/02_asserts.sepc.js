/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).not.to.be.equal('b');
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(b).null;
    expect(a).not.null;
    expect(c).to.be.underfined;
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).deep.equal({a:1, b:2})
    expect(obj).eql({a:1, b:2})
    expect(obj).include({a:1}) // só uma propriedade
    expect(obj).to.have.property('b') // propriedades 
    expect(obj).to.have.property('b',2)
    expect(obj).to.not.be.empty
    expect({}).to.be.empty

})

it('Arrays', () => {
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty

})

it('Types', () => {
    const num = 1
    const str = 'Str'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('Sting', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).length(15)
    expect(str).contains('de')
    // usando regex
    expect(str).match(/de/)
    expect(str).match(/String/)
    expect(str).match(/^String/)
    expect(str).match(/teste$/)
    expect(str).match(/.{15}/)
    expect(str).match(/\w+/)
    expect(str).match(/\D+/)

})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.432

    expect(number).equal(4)
    expect(number).above(3)
    expect(number).below(7)
    expect(floatNumber).equal(5.432)
    expect(floatNumber).closeTo(5.4, 0.1)
    expect(floatNumber).above(5)
})

