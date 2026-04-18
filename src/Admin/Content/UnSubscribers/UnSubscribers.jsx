import React, { useState, useEffect } from 'react';
import "./UnSubscribers.css"
import axios from 'axios';
import refresh from "../../../../src/assets/refresh.png"
import unsub from "../../../../src/assets/unsub.png"
import unsubs from "../../../../src/assets/unsubs.png"

const UnSubscribers = ({ data, loading, errormessage, fetchData, count, unsubscriptionToday, filteredData, setFilteredData, setUnSubscriptionToday }) => {
  // const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');
  // const [filteredData, setFilteredData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [errormessage, setErrorMessage] = useState("no data found");
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });
  // const [count, setCount] = useState()
  // const [unsubscriptionToday, setUnSubscriptionToday] = useState()
  // Fetch all data from the API
  // const fetchData = async () => {
  //   setLoading(true); // Set loading to true before fetching data
  //   try {
  //     const response = await axios.post('http://localhost:3003/db/Unsubdata'); // Use POST request
  //     console.log("Unsubdata endpoint connected successfully");
  //     const fetchedData = response.data.message; // Assuming message contains the data
  //     setData(fetchedData); // Set data state
  //     setFilteredData(fetchedData); // Initially show all data
  //     setCount(fetchedData.length); // Set total count

  //     // Calculate today's subscriptions
  //     const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  //     const todayunsub = fetchedData.filter(item => {
  //       const createdDate = new Date(item.deleted_at).toISOString().split('T')[0];
  //       return createdDate === today; // Compare dates
  //     });
  //     setTodayunsub(todayunsub)
  //     // const todayCount = todaysub.length
  //     setUnSubscriptionToday(todayunsub.length); // Set today's subscription count
  //   } catch (error) {
  //     setErrorMessage(error.message); // Set error message on error
  //   } finally {
  //     setLoading(false); // Set loading to false after fetching
  //   }
  // };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);


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
        item.deleted_at.toLowerCase().includes(value.toLowerCase()) // Adjust the property to search
      );
      setFilteredData(filtered2);
      setUnSubscriptionToday(filtered2.length)
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


  return (
    <div className="Unsubscribers">
      <div className="Unsubscribers_head">
        <h1 className='TAM_h1'>Unsubscribers</h1>
        <div className="Unsubscribers_search-box">
          <div className="Unsubscribers_search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onKeyDown={handleKeyDown}
              onChange={handleSearch}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="Unsubscribers_search_date">
            <span onClick={() => fetchData()}>
            <img src={refresh} width={17} style={{marginRight:"8px"}}/> Refresh 
            </span>
            <div className="Unsubscribers_count">
            <img src={unsubs} width={22} style={{marginRight:"8px"}}/> Total Unsubscribers : {count}
            </div>
            <div className="Unsubscribers_count">
            <img src={unsub} width={17} style={{marginRight:"8px"}}/> Today : {unsubscriptionToday}
            </div>
            <input
              type="date"
              value={searchTerm2}
              onChange={handleSearch2}
            />
          </div>
        </div>
      </div>
      <div className="Unsubscribers_container">
        {loading ? (
          <div className="nodata">Loading...</div>
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
                  <th style={{ cursor: "pointer" }} onClick={() => requestSort('deleted_at')}>Unsubscribed At <span>{sortConfig.key === 'created_at' && sortConfig.direction === 'ascending' ? <>&#9662;</> : <>&#9652;</>}</span></th>
                  <th>Feedback</th>
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
                      <td>{new Date(user.deleted_at).toLocaleString()}</td>
                      <td className='feedback' style={{width:"400px"}}> 
                      <p 
        style={{ width: "100%", overflow: "hidden" }} 
        title={user.feedback || "No feedback available"} // Tooltip with full feedback
      >
        {user.feedback ? (user.feedback.length > 30 ? `${user.feedback.slice(0, 30)}...` : user.feedback) : "-"}
      </p>
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

export default UnSubscribers
