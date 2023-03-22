import styled from "styled-components"
import Logo from "../../assets/images/TrackIt_Logo.svg"
import SignButton from "../components/SignButton.jsx"
import { Link } from "react-router-dom"
import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner'

const SignUpPage = () => {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [image_url, setImage_Url] = useState("");
	const [loading, setLoading] = useState(false);

	const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

	const navigate = useNavigate();

	function clearData() {
		setName("");
		setPassword("");
		setEmail("");
		setImage_Url("");
		setLoading(false);
	}

	function SubmitData(e) {
		e.preventDefault();
		setLoading(true);
		const promise = axios.post(URL, {
			email,
			name,
			image: image_url,
			password
		});


		promise.then(response => {
			const {data} = response;
			console.log(data);
			navigate("/");
			clearData();
		});
	
		promise.catch(err => {
			console.log(err.response)
			alert("Erro, houve alguma falha no envio de dados");
			setLoading(false);
		}
			);
	}

	return(
		<Main>
			<img src={Logo} alt=""/>
			<Entry>
				<form onSubmit={!loading ? SubmitData : ""}>
					<input disabled={loading ? true : false} type="email" placeholder="email" required value={email} onChange={e => setEmail(e.target.value)}></input>
					<input disabled={loading ? true : false} type="password" placeholder="senha" required value={password} onChange={e => setPassword(e.target.value)}></input>
					<input disabled={loading ? true : false} type="text" placeholder="nome" value={name} required onChange={e => setName(e.target.value)}></input>
					<input disabled={loading ? true : false} type="text" placeholder="foto" value={image_url} required onChange={e => setImage_Url(e.target.value)}></input>
					<SignButton loading={loading}>{ loading ?
						<ThreeDots 
							height="80" 
							width="80" 
							radius="9"
							color="white" 
							ariaLabel="three-dots-loading"
							wrapperStyle={{}}
							wrapperClassName=""
							visible={true}
						/> : "Cadastrar"}
					</SignButton>
				</form>
			</Entry>
			<Link to="/"><p className="info">Já tem uma conta? Faça login!</p></Link>
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
		color: #c6c4c4;
		padding-left: 4px;
		}
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`



export default SignUpPage;

