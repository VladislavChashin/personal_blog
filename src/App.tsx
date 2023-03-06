import React from 'react';
import { Header } from './components/header/header';
import { Search } from './components/search/search';
import { Sidebar } from './components/sidebar/sidebar';
import { Stories } from './components/stories/stories';

function App() {
  return (
    <>
      <aside>
        <Sidebar/>
      </aside>
      <div className="content_wrap">
        <header>
          <Header/>
        </header>
        <main>
          <Stories/>
          <Search/>
        </main>
      </div>
      
    </>
  );
}

export default App;
