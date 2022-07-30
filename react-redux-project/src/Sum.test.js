import Sum from "./Sum";


// Unit testing using jest
//------------------------

describe('Test Sum functionality', () => {

  beforeAll(() => {
    console.log('Before all executed')
  })
  
  beforeEach(() => {
    console.log('Before each executed')
  })
  

  // -- Test case 1 --
  test('Test 5 + 5 = 10', () => {

    expect(Sum(5,5)).toBe(10);
  })

  // -- Test case 2 --
  test('Test 5 + 0 = 5', () => {

    expect(Sum(5,0)).toBe(5);
  })

  // -- Test case 3 --
  test('Test 0 + 0 = 0', () => {

    expect(Sum(0,0)).toBe(0);
  })


  afterAll(() => {
    console.log('After all executed')
  })
  
  afterEach(() => {
    console.log('After each executed')
  })
  
})