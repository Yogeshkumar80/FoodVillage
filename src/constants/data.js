import images from './images';

const wines = [
  {
    title: 'Margherita Pizza	',
    price: 'Rs.99/-	',
    tags: 'AU | Regular',
  },
  {
    title: 'Cheese n Corn Pizza	',
    price: 'Rs 169/-',
    tags: 'AU | Regular',
  },
  {
    title: 'Fresh Veggie Pizza	',
    price: 'Rs.339',
    tags: 'AU | Medium ',
  },
  {
    title: 'Farmhouse Pizza	',
    price: 'Rs.599/-',
    tags: 'AU | Large',
  },
  {
    title: 'Veggie Paradise Pizza	',
    price: 'Rs.599/-',
    tags: 'AU | Large',
  },
];

const cocktails = [
  {
    title: 'Malai Chaap Tikka',
    price: 'Rs.100/-',
    tags: 'Half',
  },
  {
    title: "Afghani Chaap Tikka",
    price: 'Rs.100/-',
    tags: 'Half',
  },
  {
    title: 'Tandoori Chaap Tikka',
    price: 'Rs.190/-',
    tags: 'Full',
  },
  {
    title: 'Masala Chaap Tikka',
    price: '190',
    tags: 'Full',
  },
  {
    title: 'Chilli Garlic Chaap',
    price: 'Rs.190/-',
    tags: 'Full',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
