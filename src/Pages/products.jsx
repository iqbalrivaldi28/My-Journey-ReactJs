import Button from '../components/Elements/Button/Index';
import CardProduct from '../components/Fragments/CardProduct';

const Products = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/public/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Pertama">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae consectetur earum sed veniam neque repellat amet labore error omnis?</CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000" />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header image="/public/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Kedua">Lorem ipsum, dolor sit amet consectetur adipisicing. </CardProduct.Body>
        <CardProduct.Footer price="Rp. 500.000" />
      </CardProduct>
    </div>
  );
};

export default Products;
