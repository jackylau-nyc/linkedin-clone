import React, { useState, useEffect } from 'react';
import './Feed.css';
import Post from './Post.js';
import InputOption from './InputOption.js';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import firebase from 'firebase';
import { db } from './firebase';

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    
    //renders posts
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        );
    }, []);

    const sendPost = (e) => {
        //prevents default behavior (refresh)
         e.preventDefault();

        db.collection('posts').add({
            name: 'Jacky Lau',
            description: 'test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form onSubmit={sendPost}>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button type="submit">
                            Send
                        </button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    );
}

export default Feed;