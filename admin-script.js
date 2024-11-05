const GhostAdminAPI=require("@tryghost/admin-api");


const api=new GhostAdminAPI({
	url:"http://localhost:2368",
	key:"671f0d4aaa9cb618ffda349f:fdc7e23711dffdbb42814cb61a6854215ec8b43fae914dcc5300689917ce14ea",
	version:"v5.0"
});
const postId="671b141e7d1e0f25648a0b5d";
// const mobiledoc=JSON.stringify({
// 	version:"0.3.1",
// 	atoms:[],
// 	cards:[],
// 	markups:[],
// 	sections:[[1,"p",[["html","This Text has been updated via admin api with javascript"]]]]
// })
// lexical_new=`{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"This is Test, but you can ","type":"extended-text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"subscribe","type":"extended-text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":null,"target":null,"title":null,"url":"#/portal/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" Bye!!!??","type":"extended-text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`



api.posts.read({id: postId,})
	.then(post => {return api.posts.edit({id:postId,feature_image:"http://localhost:2368/content/images/2024/10/cover-3.jpg", updated_at:post.updated_at})
		.then(res=>console.log(res))
			.catch(error=>console.log(error))})
	.catch(error=>console.log(error))