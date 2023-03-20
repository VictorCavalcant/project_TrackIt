import styled from "styled-components"
import Logo from "../../assets/images/TrackIt_Logo.svg"
import SignButton from "../components/SignButton.jsx"
import { Link } from "react-router-dom"

const SignInPage = () => {
	return (
		<Main>
			<img src={Logo} alt=""/>
			<Entry>
				<input type="email" placeholder="email"></input>
				<input type="password" placeholder="senha"></input>
				<SignButton>Entrar</SignButton>
			</Entry>
			<Link to="/cadastro"><p className="info">Não tem uma conta? Cadastre-se!</p></Link>
		</Main>
	)
}

const Main = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
	width: 375px;
	height: 100vh;
	background: #FFFFFF;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		margin-bottom: 33px;
	}

	.info {
	margin-top: 25px;
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 13.976px;
	line-height: 17px;
	text-align: center;
	text-decoration-line: underline;
	color: #52B6FF;
	}

`

const Entry = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	input {
		width: 303px;
		height: 45px;
		background: #FFFFFF;
		border: none;
		border: 1px solid #D5D5D5;
		border-radius: 5px;
		margin-bottom: 6px;

		::placeholder {
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 25px;
		color: #DBDBDB;
		padding-left: 4px;
		}
	}
`
export default SignInPage;

