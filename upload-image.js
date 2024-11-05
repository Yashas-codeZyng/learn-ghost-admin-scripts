const GhostAdminAPI=require("@tryghost/admin-api");


const api=new GhostAdminAPI({
	url:"http://localhost:2368",
	key:"671f0d4aaa9cb618ffda349f:fdc7e23711dffdbb42814cb61a6854215ec8b43fae914dcc5300689917ce14ea",
	version:"v5.0"
});
// const postId="671f7d23aa9cb618ffda34e6";



api.images.upload({file:"./assets/cover.jpg"}).then(res=>console.log(res)).catch(error=>console.log(error))



// api.imagees.list().then(res=>console.log(res)).catch(error=>console.log(error))
