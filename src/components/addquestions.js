import React, { useState } from "react";
import App from "axios";
import { useNavigate } from "react-router-dom";

const AddQuestions = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await App.post("http://localhost:5000/api/chat/add", {
        question,
        answer,
      });
      alert("Question added successfully!");
      setQuestion("");
      setAnswer("");
    } catch (error) {
      console.error("Error al agregar la pregunta:", error);
    }
  };

  return (
    <div>
      <h2>Agregar Pregunta</h2>
      <button onClick={() => navigate("/")}>Volver al inicio</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pregunta: </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></input>
        </div>

        <div>
          <label>Respuesta: </label>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            requeried
          ></input>
        </div>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default AddQuestions;
