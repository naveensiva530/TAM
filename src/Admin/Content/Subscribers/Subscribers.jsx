import React, { useState, useEffect } from 'react';
import "./Subscribers.css"
import axios from 'axios';
import refresh from "../../../../src/assets/refresh.png"
import subscriber from "../../../../src/assets/subscriber.png"
import subscribers from "../../../../src/assets/subscribers.png"


function Subscribers({ data, loading, errormessage, fetchData, count, subscriptionToday, filteredData, setFilteredData, setSubscriptionToday }) {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState({});
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });


  // Handle search input change
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.length !== 0) {
      const filtered = data.filter(item =>
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) // Adjust the property to search
      );
      setFilteredData(filtered);
    } else if (value === '') {
      setFilteredData(data);
    }
    else {
      errormessage // Reset to all data if search term is empty
    }
  };

  const handleSearch2 = (event) => {
    const value = event.target.value;
    setSearchTerm2(value);
    if (value.length !== 0) {
      const filtered2 = data.filter(item =>
        item.created_at.toLowerCase().includes(value.toLowerCase()) // Adjust the property to search
      );
      setFilteredData(filtered2);
      setSubscriptionToday(filtered2.length)
    } else if (searchTerm2 === '') {
      setFilteredData(data);
    }
    else {
      errormessage // Reset to all data if search term is empty
    }
  };




  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Sorting function
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    // if (direction == 'ascending'){
    //   setSortingArrow(<>&#9662;</>)
    // }else if (direction == 'descending'){
    //   setSortingArrow(<>&#9652;</>)
    // }
    // else{  
    //   setSortingArrow('')
    // }
  };

  // Memoized sorted data
  const sortedData = React.useMemo(() => {
    let sortableItems = [...filteredData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredData, sortConfig]);

  // useEffect(() => {
  //   const loadMailTemplate = async () => {
  //     const response = await fetch('./Unsubscribed.html');
  //     const htmlContent = await response.text();
  //     setHtmlBody(htmlContent);
  //   };

  //   loadMailTemplate();
  // }, []);

  const handleSubscribsion = (userId, userEmail) => {

    // Toggle subscription status for the specific user
    setSubscriptionStatus(prevStatus => ({
      ...prevStatus,
      [userId]: false // Toggle the subscription status
    }));

    // setSubscription(false)
    // setUnSubscribeID(userId);
    console.log("the ID is :", userId)
    // axios.post('http://localhost:3003/db/delete', { id: userId, email: userEmail })

    axios.post('https://noqu.in/db/delete', { id: userId, email: userEmail })
      .then((_response) => {
        console.log(_response.data.message)
      })
      .catch((error) => {
        console.error(error);     
      });
  };

  return (
    <div className="subscribers">
      <div className="subscribers_head">
        <h1 className='TAM_h1'>Subscribers</h1>
        <div className="subscribers_search-box">
          <div className="subscribers_search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onKeyDown={handleKeyDown}
              onChange={handleSearch}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="subscribers_search_date">
            <span onClick={() => fetchData()}>
               <img src={refresh} width={17} style={{marginRight:"8px"}}/> Refresh
            </span>
          <div className="subscribers_count">
          <img src={subscribers} width={17} style={{marginRight:"8px"}}/> Total Subscribers : {count}
            </div>
            <div className="subscribers_count">
            <img src={subscriber} width={17} style={{marginRight:"8px"}}/> New Subscribers : {subscriptionToday}
            </div>
            <input
              type="date"
              value={searchTerm2}
              onChange={handleSearch2}
            />
          </div>
        </div>
      </div>
      <div className="subscribers_container">
        {loading ? (
          <div className='nodata'>Loading...</div>
        ) : filteredData.length === 0 ? (
          <div className="nodata">
            <p>No data found</p>
          </div>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th style={{ cursor: "pointer" }} onClick={() => requestSort('id')}>ID <span>{sortConfig.key === 'id' && sortConfig.direction === 'ascending' ? <>&#9662;</> : <>&#9652;</>}</span></th>
                  <th style={{ cursor: "pointer" }} onClick={() => requestSort('email')}>Email <span>{sortConfig.key === 'email' && sortConfig.direction === 'ascending' ? <>&#9662;</> : <>&#9652;</>}</span></th>
                  <th style={{ cursor: "pointer" }} onClick={() => requestSort('created_at')}>Subscribed At <span>{sortConfig.key === 'created_at' && sortConfig.direction === 'ascending' ? <>&#9662;</> : <>&#9652;</>}</span></th>
                  <th>Subscription</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  {sortedData.length}
                </tr> */}
                {sortedData.map(user => (
                  <>
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.email}</td>
                      <td>{new Date(user.created_at).toLocaleString()}</td>
                      <td>
                        <button className={subscriptionStatus[user.id] === false ? "Admin_Unsubcribed" : "Admin_Unsubcribe"}
                          onClick={() => handleSubscribsion(user.id, user.email)}>
                          {subscriptionStatus[user.id] === false ? "Unsubscribed" : "Unsubscribe"}
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

export default Subscribers;
