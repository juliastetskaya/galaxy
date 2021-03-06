import React from 'react';

const MyContext = React.createContext();
const {
  Provider,
  Consumer,
} = MyContext;

export {
  Provider as SwapiServiceProvider,
  Consumer as SwapiServiceConsumer,
};
