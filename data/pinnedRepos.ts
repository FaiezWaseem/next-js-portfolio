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
];

export interface pinnedRepoType {
  id: string;
  name: string;
  image?: string;
  deployedLink?: string;
  longDescription: string;
  stack?: string[];
}
