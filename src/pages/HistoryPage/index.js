import styled from "styled-components";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const HistoryPage = () => {

	const [value, onChange] = useState(new Date());

	return (
		<Main>
			<Header></Header>
			<h1 className="title">Histórico</h1>
			<Calendar className="calender" onChange={onChange} value={value} />
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

	.title {
	margin-top: 100px;
	margin-left: 17px;
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 23px;
	line-height: 29px;
	color: #126BA5;
	}

	.calender{
		margin-top: 11px;
	}

	`


export default HistoryPage;