import SortableTable from '../components/SortableTable';

function TablePage() {
  function experiencePoint(races) {
    const baseXP = 50;
    const extraXPPerRaces = 10;
    const totalXP = baseXP + (races - 1) * extraXPPerRaces;

    return totalXP;
  }

  const data = [
    {
      name: 'Shishir',
      username: 'spark',
      profileTheme: 'bg-yellow-500',
      wpm: 81,
      races: 153,
    },
    {
      name: 'Samriddha',
      username: 'zephyr',
      profileTheme: 'bg-green-500',
      wpm: 72,
      races: 171,
    },
    {
      name: 'Nabin',
      username: 'nabineo',
      profileTheme: 'bg-purple-500',
      wpm: 85,
      races: 138,
    },
    {
      name: 'Colson',
      username: 'cols',
      profileTheme: 'bg-blue-500',
      wpm: 125,
      races: 125,
    },
  ];

  const updatedData = data.map((user) => {
    const xp = experiencePoint(user.races);
    return { ...user, xp: xp };
  });

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
    {
      label: 'Races Today',
      render: (user) => `${user.races} races`,
      sortValue: (user) => user.races,
    },
    {
      label: 'XP',
      render: (user) => `${user.xp} xp`,
      sortValue: (user) => user.xp,
    },
  ];

  const keyFn = (user) => {
    return user.username;
  };

  return (
    <div>
      <SortableTable data={updatedData} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
