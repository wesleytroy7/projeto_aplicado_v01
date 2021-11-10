export default function TableBody({
  keyId = null,
  tdDataCell = 'Dado da tabela',
  thStyled,
}) {
  return (
    <table>
      <tbody key={keyId}>
        <tr>
          <td className="border border-blue-600">{tdDataCell}</td>
        </tr>
      </tbody>
    </table>
  );
}
