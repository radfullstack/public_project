import NewsList from "../components/news/NewsList";

function Dashboard({ user, setUser }) {

    return (
        <div className="container my-5 pt-5">
        Dashboard
            <div className="row">
                <div className="col-12 col-md-6">
                    
                </div>
                <div className="col-12 col-md-6">
                    <NewsList user={user} setUser={setUser}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;