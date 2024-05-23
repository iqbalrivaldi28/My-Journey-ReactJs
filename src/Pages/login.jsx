import AuthLayout from "../components/Layout/AuthLayouts";
import FormLogin from '../components/Fragments/FormLogin';


const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin />
            
        </AuthLayout>
    )

}

export default LoginPage;