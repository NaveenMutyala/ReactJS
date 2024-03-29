import React,{useState} from 'react';
import {Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';
import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/CryptoApi';

const {Text, Title }  = Typography;
const {Option } = Select;

const News = ({simplified}) => {
  const {data} = useGetCryptosQuery(100);
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const {data:cryptoNews} = useGetCryptosNewsQuery(simplified?6:12);
  console.log(data);

  const demoImage = "https://demo.tagdiv.com/newspaper_crypto/wp-content/uploads/2018/02/22-56x64.jpg";
  if(!cryptoNews) return "Loading...";
  return (
    <Row gutter={[24,24]} >
      {!simplified && (
          <Col span={24}>
            <Select
            showSearch
            className='select-news'
            placeholder="Select a crypto"
            optionFilterProp="children"
            onChange={(value)=> setNewsCategory(value)}
            filterOption ={(input,option)=> option.children.toLowerCase().indexOf(input.toLowerCase())>=0}
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin)=><Option value={coin.name}>{coin.name}</Option>)}
            </Select>

          </Col>

        )}

      {
        cryptoNews.map((news,i)=>(
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={news.url} target='_blank' rel="noreferrer">
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>
                    {news.title}
                  </Title>
                  <img maxwidth src={news?.image?.thumbnail?.contenUrl || demoImage}  alt='news' />

                </div>
                <p>
                    {news.descripttion >100
                    ?`${news.description.substring(0,100)}...`
                    :news.description}
                </p>
                <div className='provider-container'>
                <div>
                  {/* <Avatar src={news?.provider[0]?.image?.thumbnail?Avatar.contentUrl|| demoImage} alt='news' /> */}
                  {/* <Text>{moment(news.date).startOf('ss').fromNow()}</Text> */}
                </div>
                <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))
      }
    </Row>
    // <h1> news</h1>
  )
}

export default News
