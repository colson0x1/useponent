function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((user) => {
    const renderedCells = config.map((column) => {
      return <td className="p-2" key={column.label}>{column.render(user)}</td>;
    });
    return (
      <tr className="border-b" key={user.username}>
        {renderedCells}
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
