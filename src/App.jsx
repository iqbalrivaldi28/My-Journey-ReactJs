import React from 'react';

//! Membuat Component dengan Functional Component (Recomended)
function Button() {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
      Buy now
    </button>
  );
}

//! Bisa juga Functional Component dengan style Arrow Function
const ButtonDua = () => {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white" type="submit">
      Buy now
    </button>
  );
};

//! Membuat component dengan Class Component (Not Recomended/Versi Lama)
class ButtonSlate extends React.Component {
  render() {
    return (
      <button className="h-10 px-6 font-semibold rounded-md bg-slate-700  text-white" type="submit">
        Buy now
      </button>
    );
  }
}

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-2">
        <Button></Button>
        <ButtonDua></ButtonDua>
        <ButtonSlate></ButtonSlate>
      </div>
    </div>
  );
}

export default App;
