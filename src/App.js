import React from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
	apiKey: "AIzaSyD8eKYx8jEz5knq1ETFMnpJhkvv578yf2I",
	authDomain: "chat-box-3d113.firebaseapp.com",
	projectId: "chat-box-3d113",
	storageBucket: "chat-box-3d113.appspot.com",
	messagingSenderId: "268855642753",
	appId: "1:268855642753:web:1372f3cf5baeb100911b80",
	measurementId: "G-RREVE672FW",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
	const [user] = useAuthState(auth);

	return (
		<div className='App'>
			<header></header>
			<section>{user ? <ChatRoom /> : <SignIn />}</section>
		</div>
	);
}

export default App;
