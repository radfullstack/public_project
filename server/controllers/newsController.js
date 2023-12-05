const axios = require('axios');
let RSSParser = require('rss-parser');

async function fetchNews(req, res) {
    try {
        // Get reqest data
        // const { newsSources, newsCategories, pagination } = req.body;
        const userSources = req.user.userPrefs === undefined ? [] : req.user.userPrefs.newsSources

        const newsSources = {
            bbc_world: {
                name: 'BBC News',
                country: 'World',
                url: 'https://feeds.bbci.co.uk/news/video_and_audio/world/rss.xml'
            },
            bbc_uk: {
                name: 'BBC News',
                country: 'UK',
                url: 'https://feeds.bbci.co.uk/news/uk/rss.xml'
            },
            polsat: {
                name: 'Polsat News',
                country: 'PL',
                url: 'https://www.polsatnews.pl/rss/polska.xml'
            },
            theregister: {
                name: 'TheRegister News',
                country: 'World',
                url: 'https://www.theregister.com/headlines.atom'
            },
            computerworld: {
                name: 'ComputerWorld News',
                country: 'World',
                url: 'https://www.computerworld.com/uk/index.rss'
            },
            techadvisor: {
                name: 'TechAdvisor News',
                country: 'World',
                url: 'https://www.techadvisor.com/feed'
            }
        }
       const parser = new RSSParser();
        let items = []
        const parse = async newsTag => {
            const feed = await parser.parseURL(newsSources[newsTag].url)
            return feed.items
        }
        await Promise.all(
            Object.keys(userSources).map(async (key) => {
                if (userSources[key]) {
                    var feed = await parse(key)
                    items = items.concat(feed)
                    return items
                }
            })
        )
        // sort news by date
        items.sort(function(a,b){
            return new Date(b.isoDate) - new Date(a.isoDate);
        });
        // Respond
        res.status(200).send({ status: "success", message: "News fetched", news: items, newsSources: newsSources });
    } catch (err) {
        console.log(err)
        // Respond with error
        res.status(400).send({ status: "error", message: "Couldn't get news", error: err });
    }
}

module.exports = {
    fetchNews,
};