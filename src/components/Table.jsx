function Table({ data }) {
  const renderedRows = data.map((user) => {
    return (
      <tr className="border-b" key={user.username}>
        <td className="p-3">@{user.username}</td>
        <td className="p-3">
        <div className={`p-3 m-2 ${user.profileTheme}`}></div>
        </td>
        <td className="p-3">{user.wpm} wpm</td>
      </tr>
    )
  })
  return (
    <table className="table-auto border-spacing-2">
    <thead>
      <tr className="border-b-2">
      <th>Username</th>
      <th>Profile Theme</th>
      <th>Score</th>
      </tr>
    </thead>
    <tbody>
    {renderedRows}
    </tbody>
    </table>
  )
}

export default Table;
