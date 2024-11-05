const GhostAdminAPI=require("@tryghost/admin-api");


const api=new GhostAdminAPI({
	url:"http://localhost:2368",
	key:"671f0d4aaa9cb618ffda349f:fdc7e23711dffdbb42814cb61a6854215ec8b43fae914dcc5300689917ce14ea",
	version:"v5.0"
});
const postId="671f7d23aa9cb618ffda34e6";
// const mobiledoc=JSON.stringify({
// 	version:"0.3.1",
// 	atoms:[],
// 	cards:[],
// 	markups:[],
// 	sections:[[1,"p",[["excerpt","This Text has been updated via admin api with javascript"]]]]
// })



api.posts.delete({id: postId,}).catch(error=>console.log(error))