function Table({ data }) {
  const renderedRows = data.map((user) => {
    return (
      <tr key={user.username}>
        <td>@{user.username}</td>
        <td>{user.profileTheme}</td>
        <td>{user.wpm} wpm</td>
      </tr>
    )
  })
  return (
    <table>
    <thead>
      <tr>
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
