import React from "react"
import ChatBot from "../components/chatbot";
import {useNavigate} from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    return (
        <div >
                <h1>ChatBot en Mern</h1>
                <button onClick={() => navigate("/add")}>Agregar Preguntas</button>
                <button onClick={() => navigate("/chat")}>User Chat</button>
                <ChatBot />

        </div>
    )
}

export default Home