// import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

function TablePage() {
  const data = [
    {
      name: 'Shishir',
      username: 'spark',
      profileTheme: 'bg-yellow-500',
      wpm: 81,
    },
    {
      name: 'Samriddha',
      username: 'zephyr',
      profileTheme: 'bg-green-500',
      wpm: 72,
    },
    {
      name: 'Nabin',
      username: 'nabineo',
      profileTheme: 'bg-purple-500',
      wpm: 85,
    },
    {
      name: 'Colson',
      username: 'cols',
      profileTheme: 'bg-blue-500',
      wpm: 125,
    },
  ];

  const config = [
    {
      label: 'Name',
      render: (user) => user.name,
      sortValue: (user) => user.name,
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
      sortValue: (user) => user.wpm,
    },
  ];

  const keyFn = (user) => {
    return user.username;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
