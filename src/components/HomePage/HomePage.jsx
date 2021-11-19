import React from 'react';
import AsideComponent from '../AsideComponent/AsideComponent';
import PostsContainer from '../PostsContainer/PostsContainer';
import HeaderNav from '../HeaderNav/HeaderNav';

function HomePage() {
  return (
    <div className="home-page">
        <HeaderNav />
        <div className="main">
          <AsideComponent />
          <PostsContainer />
        </div>
    </div>
  );
}

export default HomePage;