import { useCallback } from 'react';
import styled from '@emotion/styled';
import { theme as chakraTheme } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MainLogo = styled.img`
	width: 562px;
	height: 86px;
	margin-bottom: 82px;
`;

const FormWrapper = styled.div`
	width: 610px;
	height: 400px;
	background-color: #fff;
	box-shadow: ${chakraTheme.shadows.base};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

interface IFormInput {
	nickname: string;
	email: string;
	password: string;
	password2: string;
}

const Register = () => {
	const navigate = useNavigate();

	// const onSubmit = useCallback(
	// 	async (data: IFormInput) => {
	// 		toast
	// 			.promise(requestLogin(data.ID, data.Password), {
	// 				loading: 'Loading',
	// 				success: 'Login successful',
	// 				error: e => e.response.data,
	// 			})
	// 			.then(res => {
	// 				// setAuth({
	// 				// 	AccessToken: res.data.AccessToken,
	// 				// 	RefreshToken: res.data.RefreshToken,
	// 				// });
	// 				navigate('/');
	// 			});
	// 	},
	// 	[navigate],
	// );

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();
	return (
		<Wrapper>
			<Link to="/">
				<MainLogo src="/images/titleLogo.svg" alt="title logo" />
			</Link>

			<FormWrapper></FormWrapper>
		</Wrapper>
	);
};

export default Register;
