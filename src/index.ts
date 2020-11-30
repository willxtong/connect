import { User } from './models/User';

const user = new User({ name: 'John Doe', age: 10 });
user.on('change', () => {
  console.log('change1');
});
user.on('change', () => {
  console.log('change2');
});
user.on('save', () => {
  console.log('save');
});

user.trigger('save');
