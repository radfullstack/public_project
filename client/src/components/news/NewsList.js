import React, { useEffect, useState } from "react";
import newsController from "../../controllers/newsController";
import userController from "../../controllers/userController";
import NewsItem from "./NewsItem";
export default function NewsList( { user, setUser }) {
    const [news, setNews] = useState(newsController.news);  
    const [sources, setSources] = useState({});  
    const updateCheckbox = async (e) => {
        e.preventDefault();
        const { name, checked } = e.target;
        const formData = {
            newsSources: {
                [name]: checked
            }
        }
        userController.update(formData).then(res => {
            res.data.user.loggedIn = true;
            setUser(res.data.user)
            newsController.fetchNews().then(res => {
                setSources(res.data.newsSources)
                setNews(res.data.news)
            }).catch(err=>{ console.log(err)})
        }).catch(err=>{ console.log(err)} )
        
       
    }
    useEffect(() => {
        if (news.length === 0) {
            newsController.fetchNews().then(res => {
                setSources(res.data.newsSources)
                setNews(res.data.news)
            }).catch(err=>{ console.log(err)} );
        }
    }, []);
    return (
    <div>
        <p>News:</p>
        <div className="dropdown-center d-flex justify-content-end">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Choose media sources
            </button>
            <div className="dropdown-menu p-0" onClick={function (e) {e.stopPropagation()}}>
                <div className="btn-group-vertical w-100" role="group" aria-label="Basic checkbox toggle button group">
                    {Object.keys(sources).map((key, i) => {
                        return <React.Fragment key={i}> 
                                <input type="checkbox" className="btn-check" id={key} name={key} onChange={updateCheckbox} autoComplete="off" checked={ user.userPrefs === undefined ? '' : user.userPrefs.newsSources[key] ? 'checked' : '' } />
                                <label className="btn text-start btn-outline-secondary" htmlFor={key}>{'[' + sources[key].country + '] '}{sources[key].name}</label>
                                </React.Fragment>
                    })}
                </div>
            </div>
        </div>
            
        <div style={{overflowY: 'scroll', height: '500px'}}>
            {news.length === 0 ? <p className="text-center mt-4 pt-4">Pickup some news sources and start scrolling!</p> : news.map((item, i) => {
                return <NewsItem item={item} key={i} />;
            })}
        </div>
    </div>
    );
}