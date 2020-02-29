import findBy from '../app.js';

test('find object', () => {
  const array = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const obj = [{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }];

  const finder = findBy('name', 'урон');

  expect(array.filter(finder)).toEqual(obj);
});
