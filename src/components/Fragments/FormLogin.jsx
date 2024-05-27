import Button from '../Elements/Button/Index';
import InputForm from '../Elements/Input/Index';

const FormLogin = () => {
  const hanldeLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    localStorage.setItem('email', email);

    let password = event.target.password.value;
    localStorage.setItem('password', password);

    window.location.href = '/products';
  };

  return (
    <form onSubmit={hanldeLogin}>
      <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email"></InputForm>
      <InputForm label="Password" type="password" placeholder="*******" name="password"></InputForm>

      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
