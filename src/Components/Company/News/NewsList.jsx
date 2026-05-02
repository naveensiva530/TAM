
import React, { useEffect } from 'react';
import "./NewsList.css"
import { Link } from 'react-router-dom';

const NewsList = ({ newsItems }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ width: "95%" }}>
            {newsItems.map((news) => (
            <div className='newsblog' style={{ marginBottom: '20px' }}>
                <div className="newsblog-img">
                    <img src={`https://noqu.in/uploads/${news.thumbnail}`} alt={news.title} />
                </div>
                <div className="newsblog-content">
                    <div>
                        <h3>{news.title}</h3>
                        <p>{news.shortContent}</p>
                    </div>
                    <span>
                        <Link to={`/news/${news.slug}`}><button>Read More</button></Link>
                    </span>
                </div>
                <br />
            </div>
            ))}
        </div>
    );
};

export default NewsList;
