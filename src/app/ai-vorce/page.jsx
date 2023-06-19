import ContentDescription from "@/components/ContentDescription";
import Post from "../../components/Post";
import Review from "@/components/Review";
import Content from "@/components/Content";
import axios from "axios";
import DynamicPost from "../../components/DynamicPost";

export default async function page() {

    const data = await axios.get('http://localhost:3000/api/post/get').then(res => res.data)

    return (
        <div className="space-y-12 w-5/6 m-auto border-2 border-black">
            <div className="border-2 border-black flex justify-evenly">
                <div className="border-2 border-black">
                    <Post />
                    <DynamicPost post={data} />
                </div>
                <div className="w-1/5">
                    <div className="border-2 border-black w-full">
                        <p>Image Placeholder</p>
                        <ContentDescription />
                    </div>
                </div>
            </div>
        </div >
    )
}