import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import 'dayjs/locale/pt-br'
import CheckMark from "../../assets/images/Checkmark.svg"

const TodayPage = () => {

	dayjs.locale('pt-br');

	const today = dayjs();
	const data_weekday = dayjs().format("dddd")

	const weekday = data_weekday.charAt(0).toUpperCase() + data_weekday.slice(1);


	const day_month = dayjs().format("D/M")


	console.log(today);
	console.log(weekday);
	console.log(day_month);


	return (
		<Main>
			<Header></Header>
			<h1 className="tday">{`${weekday}, ${day_month}`}</h1>
			<p className="hobbie-progress incomplete">Nenhum hábito concluído ainda</p>
			<Hobbie>
				<h1 className="title">Ler One Piece</h1>
				<div className="description">
					<p className="sequence">Sequência atual: 2 dias</p>
					<p className="sequence">Seu recorde: 4 dias</p>
				</div>
				<div className="checkbox">
					<img src={CheckMark} alt="checkmark"/>
				</div>
			</Hobbie>
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
	align-items: baseline;

	.tday {
	margin-top: 100px;
	margin-left: 17px;
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 23px;
	line-height: 29px;
	color: #126BA5;
	}

	.hobbie-progress {
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
		color: #BABABA;
	}
`

const Hobbie = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: baseline;
	margin-top: 28px;
	width: 340px;
	height: 94px;
	background: #FFFFFF;
	border-radius: 5px;

	.title {
	margin-left: 15px;
	margin-bottom: 7px;
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 25px;	
	color: #666666;
	}

	.sequence {
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 16px;
	color: #666666;
	}

	.checkbox {
		box-sizing: border-box;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 69px;
		height: 69px;
		right: 10px;
		background: #EBEBEB;
		border: 1px solid #E7E7E7;
		border-radius: 5px;
	}

`


export default TodayPage;