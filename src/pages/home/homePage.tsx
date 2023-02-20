import { useGetUserDataQuery } from 'api/agents';

export function HomePage() {
  const { data } = useGetUserDataQuery({});

  return (
    <div>
      Hello tortik
      <br />
      <span>{JSON.stringify(data)}</span>f{' '}
    </div>
  );
}
