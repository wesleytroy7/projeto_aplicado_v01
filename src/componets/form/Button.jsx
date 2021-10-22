export default function Button({
  typeButton = 'submit',
  nameButton = 'Nome do botão',
  textButton = 'Texto do botão',
}) {
  return (
    <button
      className=" align-baseline  bg-blue-500 hover:bg-blue-400 text-white font-bold p-4  border-b-4 border-blue-700 hover:border-blue-500 rounded"
      type={typeButton}
      name={nameButton}
    >
      {textButton}
    </button>
  );
}
