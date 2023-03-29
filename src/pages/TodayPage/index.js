import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import { useState, useContext, useEffect} from "react";
import TokenContext from "../../contexts/TokenContext";
import ProgressContext from "../../contexts/ProgressContext";
import axios from "axios";
import Today_Hobbie from "./Today_Hobbie";

const TodayPage = () => {

	dayjs.locale('pt-br');

	const data_weekday = dayjs().format("dddd")
	const weekday = data_weekday.charAt(0).toUpperCase() + data_weekday.slice(1);
	const day_month = dayjs().format("D/M")
	const {token} = useContext(TokenContext);
	const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
	const {progress} = useContext(ProgressContext);
	const [items, setItems] = useState([]);


	useEffect(() => {
		const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

		const promise = axios.get(URL, config);

		promise.then(response => {
			const {data} = response;
			console.log(data);
			setItems(data);
		})

	}, []);



	return (
		<Main>
			<Header></Header>
			<h1 className="tday">{`${weekday}, ${day_month}`}</h1>
			{progress === 0 ?  <p className="hobbie-progress_incomplete">Nenhum hábito concluído ainda</p> : <p className="hobbie-progress">{`${progress}% dos hábitos concluídos`}</p>}
			{items.map((item) => {
				const {id,name,currentSequence,highestSequence,done} = item;
				return <Today_Hobbie id={id} name={name} currentSequence={currentSequence} highestSequence={highestSequence} done={done} lenght={items.length}></Today_Hobbie>
			}
			)}
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

	.hobbie-progress_incomplete {
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
		color: #BABABA;
	}

	.hobbie-progress {
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
		color: #8FC549;
	}

`



export default TodayPage;