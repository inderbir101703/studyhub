import styled from "styled-components";
const TopicSectionStyle = styled.div`
  border-left: 2px #b3d6e2 solid;
  border-right: 2px #ededed solid;
  margin-top: 5px;
  background-image: linear-gradient(
    to right,
    ${(props) => {
      if (props.theme.theme === "dark") return "#3E3E3E";
      else return "#ededed";
    }},
    #b3d6e2
  );
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  #topicContainer{
    display: flex;
  flex-direction: column;
  align-items: center;
  a{padding:5px;
  }
  }
  @media only screen and (max-width: 800px) {
    
  width:80%;
  #topicContainer{
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;};
  a{
    padding:5px;
    text-decoration:none;

  }
`;
export default TopicSectionStyle;
