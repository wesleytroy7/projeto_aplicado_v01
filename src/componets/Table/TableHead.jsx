export default function TableHead({ captiontable, thHeadCell }) {
  return (
    <table className="w-full text-base">
      <caption className="text-sm  text-red-900 font-thin">
        {captiontable}
      </caption>
      <thead>
        <tr>
          <th className="w-1/5 bg-gray-200 text-center border-gray-400 font-normal  px-4 py-4">
            {thHeadCell}
          </th>
        </tr>
      </thead>
    </table>
  );
}
