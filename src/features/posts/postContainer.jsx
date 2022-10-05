import { useSelector } from "react-redux";
import { selectUrl } from "./postSourceSlice";
import PostBox from "./postBox";

export default function PostContainer(props) {
    const url = useSelector(selectUrl)
    let content;
    let comments;

    

    if (url === 'https://www.reddit.com/r/rabbits.json') {
        content = <LoadFail />
        comments = null 
    } else if (props.data) {
        content = (<PostBox data={props.data[0].data.children[0].data} />)
        {/* comments = (<CommentList data={props.data[1].data} />) */}
    }

    return (
        <main>
            {content}
            {comments}
        </main>
    )
}