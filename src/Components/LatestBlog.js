import styles from '../Styles/LatestBlog.css'
import React from "react";
import {useState} from "react";
import Icon from './Icons'
import DarkButton from "./Shared/DarkButton";
import {AiOutlineCalendar} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {BiLike} from 'react-icons/bi'
import TopTitle from "./Shared/TopTitle";


function LatestBlog() {
    const [blogs] = useState(
        [
            {
                title : 'DONEC PORTTITOR JUSTO ET',
                author :'Bill Gates',
                date :'FEB 25th, 2016',
                comment :'12',
                like :'20',
                paragraph : 'Lorem ipsum dolor,amet consectetur adispiscing.Nullam maximus Mustafa Kaba cloud bilişim test proje deneme [...]',
                image_url :'https://themesflat.com/html/medicare/images/blog/latest-blog-1.jpg',
                icon_name :'video'
            }
            ,
            {
                title : 'ALIQUAM PORTTITOR MASSA SEM',
                author :'Henry Dell',
                date :'Mar 18th, 2016',
                comment :'20',
                like :'21',
                paragraph : 'Nulla venenatis erat feugiat condimentum varius. In feugiat in nibh non scelerisque. Aenean non ante feugiat, iaculis aliquam leo. [...]' ,

                image_url :'https://themesflat.com/html/medicare/images/blog/latest-blog-2.jpg',
                icon_name :'camera'
            },
        ]
    )
    return(
        <div style={styles}>
            <div className="latest-blog-container">
                <span className="latest-blog-title">
                                    <TopTitle backgroundLetter={"B"} secondWord={"BLOG"} firstWord={"LATEST"} />
                </span>
                    <div className="blog-card">
                        {
                            blogs.map((blog,index) => {
                                return(
                                    <div className="latest-blog">
                                        <div className="feature-post">
                                            <div className="entry-image"><img src={blog.image_url} alt=""/></div>
                                            <div className="type-post"></div>
                                        </div>
                                        <div className="main-post">
                                            <div className="entry-title">{blog.title}</div>
                                            <div className="entry-meta">
                                                <span className="entry-meta-item">
                                                    <span>
                                                    <AiOutlineCalendar/>
                                                    </span>
                                                    <span className="entry-meta-content">
                                                         {blog.date}
                                                    </span>
                                                </span>
                                                <span className="entry-meta-item">
                                                    <span>
                                                        <AiOutlineUser/>
                                                    </span>
                                                    <span className="entry-meta-content">
                                                        {blog.author}
                                                    </span>
                                                </span>
                                                <span className="entry-meta-item">
                                                    <span>
                                                        <FaRegComment/>
                                                    </span>
                                                    <span className="entry-meta-content">
                                                        {blog.comment}
                                                    </span>
                                                </span>
                                                <span className="entry-meta-item">
                                                    <span>
                                                        <BiLike/>
                                                    </span>
                                                    <span className="entry-meta-content">
                                                        {blog.like}
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="entry-content">
                                                <div className="entry-paragraph">
                                                    <p>{blog.paragraph}</p>
                                                </div>
                                                <div className="entry-button">
                                                    <div style={{display:'flex'} } className="entry-button-dark">
                                                        <DarkButton text="READ MORE" iconName="right"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                )
                            })
                        }
                    </div>
            </div>
        </div>
    )
}

export default LatestBlog;