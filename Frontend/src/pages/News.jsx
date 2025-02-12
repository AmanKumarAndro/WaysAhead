import React, { useEffect, useState } from 'react';
import { Section, Container } from '../components/shared';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get('/api/news');
      setNews(response.data);
    };

    fetchNews();
  }, []);

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-bold mb-4">Latest News</h1>
        <ul>
          {news.map((item) => (
            <li key={item._id} className="mb-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default News; 