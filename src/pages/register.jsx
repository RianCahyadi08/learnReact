import RegisterLayout from '../components/Layouts/RegisterLayouts';
import FormRegister from '../components/Fragments/FormRegister';

const RegisterPage = () => {
	return (
		<>
			<RegisterLayout title='Register'>
				<FormRegister />
			</RegisterLayout>
		</>
	);
};

export default RegisterPage;
