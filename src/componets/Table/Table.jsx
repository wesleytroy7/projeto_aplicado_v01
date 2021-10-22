export default function Table({
  keyId = null,
  captiontable = 'Descricao da tabela',
  thHeadCell = 'cabecalho da tabela',
  tdDataCell = 'Dado da tabela',
  thStyled,
}) {
  return (
    <table className="border-separate border border-green-800" key={keyId}>
      <caption className="text-sm  text-red-900 font-thin">
        {captiontable}
      </caption>
      <thead>
        <tr>
          <th className="border border-green-500  ">{thHeadCell}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-blue-600">{tdDataCell}</td>
        </tr>
      </tbody>
    </table>
  );
}
