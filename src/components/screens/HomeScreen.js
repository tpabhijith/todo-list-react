import styled from 'styled-components';
import Delete from "../../assets/images/delete.svg";
import Plus from "../../assets/images/plus.svg";
import Revert from "../../assets/images/revert.svg";
import Tick from "../../assets/images/tick-green.svg";
import "./HomeScreen.css";
function HomeScreen() {
  return(
      <>
        <MainContainer>
            <Heading>Todo List</Heading>
            <Container>
                <SubHeading>Things to be done</SubHeading>
                <Ulist>
                    <List>
                        <Left>
                            <ImageContainer></ImageContainer>item1
                        </Left>
                        <DeleteContainer>
                            <img src={Delete} width="15px"/>
                        </DeleteContainer>
                    </List>
                    <List>
                        <Left>
                            <ImageContainer></ImageContainer>item2
                        </Left>
                        <DeleteContainer>
                            <img src={Delete} width="15px"/>
                        </DeleteContainer>
                    </List>
                    <List>
                        <Left>
                            <ImageContainer></ImageContainer>item3
                        </Left>
                        <DeleteContainer>
                            <img src={Delete} width="15px"/>
                        </DeleteContainer>
                    </List>
                </Ulist>
                <InputContainer>
                    <PlusIcon src={Plus}></PlusIcon>
                    <Input placeholder="Type new task..."></Input>
                    <Button>Add New</Button>
                </InputContainer>
                
                <SubHeading>Completed</SubHeading>
                <Ulist1>
                    <List>
                        <Left>
                            <ImageContainer1><img src={Tick} width="15px"/></ImageContainer1>
                            item1
                        </Left>
                        <Right>
                            <RevertContainer>
                                <img src={Revert} width="15px"/> 
                            </RevertContainer>
                            <DeleteContainer>
                                <img src={Delete} width="15px"/>
                            </DeleteContainer>
                        </Right>
                    </List>
                    <List>
                        <Left>
                            <ImageContainer1><img src={Tick} width="15px"/></ImageContainer1>
                            item1
                        </Left>
                        <Right>
                            <RevertContainer>
                                <img src={Revert} width="15px"/> 
                            </RevertContainer>
                            <DeleteContainer>
                                <img src={Delete} width="15px"/>
                            </DeleteContainer>
                        </Right>
                    </List>
                    <List>
                        <Left>
                            <ImageContainer1><img src={Tick} width="15px"/></ImageContainer1>
                            item1
                        </Left>
                        <Right>
                            <RevertContainer>
                                <img src={Revert} width="15px"/> 
                            </RevertContainer>
                            <DeleteContainer>
                                <img src={Delete} width="15px"/>
                            </DeleteContainer>
                        </Right>
                    </List>
                </Ulist1>
            </Container>
        </MainContainer>
      </>
  );
}
export default HomeScreen;

const Heading = styled.h1`
    text-align: center;
    margin-bottom: 30px;
`;
const SubHeading = styled.h3`
    text-align: left;
    margi-bottom:20px;
`;
const Ulist = styled.ul`
    list-style:none;
`;
const Ulist1 = styled.ul`
    list-style:none;
    color:  #06c692;
`;
const List = styled.li`
    margin-bottom: 20px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
`;
const Input = styled.input`
    padding:10px 24px;
    border:none;
`;
const Button = styled.button`
    background: blue;
    color: #fff;
    padding:12px 24px;
    &:hover{
        cursor: pointer;
    }
`;
const Container = styled.div`
    width:350px;
    margin: 0 auto;

`;
const MainContainer = styled.div`
    width:350px;
    margin: 0 auto;
    padding: 0 30px;
    border-left: 1px solid black;
    border-right: 1px solid black;
`;
const ImageContainer = styled.div`
    border-radius:50%;
    width:20px;
    height:20px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    margin-right:20px;
`;
const ImageContainer1 = styled.div`
    border-radius:50%;
    width:20px;
    height:20px;
    border: 1px solid #06c692;
    display: flex;
    justify-content: center;
    margin-right:20px;
`;
const InputContainer = styled.div`
    border:1px solid black;
    border-right: none;
    display:flex;
    justify-content:space-between;
`;
const PlusIcon = styled.img`
    margin-left:10px;
`;
const Left = styled.div`
    width:50%;
    display:flex;
    justify-content:flex-start;
`;
const Right = styled.div`
    width:50%;
    display:flex;
    justify-content: flex-end;
`;
const RevertContainer = styled.div`
    margin-right :10px;
    &:hover{
        cursor: pointer;
    }
`;
const DeleteContainer = styled.div`
    &:hover{
        cursor: pointer;
    }
`;
