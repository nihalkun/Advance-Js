
  url =  getapi("https://api.github.com/search/repositories?q=node}")

    async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    data.items.forEach(function(i){
        let Data = {
            "name" : data.name,
            "full_name" : data.full_name,
            "private" : data.private,
            "owner" : {
                "login" : data.owner.login,
                "name" : data.owner.url,
                "followersCount" : data.owner.url,
                "followingCount" : data.owner.url
            },
            "licenseName" : data.license.name,
            "score" : data.score,
            "numberOfBranch" : count(data.branches_url)
        }
     })
}
