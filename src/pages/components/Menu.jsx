import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";


const Menu = () => {
	return(
		<Main>
			<h2>Hábitos</h2>
			<CircularProgressbar className="circle"
        value={66}
        text={"Hoje"}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
        })}
      />
			<h2>Histórico</h2>
		</Main>
	)
}

const Main = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
	position: fixed;
	bottom: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	width: 375px;
	height: 70px;
	background: #FFFFFF;

	h2 {	
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 17.976px;
	line-height: 22px;
	text-align: center;
	color: #52B6FF;
	}

	.circle {
		width: 91px;
		height: 91px;
		margin-bottom: 26px;
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		color: #FFFFFF;

	}

`




export default Menu;