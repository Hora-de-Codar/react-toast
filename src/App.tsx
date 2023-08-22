import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    email: "",
  });

  const inputChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.nome || !formData.idade || !formData.email) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    toast.success("Formulário enviado com sucesso!", {
      position: toast.POSITION.TOP_RIGHT,
      onClose: () => {
        setFormData({
          nome: "",
          idade: "",
          email: "",
        });
      },
    });
  };

  const ClearFields = () => {
    setFormData({
      nome: "",
      idade: "",
      email: "",
    });
  };

  return (
    <div className="bg-blue-950 w-screen h-screen flex item-center justify-center">
      <form
        className="w-80 md:w-96 px-10 py-6 rounded-md bg-white grid items-center my-28 h-3/4"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center mb-5">
          <img
            src="https://img-b.udemycdn.com/user/200_H/224646276_6ee6.jpg"
            width={50}
            alt="Hora de Codar"
          />
          <p className="px-3">Hora De Codar</p>
        </div>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            maxLength={50}
            className="form-control bg-gray-300 rounded mt-1 pl-3 py-1 w-full"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={inputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="idade" className="form-label">
            Idade
          </label>
          <input
            type="text"
            maxLength={2}
            className="form-control bg-gray-300 rounded mt-1 pl-3 py-1 w-full"
            id="idade"
            name="idade"
            value={formData.idade}
            onChange={inputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            maxLength={80}
            className="form-control bg-gray-300 rounded mt-1 pl-3 py-1 w-full"
            id="email"
            name="email"
            value={formData.email}
            onChange={inputChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-950 p-2 w-2/3 mx-auto text-sm rounded font-bold text-white mb-3"
        >
          Enviar
        </button>
        <button
          type="button"
          className="bg-red-500 p-2 w-1/2 mx-auto text-xs rounded  text-white"
          onClick={ClearFields}
        >
          Limpar Campos
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default App;
