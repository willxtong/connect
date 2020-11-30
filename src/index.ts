import { User } from './models/User';

const user = new User({ name: 'John Doe', age: 10 });
user.set({ name: 'Jane Doe' });
user.set({ age: 15 });
