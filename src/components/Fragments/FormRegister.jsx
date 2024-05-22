import { Input } from 'postcss';
import Button from '../Elements/Button/Index';
import InputForm from '../Elements/Input/Index';

const FormRegister = () => {

    return(
        <form action="">
        <InputForm label="Fullname" type="email" placeholder="Insert your name here.." name="fullname"></InputForm>
        <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email"></InputForm>
        <InputForm label="Password" type="password" placeholder="*******" name="password"></InputForm>
        <InputForm label="Confirm Password" type="password" placeholder="*******" name="ConfirmPassword"></InputForm>

        <Button classname="bg-blue-600 w-full">Register</Button>
      </form>
    )
}

export default FormRegister;