export const findUser=(id,users)=>{
    let usr={}
    users?.map((user)=>{
   
    if(user?._id===id){
     usr=user}
    })
    return usr
}
export const getcommentUser=(id,users)=>{
    let usr=false
    users?.map((user)=>{
   
    if(user?.user===id){
     usr=true}
    })
    return usr
}
