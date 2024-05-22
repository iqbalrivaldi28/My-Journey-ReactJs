import AuthLayout from "../components/Layout/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister />
        </AuthLayout>
    )

}

export default RegisterPage;