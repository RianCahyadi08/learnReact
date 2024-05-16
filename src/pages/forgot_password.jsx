import ForgotPassLayout from "../components/Layouts/ForgotPassLayouts";
import FormForgotPass from "../components/Fragments/FormForgotPass";

const ForgotPasswordPage = () => {
  return (
    <>
      <ForgotPassLayout title="Forgot Password">
        <FormForgotPass></FormForgotPass>
      </ForgotPassLayout>
    </>
  );
};

export default ForgotPasswordPage;