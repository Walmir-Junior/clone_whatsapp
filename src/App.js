import React, { useState } from 'react'
import './App.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'
import ChatListItem from './Components/ChatListItem/ChatListItem'

const App = () => {

  const [chatList, setChatList] = useState([{}, {}, {}, {}])

  const renderChatList = chatList && chatList.map((item, key) => {
    return (
      <ChatListItem
        key={key}
      />
    );
  });


  return (
    <main className='app-window'>

      <aside className='sidebar'>
        <header>

          <img className='profile-avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWo3luud5KPZknLR5zdUUwzvYBztWgTxrkbA&usqp=CAU' alt='profile image' />

          <div className='header-buttons'>
            <div className='header-btn'>
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>

            <div className='header-btn'>
              <ChatIcon style={{ color: '#919191' }} />
            </div>

            <div className='header-btn'>
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>

        </header>

        <div className='search'>
          <div className='search-input'>
            <SearchIcon fontSize='small' style={{ color: '#919191' }} />
            <input type='search' placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </div>

        <div className='chat-list'>
          {renderChatList}
        </div>

      </aside>

      <div className='content-area'>
        ...
      </div>

    </main>

  );

}

export default App
