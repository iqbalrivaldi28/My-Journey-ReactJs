import React from 'react';

//! Membuat Component dengan Functional Component (Recomended)
// function Button() {
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
//       Buy now
//     </button>
//   );
// }

//! Membuat component dengan Class Component (Not Recomended/Versi Lama)
// class ButtonSlate extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-6 font-semibold rounded-md bg-slate-700  text-white" type="submit">
//         Buy now
//       </button>
//     );
//   }
// }

//! Bisa juga Functional Component dengan style Arrow Function
const ButtonDua = (props) => {
  //? Kasih nilai default pake Destructuring
  const { children = 'Ini Teks Default', variant = 'bg-black' } = props;

  return <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white type="submit`}>{children}</button>;
};

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-2">
        <ButtonDua variant="bg-red-700">Login</ButtonDua>
        <ButtonDua variant="bg-slate-500">Logout</ButtonDua>
        <ButtonDua></ButtonDua> {/*//? Pake nilai default karena ngak kisa kasih props */}
      </div>
    </div>
  );
}

export default App;
