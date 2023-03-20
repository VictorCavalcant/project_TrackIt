import styled from "styled-components";


const SignButton = (props) => {

	const {children} = props;

	return (
		<Sign_Button>{children}</Sign_Button>
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

export default SignButton;