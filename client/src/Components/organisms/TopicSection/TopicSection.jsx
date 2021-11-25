import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TopicSectionStyle from "./TopicSection.style";
import Loader from "react-loader-spinner";
const TopicSection = ({ name, language,topics,setTopicSearched, ...otherProps }) => {
  const { topicsHeading } = language;
  if(topics){
  return (
    <TopicSectionStyle>
      <h2>{topicsHeading}:</h2>
<div classname='topic-container' id='topicContainer'>
      {topics?.map((topic)=><Link to={`/topics/${topic.topic}`} onClick={(e)=>{
  setTopicSearched(topic.topic)
  }}>
  {" "}
  {topic.topic}
</Link>)}
</div>
    </TopicSectionStyle>
  );}
  else
  return <Loader
                         type="ThreeDots"
                         color="#00BFFF"
                         height={100}
                         width={100}
                         timeout={3000} //3 secs
                       />;
};

TopicSection.propTypes = {};

TopicSection.defaultProps = {
  name: "fds",
};
const mapStateToprops = (state) => {
  if (state) {
    return {
      language: state?.home?.language,
      topics:state?.home?.topics
    };
  } else {
    return {
      language: null,
    };
  }
};

export default connect(mapStateToprops, null)(TopicSection);
