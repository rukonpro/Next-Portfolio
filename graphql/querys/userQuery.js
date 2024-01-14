import User from "@/graphql/models/userModel";

export default {
    projectInfo: (_,__,{user}) => {
        if(!user){
            return
        }
        return {
            title:"Portfolio with Rukon Pro",
            description:"Hello!\n" +
                "I am a Web Developer, React Developer,MERN stack developer, or aJavaScript enthusiast."
        }
    },
    me:async (_,__,{user})=>{
        if(!user)return ;
        try {
            const fineUser= await User.findOne({_id:user?.userId});
            if(!fineUser){
                return "user Note found"
            }
            return fineUser;
        } catch (error) {
            throw new Error(error);
        }
    }
}