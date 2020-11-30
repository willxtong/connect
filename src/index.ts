import { User } from './models/User';

const user = new User({ name: 'John Doe', age: 10 });
user.on('change', () => {});

console.log(user);
