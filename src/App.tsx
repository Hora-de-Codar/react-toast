import React, { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    email: ''
  });

  const InputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (!formData.nome || !formData.idade || !formData.email) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }
    
    toast.success('Formulário enviado com sucesso!', {
      position: toast.POSITION.TOP_RIGHT,
      onClose: () => {
        setFormData({
          nome: '',
          idade: '',
          email: ''
        });
      }
    });
  };

  const ClearFields = () => {
    setFormData({
      nome: '',
      idade: '',
      email: ''
    });
  };

  return (
    <div className="App bg-blue-950 w-screen h-screen flex item-center justify-center">
      <form className="px-10 py-6 rounded-md bg-white grid items-center my-44 h-2/4" onSubmit={handleSubmit}>
        <div className="flex items-center mb-5">
          <img src="https://img-b.udemycdn.com/user/200_H/224646276_6ee6.jpg" width={50} alt="Hora de Codar" />
          <p className="px-3">Hora De Codar</p>
        </div>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label px-3">Nome</label>
          <input
            type="text"
            maxLength={50}
            className="form-control bg-gray-300 rounded grid px-12 p-1 ml-3"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={InputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="idade" className="form-label px-3">Idade</label>
          <input
            type="text"
            maxLength={2}
            className="form-control bg-gray-300 rounded grid px-12 p-1 ml-3"
            id="idade"
            name="idade"
            value={formData.idade}
            onChange={InputChange}
          />
        </div>
        <div className="mb-3 grid">
          <label htmlFor="email" className="form-label px-3">Email</label>
          <input
            type="email"
            maxLength={80}
            className="form-control bg-gray-300 rounded px-12 p-1 ml-3"
            id="email"
            name="email"
            value={formData.email}
            onChange={InputChange}
          />
        </div>
        <button type="submit" className="bg-blue-950 p-2 w-2/3 mx-auto text-sm rounded font-bold text-white mb-3">Enviar</button>
        <button type="button" className="bg-red-500 p-2 w-1/2 mx-auto text-xs rounded  text-white" onClick={ClearFields}>Limpar Campos</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;
