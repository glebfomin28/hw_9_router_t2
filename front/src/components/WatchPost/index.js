import React from 'react';
import style from "./WatchPost.module.css";
import {useNavigate} from "react-router-dom";


export const WatchPost = ({watchPost, deletePost}) => {
    const navigate = useNavigate()
    const onDeletePost = () => {
        deletePost(watchPost.id)
        navigate("/")
    }
    return (
        <div className={style.bodyPost}>

            <button className={style.back}
                onClick={() => navigate("/")}
            >&#10097;</button>

            <div>{watchPost.content}</div>

            <button className={style.edit}
                    onClick={() => navigate(`/posts/${watchPost.id}/edit`)}
            >Изменить</button>

            <button className={style.delete} onClick={onDeletePost}>Удалить</button>
        </div>
    );
}

