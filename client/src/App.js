import React, { useEffect, Suspense, useState } from "react";
import Header from "./Components/organisms/Header";
import { AppStyle } from "./App.style";
import { connect } from "react-redux";
import {NotificationContainer} from 'react-notifications';
import { NotificationManager} from 'react-notifications';
import axios from "axios"
import {
  fetchPosts,
  fetchUser,
  fetchTheme,
  fetchLanguage,
  fetchTopic,
  fetchUsers
} from "./actions/post-action";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import { ThemeProvider } from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PostSection from "./Components/Pages/PostSection";
import SignUpForm from "./Components/organisms/SignUpForm";
import Modal from "./Components/molecules/Modal";
import UserInfo from "./Components/molecules/UserInfo";

import "./App.css";


const TopicSection = React.lazy(() =>
  import("./Components/organisms/TopicSection")
);

function App({
  getAllposts,
  posts,
  getUser,
  user,
  theme,
  currentTheme,
  currentLanguage,
  getTopics,
  topics,
  getUsers,
  users,
  language,
}) {
  const [userClick, setUserClick] = useState("");
  const [topicSearched,setTopicSearched]=useState('')

  useEffect(() => {  
    
    getUser()
    getUsers()
    getAllposts()
    getTopics()
    currentLanguage("en");
  }, [currentLanguage]);
  if (language) {
    return (
      <Router>
        <ThemeProvider theme={{ theme: theme }}>
          <AppStyle>
            <Header name="name" setUserClick={setUserClick} />

            <body>
              <Modal
                openModal={true ? userClick : false}
                setUserClick={setUserClick}
                userClick={userClick}
                Children={<info />}
              />
                
              <div className="post-and-topic-container">
              
              <PostSection setUserClick={setUserClick} posts={posts} search={topicSearched}/>   
                <Suspense
                  fallback={
                    <Loader
                      type="ThreeDots"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000} //3 secs
                    />
                  }
                >
                  <TopicSection setTopicSearched={setTopicSearched} />
                </Suspense>
              </div>
            </body>
         
            <NotificationContainer/>
          </AppStyle>
        </ThemeProvider>
      </Router>
    );
  } else return <Loader
                       type="ThreeDots"
                       color="#00BFFF"
                       height={100}
                       width={100}
                       timeout={3000} //3 secs
                     />;
}
const mapStateToprops = (state) => {
  if (state) {
    return { 
      posts: state?.home?.posts,
      user:state?.home?.user,
      language: state?.home?.language,
      theme: state?.home?.theme,
      topics:state?.home?.topics,
      users:state?.home?.users
    };
  } else {
    return {
      hub: null,
    };
  }
};
const actionAsProps = {
  getAllposts: fetchPosts,
  getUser: fetchUser,
  currentTheme: fetchTheme,
  currentLanguage: fetchLanguage,
  getTopics:fetchTopic,
  getUsers:fetchUsers
};

export default connect(mapStateToprops, actionAsProps)(App);
