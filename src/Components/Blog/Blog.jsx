import React, { useEffect } from 'react'
import "./Blog.css"
import blog1 from '../../assets/blog1.jpeg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpeg'
import blog4 from '../../assets/blog4.jpeg'
import blog5 from '../../assets/blog5.jpeg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Blogs = ({img,heading,para,path}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="blog_container">
            <div className="blog_img">
                <img src={img} alt="" />
            </div>
            <div className="blog_content">
                <h1 className='TAM_h1'>{heading}</h1>
                <p>{para}</p>
                <Link to={path}><button>Learn More</button></Link>
            </div>
        </div>
    )
}

const Blog = () => {

    const datas = [
        {id:1, img:blog1,heading:"NoQu TAM is AI tech rich Time and Attendance Management System",para:"In today's rapidly evolving business landscape, the standard for tracking staff attendance is experiencing a revolutionary shift, courtesy of AI-powered face recognition technology.",path:"/Blog1"},
        {id:2, img:blog2,heading:"Time and Attendance management with Zero capital investment",para:"Keeping tabs on your team's attendance is paramount in any work environment. However, traditional attendance systems often come with hefty price tags.",path:"/Blog2"},
        {id:3, img:blog3,heading:"NoQu TAM - Hassle Free & Queue free Time and Attendance system",para:"NoQu TAM, an innovative solution revolutionizing attendance management by eliminating queues, paperwork, and manual tracking.",path:"/Blog3"},
        {id:4, img:blog4,heading:"How NoQu TAM improves field workforce efficiency and productivity",para:"In today's fast-moving business world, managing field workforce operations is often missed from the center of focus. With the help of AI-powered attendance management.",path:"/Blog4"},
        {id:5, img:blog5,heading:"How NoQu TAM is a game changer?",para:"Discover how NoQu TAM transforms field workforce management, offering advanced features and integration capabilities to streamline operations and enhance productivity in today's competitive business landscape.",path:"/Blog5"}
    ]

  return (
    <>
    <Helmet>
            <title>NoQu Blog: Insights on Innovation, Technology & Time Management</title>
            <meta name="description" content="Explore NoQu's blog for the latest insights on innovative tech, time management solutions, and industry trends. Stay updated on how we’re reshaping the future of efficiency." />
            <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta property="og:image" content="https://noqu.in/logo.png" />
            <meta property="og:url" content="https://noqu.in/" />
            <meta name="twitter:card" content="NoQu" />
            <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta name="twitter:image" content="https://noqu.in/logo.png" />
        </Helmet>

    <div className='blog_homepage'>
        <div className="blog_homepage_head">
            <h5 className='TAM_h1'>Time and Attendance Management (TAM)</h5>
            <h1 className='TAM_h1'><span>NoQu </span>Insights Hub</h1>
            <h6 className='TAM_h1'>Explore NoQu's blog for concise insights into our innovative solutions,
            </h6>
            <h6 className='TAM_h1'>revolutionizing workforce management and industry trends</h6>
        </div>
        <div className='blog_list'>
            {datas.map((data) => < Blogs key={data.id} img = {data.img} heading = {data.heading} para = {data.para} path = {data.path}/>)}
        </div>
    </div>
    </>
  )
}

export default Blog
