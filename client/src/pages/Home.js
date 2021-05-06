import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';
import Auth from '../utils/auth';


const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];
  const loggedIn = Auth.loggedIn();
  console.log(thoughts);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>{loading ? (
          <div>Loading...</div>
        ) : (
          <ThoughtList thoughts={thoughts} title="Some Feed For Thought(s)..." />
        )}</div>
      </div>
    </main>
  );
};

export default Home;
