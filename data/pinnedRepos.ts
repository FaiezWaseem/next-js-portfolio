export const pinnedRepos: pinnedRepoType[] = [
  {
    image: '/static/images/projects/e-commerce.PNG',
    name: 'E-commerce',
    deployedLink: 'https://my-react-e-commerce.herokuapp.com/',
    stack: ['React', 'boostrap', 'recoilJs'],
    id: 'e-commerce',
    longDescription:
      'A complete MultiVendor E-commerce App build With Modern Technology React Along With the UI Styling Library/framework Boostrap , with State Management Library RecoliJs',
  },
  {
    id: `cloud9infinity`,
    name: `cloud9inifinity`,
    stack: ['React Native', 'firebase'],
    longDescription: `cloud9infinity is an opensource React Native Project , which functions as a cloud Storage Manager . It uses Firebase as a Backend and Save Files on Cloud Through free cloud storage website AnonFiles .`,
  },

  {
    id: `Ride&Share`,
    stack: ['react Native', 'Native Base'],
    name: `Ride & Share`,
    image: '/static/images/projects/rideshare.jpg',
    longDescription: `As the Fuel Prices are reaching All time high  , travaleing has gone really expensive , So here we present Ride&Share A Simple Easy To Use CarPooling App`,
  },
  {
    id: `Video-Point`,
    stack: ['Javascript', 'FireBase'],
    name: `Video Point`,
    deployedLink: 'https://faiezwaseem.github.io/Video-Point/',
    image: '/static/images/projects/videopoint.PNG',
    longDescription: `One Of My First WebApp With Some Backend Tecnologies Like Firebase `,
  },
  {
    image: '/static/images/projects/clubmonaco.PNG',
    name: 'CLUB MONACO',
    deployedLink: 'https://clubmonacosalon.com/',
    stack: ['HTML', 'boostrap', 'PHP'],
    id: 'clubmonaco',
    longDescription: 'A client Project || A Saloon Website for my client',
  },
  {
    image: '/static/images/projects/bannerfoodreciepe.png',
    name: 'Food Reciepe App ui',
    deployedLink: 'https://faiezwaseem.live/',
    stack: ['React Native', 'Native Base', 'expo'],
    id: 'foodreciepe',
    longDescription: 'A food reciepe app made on react native ',
  },
  {
    image: '/static/images/projects/flybnb.png',
    name: 'Flybnb an AirBnb Clone',
    deployedLink: 'https://github.com/FaiezWaseem/flybnb',
    stack: ['React Native',  'Php' , 'Mysql'],
    id: 'flybnb',
    longDescription: 'Flybnb an AirBnb Clone app made on react native and Php Mysql',
  },
  {
    image: '/static/images/projects/burgerlab.png',
    name: 'BurgerLab Clone',
    deployedLink: 'https://github.com/FaiezWaseem/flybnb',
    stack: ['React Native',  'Firebase', 'expo'],
    id: 'burgerlab',
    longDescription: 'BurgerLab made on react native and Firebase',
  },
];

export interface pinnedRepoType {
  id: string;
  name: string;
  image?: string;
  deployedLink?: string;
  longDescription: string;
  stack?: string[];
}
