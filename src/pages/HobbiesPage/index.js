import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";

const HobbiesPage = () => {
	return (
		<Main>
			<Header></Header>
			<MyHobbies>
				<h1>Meus hábitos</h1>
				<button>
					<p>+</p>
				</button>
			</MyHobbies>
			<p className="empty">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
			<Menu></Menu>
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
	justify-content: flex-start;
	align-items: center;

	.empty {
	margin-top: 28px;
	margin-left: 17px;
	margin-right: 20px;
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #666666;
	}

`

const MyHobbies = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin-top: 100px;


	h1 {
	margin-left: 17px;
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 23px;
	line-height: 29px;
	color: #126BA5;
	}

	button {
	margin-right: 18px;
	width: 40px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #52B6FF;
	border: none;
	border-radius: 5px;
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 27px;
	line-height: 34px;
	text-align: center;
	color: #FFFFFF;

	p {
		margin-bottom: 4px;
	}

	}
`




export default HobbiesPage;