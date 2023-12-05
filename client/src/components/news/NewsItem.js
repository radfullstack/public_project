

export default function NewsItem({ item }) {
    
    const websiteUrl = item.link
    const website = websiteUrl.split('https://').pop().split('/')[0]
    

    return (
        <div className="card mb-2">
            <div className="card-header">
                <div className="row">
                    <div className="col-auto">
                        <a href={item.link} target="_blank" className="fw-bold">{item.title}</a>
                    </div>
                    <div className="col text-end">
                    <cite className="me-2">{item.pubDate} @ {website}</cite>
                        <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE%2CSIZE%2CURL&url=http://${website}&size=32`} />
                    </div>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text" dangerouslySetInnerHTML={{__html: item.content}}></p>
                {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
            </div>
        </div>
    );
}