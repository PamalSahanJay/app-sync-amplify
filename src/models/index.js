// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Book, Order } = initSchema(schema);

export {
  Book,
  Order
};