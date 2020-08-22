import data from '../data/emails.json';

const { messages } = data;

test('there is a json file ready to be used', () => {
  expect(messages).toBeDefined();
  expect(messages).not.toBeNaN();
});

test('the first email in the json has the correct structure', () => {
  expect(messages[0]).toHaveProperty('id');
  expect(messages[0]).toHaveProperty('subject');
  expect(messages[0]).toHaveProperty('sender');
  expect(messages[0]).toHaveProperty('body');
});
