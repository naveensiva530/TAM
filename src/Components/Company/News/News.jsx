import React, { useEffect, useState } from 'react'
import "./News.css"
import NewsList from './NewsList'
import { Helmet } from 'react-helmet-async';


const News = () => {

    const [newsItems, setNewsItems] = useState([]);
  
    useEffect(() => {
      // fetch('http://localhost:3003/db/news')
      fetch('https://noqu.in/db/news')
        .then((response) => response.json())
        .then((data) => setNewsItems(data))
        .catch((err) => console.error('Error fetching news:', err));
    }, []);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

    <Helmet>
            <title>"NoQu: Revolutionizing Time Management with Innovative Solutions"</title>
            <meta name="description" content="NoQu is transforming queues and waiting with innovative solutions like the Time and Attendance Management System (TAM) and employee live tracking, optimizing productivity, saving time, and reducing inefficiencies." />
            <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta property="og:image" content="https://noqu.in/logo.png" />
            <meta property="og:url" content="https://noqu.in/" />
            <meta name="twitter:card" content="NoQu" />
            <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta name="twitter:image" content="https://noqu.in/logo.png" />
        </Helmet>

    <div className='News'>
    <h1>News</h1>
    <div className="News-list">
        <NewsList newsItems={newsItems} />
    </div>
  </div>
  </>

  )
}

export default News
