import { Fragment } from 'react';
import CardProduct from '../components/Fragments/CardProduct';
import Button from '../components/Elements/Button/Index';

const products = [
  {
    id: 1,
    name: 'Sepatu Baru',
    price: 'Rp. 1.000.000',
    image: '/images/sepatu.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae consectetur earum sed veniam neque repellat amet labore error omnis?',
  },
  {
    id: 2,
    name: 'Sepatu Kedua',
    price: 'Rp. 5.00.000',
    image: '/images/sepatu.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  veniam neque repellat amet labore error omnis?',
  },
  {
    id: 3,
    name: 'Sepatu Ketiga',
    price: 'Rp. 7.500.000',
    image: '/images/sepatu.jpg',
    description: 'veniam neque repellat amet labore error omnis?',
  },
];

const email = localStorage.getItem('email');

const Products = () => {
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default Products;
