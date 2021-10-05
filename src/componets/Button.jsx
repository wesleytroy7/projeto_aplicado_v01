export default function Button({ children }) {
  return (
    <button className=" align-baseline  bg-blue-500 hover:bg-blue-400 text-white font-bold p-4  border-b-4 border-blue-700 hover:border-blue-500 rounded">
      {children}
    </button>
  );
}
