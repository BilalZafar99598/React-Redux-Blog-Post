import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";


const AddPostsForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    
    const users = useSelector(selectAllUsers);
    
    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);
    const onAuthorChange = e => setUserId(e.target.value);

    
    
    const renderOptions = users.map((user) => (
        <option key={user.id} value={user.id}>{user.name}</option>
        ))

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
        
    const onSavePostClicked = (e) => {
        e.preventDefault();
        if(title && content){
            dispatch(postAdded(title, content, userId));
            setTitle('')
            setContent('');
        }

    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />

                <label htmlFor="postAuthor">Post Author:</label>
                <select
                    id="postAuthor"
                    name="postAuthor"
                    value={userId}
                    onChange={onAuthorChange}
                >
                    <option value=""></option>
                    {renderOptions}
                </select>

                <label htmlFor="postContent">Post Content:</label>
                <input
                    type="text"
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                />
               
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostsForm
