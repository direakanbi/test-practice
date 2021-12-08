const { stringLength, reverseString, capitalize } = require('./index.js');
const mathOperation = require('./functions.js');
const math = new mathOperation(15, 60);

describe('Test for string length', () => {
    const inputString = 'microverse';
    const stringLen = inputString.length;


    describe('Valid test cases', () => {
        it('returns the length of a given string if input string is between 1 and 10', () => {
            expect(stringLength(`${inputString}`)).toBe(stringLen);
        });

        it('returns the length of a given string if input string is between 1 and 10', () => {
            expect(stringLength(`${inputString}`)).not.toBeNull();
        });
        it('returns the length of a given string if input string is between 1 and 10', () => {
            expect(stringLength(`${inputString}`)).toEqual(10);
        });
        it('returns the length of a given string if input string is between 1 and 10', () => {
            expect(typeof stringLength(`${inputString}`) === 'number').toBeTruthy();
        });
        it('returns the length of a given string if input string is between 1 and 10', () => {
            expect(typeof stringLength(`${inputString}`) === 'number').not.toBeFalsy();
        });
    });
});

describe('Reverse string', () => {
    const inputString = 'microverse'

    it('returns reverse of a given string as expected', () => {
    expect(reverseString(`${inputString}`)).toMatch('esrevorcim');
    });

    it('returns reverse of a given string as expected', () => {
    expect(reverseString('')).toMatch('');
    });

    it('returns reverse of a given string as expected', () => {
    expect(reverseString('Hello World')).toMatch('dlroW olleH');
    });
    
});

describe('Capitalize first letter of string', () => {
  it('capitalize the first letter of a given string', () => {
    expect(capitalize('growth')).toMatch('Growth');
  });
  it('capitalize the first letter of a given string', () => {
    expect(capitalize('microVerse')).toMatch('Microverse');
  });
  it('capitalize the first letter of a given string', () => {
    expect(capitalize('microVersE')).toMatch('Microverse');
  });
});

describe('My math function', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(math.sum()).toBe(75);
  });

  it('subtracts 10 - 5 to equal 5', () => {
    expect(math.subtract()).toBe(-45);
  });

  it('multiplies 3 * 5 to equal 15', () => {
    expect(math.multiply()).toBe(900);
  });

  it('divides 15 / 5 to equal 3', () => {
    expect(math.divide()).toBe(0.25);
  });
});