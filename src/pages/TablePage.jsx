import Table from '../components/Table';

function TablePage() {
  const data = [
    { username: '@cols', color: 'bg-orange-500', wpm: 125 },
    { username: '@nabineo', color: 'bg-yellow-500', wpm: 96 },
    { username: '@spark', color: 'bg-red-500', wpm: 94 },
    { username: '@zephyr', color: 'bg-green-500', wpm: 81 },
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default TablePage;
