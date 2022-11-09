import React from 'react';
import style from "./HomePage.module.css";
import {PostItem} from "./units/PostItem";
import {useNavigate} from "react-router-dom";

export const HomePage = ({postList, getWatchPost}) => {

    const printPostItem = postList.map((el) =>
        <PostItem
            key={el.id}
            info={el}
            getWatchPost={getWatchPost}
        />)

    const navigate = useNavigate()
    return (
        <div >
            <div className={style.newPostBlock}>
                <button className={style.button} onClick={() => navigate('/posts/new')} >Создать пост</button>
            </div>
            <div className={style.postsList}>
                {printPostItem}
            </div>
        </div>
    );
}

