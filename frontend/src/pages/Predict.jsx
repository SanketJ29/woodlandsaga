import React, { useState } from "react";
import Input from "../components/Input";
import axios from 'axios';
import Navbar from "../components/Navbar";

const Predict = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [text, setText] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', name);
    formData.append('email', email);

    try {
      const response = await axios.post('/api/prediction', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        responseType: 'arraybuffer'
      });
      if (response.status === 200) {
        const blob = new Blob([response.data], {type: 'image/jpeg'});
        const url = URL.createObjectURL(blob);
        setFileUrl(url); // set fileUrl state to display the image
        const textResponse = await axios.get('/api/prediction-text');
      if (textResponse.status === 200) {
        setText(textResponse.data);
      } else {
        console.error(`Response error: ${textResponse.status}`);
      }
      } else {
        console.error(`Response error: ${response.status}`);
      }
    } catch (error) {
      console.error(`Fetch error: ${error}`);
    }
  };

  return (
    <div>
      <Navbar/>
    <section className="text-gray-400 body-font bg-gray-900 min-h-screen">
  <div className="container px-5 py-20 mx-auto flex flex-col items-center justify-center">
  <h1 className="text-green-400 text-2xl font-bold mb-10">ENTER AERIAL IMAGE INPUT</h1>
    <form action="/data" encType="multipart/form-data" className="p-4 sm:w-96 w-full flex flex-col justify-start items-center green-glassmorphism mx-auto">
      <Input placeholder="Enter Name" name="name" type="text" className="text-white-600" value={name} onChange={(event) => setName(event.target.value)} />
      <Input placeholder="Enter Email" name="email" type="email" className="text-white-600" value={email} onChange={(event) => setEmail(event.target.value)} />
      <div className="mt-4">
        <label className="block text-black font-bold mb-2 text-xl" htmlFor="file">
          Upload File:
        </label>
        <input className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline text-lg" id="file" type="file" onChange={handleFileChange} />
      </div>
      <div className="mt-4">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xl" onClick={handleSubmit}>
          Upload
        </button>
      </div>
    </form>
    {fileUrl && (
  <div className="max-w-full max-h-full mt-8 text-center">
     <img src={fileUrl} alt="Processed Image" />
    {/* <img src={fileUrl} alt="OCR Output" className="mx-auto" />
    <p className="text-white mt-4">{JSON.stringify(text)}</p> */}
  </div>
)}
  </div>
</section>
</div>

  );
};

export default Predict;
