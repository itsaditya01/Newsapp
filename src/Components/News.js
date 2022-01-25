import React from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';

export default function News(props) {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(20);
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        props.setProgress(80);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        let newCategory = capitalizeFirstLetter(props.category);
        document.title = `${props.category.toUpperCase()} - NEWSMONKEY APP`;
        document.getElementById("headline").innerHTML = `NewsMonkey - Top ${newCategory} Headlines`;
        updateNews();
    }, [])


    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        console.log(parsedData)

    }


    return (
        <div className="container my-3">
            <h2 className="text-center" id="headline">NewsMonkey - Top Headlines</h2>
            {/* {loading && <Loading />} */}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}
            >
                <div className="container">
                    <div className="row my-3">
                        {articles.map((element) => {
                            return <div className="col-lg-4 col-md-6 my-3 d-flex justify-content-center" key={element.url}>
                                <NewsItem title={element.title} desc={element.content} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )

}
