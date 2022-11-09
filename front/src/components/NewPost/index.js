import React, {useState} from 'react';
import style from "./NewPost.module.css";
import {useNavigate} from "react-router-dom";


export const NewPost = ({fetchPOST}) => {
    const [input, setInput] = useState('');
    const [idPost, setIdPost] = useState(0);
    const navigate = useNavigate()

    const pushNewPost = () => {
        if (input !== '') {
            fetchPOST(idPost, input)
            setInput('')
            setIdPost(p => p + 1)
            navigate("/")
        }

    }


    return (
        <div className={style.bodyNewPost}>
            <button className={style.delete} onClick={() => navigate("/")}>x</button>

            <textarea
                className={style.textarea}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows="8"
                cols="130"
            />
            <button onClick={pushNewPost}>Опубликовать</button>
        </div>
    );
}

