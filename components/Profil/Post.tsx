import { PostType } from "@/types/collection"

const Post = ({post}: {post: PostType}) => {
    return (
        <div style={{
            fontSize: "1.5rem",
            fontWeight: "bold"
        }}>
            {post.name}
        </div>
    )
}

export default Post