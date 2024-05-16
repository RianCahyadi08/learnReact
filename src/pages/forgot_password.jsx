import FormForgotPass from "../components/Fragments/FormForgotPass";
import AuthLayout from "../components/Layouts/AuthLayouts";

const ForgotPasswordPage = () => {
  return (
    <>
      <AuthLayout title="Forgot Password" type='forgot_password'>
        <FormForgotPass></FormForgotPass>
      </AuthLayout>
    </>
  );
};

export default ForgotPasswordPage;