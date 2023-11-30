function submit()
{
    const options = {
        method: 'post',
        headers: {
        'Cache-Control': 'no-cache',
        Accept: '*/*',
        'User-Agent': 'Fetch Client',
        'Accept-Encoding': 'gzip, deflate',
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': 'YOUR KEY'
        },
        body: '{"kind":"SentimentAnalysis","analysisInput":{"documents":[{"id":"documentId","text":"I bought a size S and it fit perfectly. I found the zipper a little bit difficult to get up & down due to the side rushing. The color and material are beautiful in person. Amazingly comfortable!","language":"en"}]},"parameters":{"opinionMining":false}}'
    };
    
    fetch('https://website1ls.cognitiveservices.azure.com/language/:analyze-text?api-version=2022-05-01', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
