const { getGreeting } = require('./appjs');

test('getGreeting returns the correct greeting', () => {
    expect(getGreeting()).toBe('Hello from CI/CD learning app!\n');
});