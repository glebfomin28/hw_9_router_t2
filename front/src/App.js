import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import {HomePage} from "./components/HomePage";
import {Route, Routes} from "react-router-dom";
import {NewPost} from "./components/NewPost";
import {WatchPost} from "./components/WatchPost";
import {EditPost} from "./components/EditPost";

export const App = () => {
    const [postList, setPostList] = useState([])
    const [watchPost, setWatchPost] = useState()

    const fetchGET = () => {
        fetch('http://localhost:7777/posts')
            .then( (res) => res.json())
            .then( (json) => setPostList(json.reverse()))
    }

    useEffect( () => {
        fetchGET()
    }, [])


    const fetchPOST = (id, content) => {
        fetch("http://localhost:7777/posts", {
            method: "post",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({id: id, content: content})
        })
            .then( (response) => {
                if (response.status >= 200 && response.status < 300) {
                    for (let i = 0; i < postList.length; i++) {
                        if(postList[i].id === id) {
                            setPostList(p => [...p.slice(0, i),
                                {id: id, content: content},
                                ...p.slice(i + 1)])
                            return response;
                        }
                    }
                   setPostList(p => [{id:id, content: content}, ...p]);
                }
                return response;
            })
        fetchGET()
    }

    const getWatchPost = (item) => {
        setWatchPost(item)
    }

    const deletePost = (id) => {
        fetch(`http://localhost:7777/posts/${id}`, {
            method: 'DELETE',
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                setPostList(p => p.filter(item => item.id !== id));
                return response;
            }
        })
        fetchGET()
    }
  return (
    <div className={style.App}>
        <Routes>
            <Route
                path="/"
                element={<HomePage postList={postList} getWatchPost={getWatchPost}/>}/>
            <Route
                path="/posts/new"
                element={<NewPost fetchPOST={fetchPOST}/>}/>
            <Route
                path="/posts/:id"
                element={<WatchPost deletePost={deletePost} watchPost={watchPost}/>}/>
            <Route
                path="/posts/:id/edit"
                element={<EditPost watchPost={watchPost} fetchPOST={fetchPOST}/>}/>
        </Routes>

    </div>
  );
}

// const getNotes = () => {
//     fetch('http://localhost:7777/notes')
//         .then( (res) => res.json())
//         .then((res) => setItems(res))
// }
//
// useEffect( () => {
//     getNotes()
// }, [])
//
//
// useEffect( () => {
//     getNotes()
// }, [reset])
//
//
// const deleteText = (id) => {
//     fetch('http://localhost:7777/notes/' + id, {
//         method: 'DELETE',
//     }).then(response => {
//         if (response.status >= 200 && response.status < 300) {
//             setItems(p => p.filter(item => item.id !== id));
//             return response;
//         }
//     })
//     getNotes()
// }
//
// const pushText = (text, id) => {
//     fetch("http://localhost:7777/notes", {
//         method: "post",
//         headers: {
//             'Content-Type':'application/json'
//         },
//
//         body: JSON.stringify({id:id, content: text})
//     })
//         .then( (response) => {
//             if (response.status >= 200 && response.status < 300) {
//                 setItems(p => [...p, {id:id, content: text}]);
//             }
//             return response;
//         })
//     getNotes()
// }
