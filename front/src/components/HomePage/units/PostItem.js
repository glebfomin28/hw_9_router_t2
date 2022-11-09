import React from 'react';
import style from './PostItem.module.css';
import {useNavigate} from "react-router-dom";

export const PostItem = ({info, getWatchPost}) => {
    const navigate = useNavigate()

    const onGetWatchPost = () => {
        getWatchPost(info)
        navigate(`/posts/${info.id}`)
    }
    return (
        <div className={style.bodyPost} onClick={onGetWatchPost}>
            {info.content}
        </div>
    );
}

