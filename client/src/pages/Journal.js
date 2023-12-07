import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import journalController from "../controllers/journalController";

function Journal({ user, setUser }) {
    const navigate = useNavigate();

    const [journal, setJournal] = useState({});  
    const [formData, setFormData] = useState({title: "", description: "", public: false});

    useEffect(() => {
        if (Object.keys(journal).length === 0) {
            journalController.fetchPosts().then(res => {
                setJournal(res.data.journalPosts)
            }).catch(err=>{ console.log(err)} );
        }
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handlePostSumbission = async (event, history) => {
        event.preventDefault();

        const request = await journalController.addPost(formData).then(res => {
            setFormData({title: "", description: "", public: false})
        });
        
        //navigate('/login', {state: { data: request.data }});
    }

    return (
        <div className="container my-5 pt-5">
            Welcome to your journal
            <p className="text-end">
                <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#createPost" aria-expanded="false" aria-controls="createPost">
                    Add post
                </button>
            </p>
            <div className="collapse" id="createPost">
                <div className="card card-body">
                    <form onSubmit={handlePostSumbission}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="post_title" name='title' value={formData.title} onChange={handleChange} placeholder="Title" />
                            <label htmlFor="post_title">Title</label>
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Description" id="post_description" name='description' value={formData.description} onChange={handleChange} style={{height: '200px'}}></textarea>
                            <label htmlFor="post_description">Description</label>
                        </div>
                        
                        <button type="submit" className="my-2 btn btn-dark">ADD</button>
                    </form>
                </div>
            </div>
            <div>
                
                {Object.keys(journal).map((key, i) => {
                    return <React.Fragment key={i}> 
                            <div className="card mb-3">
                                <div className="card-body">
                                        <p className="fs-4">
                                            {journal[key].title}
                                        </p>
                                        {journal[key].description}<br />
                                        {journal[key].pubic}
                                </div>
                            </div>
                            </React.Fragment>
                })}
            </div>
        </div>
    );
}

export default Journal;