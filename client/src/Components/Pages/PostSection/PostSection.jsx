

import React from 'react';
import Post from '../../organisms/Post'
import PostSectionStyle from './PostSection.style'

import Loader from "react-loader-spinner";



const PostSection=({
    name,
    setUserClick,
    posts,
    search,
    ...otherProps
} )=>{
    if(posts){
    return (
       
        <PostSectionStyle>
          {posts.slice().reverse()?.map((post)=>{
       
          if(post.topic===search){
         return <Post setUserClick={setUserClick} data={post}/>}
          else if(search===''){
              return <Post setUserClick={setUserClick} data={post}/>
          }
          })}      
        </PostSectionStyle>
         
        
       
    );
    }
    else
    return    <Loader
                             type="ThreeDots"
                             color="#00BFFF"
                             height={100}
                             width={100}
                             timeout={3000} //3 secs
                           />;
}

PostSection.propTypes = {
 
};


PostSection.defaultProps = {
  
    name: ""
   
};
export default PostSection;