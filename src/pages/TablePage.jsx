import Table from '../components/Table';

function TablePage() {
  const data = [
    {
      name: 'Shishir',
      username: 'spark',
      profileTheme: 'bg-gray-500',
      wpm: 94,
    },
    {
      name: 'Samriddha',
      username: 'zephyr',
      profileTheme: 'bg-green-500',
      wpm: 81,
    },
    {
      name: 'Nabin',
      username: 'nabineo',
      profileTheme: 'bg-yellow-500',
      wpm: 96,
    },
    {
      name: 'Colson',
      username: 'cols',
      profileTheme: 'bg-orange-500',
      wpm: 125,
    },
  ];

  const config = [
    {
      label: 'Name',
      render: (user) => user.name,
    },
    {
      label: 'Username',
      render: (user) => `@${user.username}`,
    },
    {
      label: 'Profile Theme',
      render: (user) => <div className={`p-3 m-2 ${user.profileTheme}`} />,
    },
    {
      label: 'Score',
      render: (user) => `${user.wpm} wpm`,
      header: () => <th className="bg-blue-300">Score</th>,
    },
  ];

  const keyFn = (user) => {
    return user.username;
  };

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
