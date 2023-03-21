import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Trash from "../../assets/images/Trash_Icon.svg"

const HobbiesPage = () => {

	const days = ["D","S","T","Q","Q","S","S"];


	return (
		<Main>
			<Header></Header>
			<MyHobbies>
				<h1>Meus hábitos</h1>
				<button className="addHobbie_btn">
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

	.selected-day {
		background: #CFCFCF;
		color: #FFFFFF;
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

	.addHobbie_btn {
	cursor: pointer;
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

const AddHobbie = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
	margin-top: 20px;
	width: 340px;
	height: 180px;
	background: #FFFFFF;
	border: none;
	border-radius: 5px;

	input {
	width: 303px;
	height: 45px;
	background: #FFFFFF;
	border: 1px solid #D5D5D5;
	border-radius: 5px;

	::placeholder {
		padding-left: 4px;
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
		font-size: 19.976px;
		line-height: 25px;
		color: #DBDBDB;
	}

	}

	.days {
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	justify-content: center;
	align-items: center;
	margin-top: 8px;
	margin-bottom: 29px;
	}

	.day {
	cursor: pointer;
	width: 30px;
	height: 30px;
	margin-right: 4px;
	background: #FFFFFF;
	border: 1px solid #D5D5D5;
	border-radius: 5px;
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	color: #DBDBDB;
	text-align: center;
	}

	.confirm {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.confirm-btn_save {
		cursor: pointer;
		width: 84px;
		height: 35px;
		margin-left: 23px;
		background: #52B6FF;
		border: none;
		border-radius: 5px;
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 20px;
		text-align: center;
		color: #FFFFFF;
	}

	.confirm-btn_cancel {
		background: none;
		border: none;
		cursor: pointer;
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 20px;
		color: #52B6FF;
	}
`

const Hobbie = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: baseline;
	margin-top: 20px;
	margin-bottom: 10px;
	width: 340px;
	height: 91px;
	background: #FFFFFF;
	border-radius: 5px;

	.title {
	margin-left: 15px;
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 25px;	
	color: #666666;
	}

	.days {
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	justify-content: center;
	align-items: center;
	margin-top: 8px;
	margin-bottom: 29px;
	}

	.day {
	cursor: pointer;
	width: 30px;
	height: 30px;
	margin-right: 4px;
	background: #FFFFFF;
	border: 1px solid #D5D5D5;
	border-radius: 5px;
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	color: #DBDBDB;
	text-align: center;
	}

	.delete {
		cursor: pointer;
		position: absolute;
		right: 0;
		top: 0;
	}

`


/*

AddHobbie code:

		<AddHobbie>
			<input type="text" placeholder="nome do hábito"></input>
			<ul className="days">
				{days.map((day,index) => {
					return <li key={index} className="day">{day}</li>
				})}
			</ul>
			<div className="confirm">
				<button className="confirm-btn_cancel">Cancelar</button>
				<button className="confirm-btn_save">Salvar</button>
			</div>
		</AddHobbie>


Hobbie code:

			<Hobbie>
				<h1 className="title">Ler One Piece</h1>
				<ul className="days">
						{days.map((day,index) => {
							return <li key={index} className="day">{day}</li>
						})}
					</ul>
				<img className="delete" src={Trash} alt="trash"/>
			</Hobbie>


*/




export default HobbiesPage;