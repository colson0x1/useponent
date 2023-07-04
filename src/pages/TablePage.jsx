import Table from '../components/Table';

function TablePage() {
  const data = [
    { username: 'cols', profileTheme: 'bg-orange-500', wpm: 125 },
    { username: 'nabineo', profileTheme: 'bg-yellow-500', wpm: 96 },
    { username: 'spark', profileTheme: 'bg-red-500', wpm: 94 },
    { username: 'zephyr', profileTheme: 'bg-green-500', wpm: 81 },
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default TablePage;
