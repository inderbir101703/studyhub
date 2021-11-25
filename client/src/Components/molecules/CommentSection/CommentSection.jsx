import React from 'react';

import CommentSectionStyle from './CommentSection.style'
import Image from '../../atoms/Image';
import {findUser} from '../../../utils'

const CommentSection=({
    name,
    comments,
    users,
    ...otherProps
} )=>{
    if(comments){
        
    return comments?.slice().reverse()?.map((comment)=>{
        const user=findUser(comment?.user,users)
        return (
           
            <CommentSectionStyle>
         
               <span>
               <Image varient='user' src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
                <div>
                <h6>{user?.username}</h6>
                <small>{comment?.time?.substring(0,10)}</small></div></span>
                <p>{comment?.comment}
                </p>
            </CommentSectionStyle>
             
            
           
        );
    })}
    else
    return null
    
}



export default CommentSection;