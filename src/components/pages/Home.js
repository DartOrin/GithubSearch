import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { GithubContext } from '../../context/github/githubContext';
import Card from '../Card';
import Search from '../Search';

const Home = () => {
  
  const {loading, users} = useContext(GithubContext)
  
  return (
    <>
      <Search/>
      <div className="row">

        {loading
          ? <p className="text-center">Загрузка</p>
          : users.map(user=>(
              <div className="col-sm-4 mb-4" key={user.id}>
                <Card user={user} />
              </div>
            ))
        }

        
      </div>
    </>
  );
};

export default Home;