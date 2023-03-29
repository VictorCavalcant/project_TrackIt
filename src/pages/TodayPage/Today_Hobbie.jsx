import styled from "styled-components";
import { useState, useEffect, useContext} from "react";
import ProgressContext from "../../contexts/ProgressContext";
import CheckMark from "../../assets/images/Checkmark.svg"
import axios from "axios";
import TokenContext from "../../contexts/TokenContext";

const Today_Hobbie = (props) => {

	const percentage_byItem = length > 0 ?  Math.round(100/length) : 0;
	const {progress, setProgress} = useContext(ProgressContext);
	const {token} = useContext(TokenContext);
	const [select, setSelect] = useState(false);

	const {id,name,currentSequence,highestSequence,done, length} = props;


	useEffect(() => {
		if(done) {
			setSelect(true)
		} else
			setSelect(false)
	}, [done])


	function checkHobbie() {
		const checkURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
		const uncheckURL =  `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`

		if (select) {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}


			const promise = axios.post(uncheckURL,{},config);

			promise.then(response => {
				const {data} = response;
				console.log(data);
			})
 		} else {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}

			const promise = axios.post(checkURL,{},config);

			promise.then(response => {
				const {data} = response;
				console.log(data);
			})

		}

	}


	useEffect(() => {
		if (progress > 100) {
			setProgress(100);
		}

		if (progress < 0) {
			setProgress(0);
		}
	}, [progress])


	return (
		<Main>
			<h1 className="title">{name}</h1>
			<div className="description">
				<p className="sequence_progress">{`Sequência atual: ${currentSequence} dias`}</p>
				<p className={currentSequence === highestSequence ? "sequence_progress" : "sequence"}>{`Seu recorde: ${highestSequence} dias`}</p>
			</div>
			<div onClick={() => {}} className={select ? ("checkbox_selected",setProgress(percentage_byItem + progress)) : ("checkbox_unselected",setProgress(progress - percentage_byItem))}>
				<img src={CheckMark} alt="checkmark"/>
			</div>
		</Main>
	)
}

const Main = styled.div`
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

	.sequence_progress {
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
		font-size: 13px;
		line-height: 16px;
		color: #8FC549;
	}

	.checkbox_unselected {
		cursor: pointer;
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

	.checkbox_selected {
		cursor: pointer;
		box-sizing: border-box;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 69px;
		height: 69px;
		right: 10px;
		background: #8FC549;
		border: 1px solid #E7E7E7;
		border-radius: 5px;
	}
`


export default Today_Hobbie;