export default function TableBody({ tdTbody, keyID }) {
  return (
    <tbody>
      <tr className="bg-gray-100">
        <td key={keyID} className="border px4 py-2">
          {tdTbody}
        </td>
      </tr>
    </tbody>
  );
}
