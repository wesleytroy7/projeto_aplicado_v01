export default function TableHead({ thTable }) {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th
            className="px-4 py-2 font-serif
          "
          >
            {thTable}
          </th>
        </tr>
      </thead>
    </table>
  );
}
