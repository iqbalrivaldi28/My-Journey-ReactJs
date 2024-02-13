//! Bisa juga Functional Component dengan style Arrow Function
const Button = (props) => {
  //? Kasih nilai default pake Destructuring
  const { children = 'Ini Teks Default', classname = 'bg-black' } = props;

  return <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white type="submit`}>{children}</button>;
};

export default Button;
