import React, {useEffect, useState} from 'react';
import style from "./EditPost.module.css";
import {useNavigate} from "react-router-dom";


export const EditPost = ({watchPost, fetchPOST}) => {
    const [editText, setEditText] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        setEditText(watchPost.content)
    },[])

    const cnFetchPOST = () => {
        fetchPOST(watchPost.id, editText)
        navigate("/")
    }

    return (
        <div className={style.bodyNewPost}>
            <button className={style.delete} onClick={() => navigate("/")}>x</button>

            <textarea
                className={style.textarea}
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                rows="8"
                cols="130"
            />
            <button onClick={cnFetchPOST}>Сохранить</button>
        </div>
    );
}

