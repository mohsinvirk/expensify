const generateGreeting = (name) => `Hello ${name}`;

test(`Should Generate Greeting`, () => {
    const result = generateGreeting('Mohsin');
    expect(result).toBe(`Hello Mohsin`)
})