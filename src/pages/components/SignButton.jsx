import styled from "styled-components";
import { useEffect } from "react";


const SignButton = (props) => {

	const {children, loading} = props;

	useEffect(() => {
		console.log("valor de loading: ", loading)
	},[loading]);


	return (
		<>
		{loading ? <Disable_button type="button">{children}</Disable_button> : <Sign_Button type="submit">{children}</Sign_Button>} 
		</>
	)
}


const Sign_Button = styled.button`
	@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
	width: 303px;
	height: 45px;
	display: flex;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	text-align: center;
	background: #52B6FF;
	border-radius: 5px;
	border: none;
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 21px;
	line-height: 26px;
	color: #FFFFFF;
`

const Disable_button = styled.button`
		@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
		width: 303px;
		height: 45px;
		display: flex;
		cursor: default;
		justify-content: center;
		align-items: center;
		text-align: center;
		border-radius: 5px;
		border: none;
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
		font-size: 21px;
		line-height: 26px;
		color: #FFFFFF;
		background: #52B6FF;
		opacity: 0.7;
`


export default SignButton;