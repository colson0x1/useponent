import Table from '../components/Table';

function TablePage() {
  const data = [
    { username: 'spark', profileTheme: 'bg-gray-500', wpm: 94 },
    { username: 'zephyr', profileTheme: 'bg-green-500', wpm: 81 },
    { username: 'nabineo', profileTheme: 'bg-yellow-500', wpm: 96 },
    { username: 'cols', profileTheme: 'bg-orange-500', wpm: 125 },
  ];

  const config = [
    {
      label: 'Username',
      render: (user) => `@${user.username}`,
    },
    { label: 'Profile Theme', render: (user) => user.profileTheme },
    { label: 'Score', render: (user) => `${user.wpm} wpm` },
  ];

  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
}

export default TablePage;
