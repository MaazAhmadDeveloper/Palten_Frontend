import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDataSelection } from '../../../../../context/ContextApi';

function Blogs() {

  return (
    <>
      <div className="first-top-container">
        <Container>
          <Row className="document-row-text">
            <Col lg={12}>
              <h2 className="mb-3">Latest Blog Posts</h2>
              <p className="mb-4">
              Stay updated with the latest insights and updates on file conversion technologies and trends. Our blog features informative articles, tips, and news to help you make the most of our tool and stay ahead in the ever-evolving world of digital file management.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className='mt-5 mb-5'>
          <BlogColumn />
        </Row>
      </Container>
    </>
  );
}

export default Blogs;

const BlogColumn = () => {
  const navigate = useNavigate();
  const {blogsData, setblogsData} = useDataSelection();

  const clickClickHandler = (route)=>{
    navigate(route);
  }

  return (
    <>
      {blogsData.length === 0 ? 
        <div className='not-found text-center mt-5 mb-5'>
          <h1 className='text-404'>No Blogs Found</h1>
          <h3 style={{ color: "#5a5a5a" }}>There are no blogs available at the moment!</h3>
        </div>
        :
        <Col>
          {blogsData.map((blog, index) => (
            <div className='blogs-div' key={index}>
                <h3 className='blogs-title'>{index+1}. {blog.title}</h3>
                <div className='blogs-content' dangerouslySetInnerHTML={{ __html: blog.content }} />

                <hr />
                <Button onClick={()=> clickClickHandler(blog.route)}  className='blogs-expand-btn'>
                  Read More 
                </Button>
            </div>
          ))}
        </Col>
      }
    </>
  );
}
