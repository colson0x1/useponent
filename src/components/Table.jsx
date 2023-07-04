function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((user) => {
    return (
      <tr className="border-b" key={user.username}>
        <td className="p-3">{config[0].render(user)}</td>
        <td className="p-3">{config[1].render(user)}</td>
        <td className="p-3">{config[2].render(user)}</td>
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
