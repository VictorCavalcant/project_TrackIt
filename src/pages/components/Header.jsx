import styled from "styled-components";
import TextLogo from "../../assets/images/TrackIt_Text.svg"

const Header = () => {
	return (
		<Main>
			<img className="logo" src={TextLogo} alt="text-logo"/>
			<img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToi4ToqDB3Y-9quXMWnnNYqGvF58HTu-U50A&usqp=CAU" alt=""></img>
		</Main>
	)
}

const Main = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
	position: fixed;
	top: 0;
	width: 375px;
	height: 70px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background: #126BA5;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

	.logo {
		margin-left: 18px;
	}

	.avatar {
	width: 51px;
	height: 51px;
	border-radius: 50%;
	margin-right: 18px;
	}


`



export default Header;

