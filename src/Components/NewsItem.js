import React from 'react'

export default function NewsItem(props) {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={!props.imageUrl ? 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg' : props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <a href={props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-danger">Read more</a>
                </div>
            </div>
        </div>
    )

}


