function submit()
{
    body={}
    body['review']=document.getElementById("review").value
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
        body: JSON.stringify(body)
    };
    
    fetch('https://prod-04.eastus.logic.azure.com:443/workflows/4c1dc9a6b6744c59a313e3a85ab5af03/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=D8bYEXdBZ1zedTpSmLZ3Wmuw3bXktrnKTajAFnVQQ_4', options)
        .then(response => response.json())
        .then(response () => {
            console.log(response))
            document.getElementById('response').innerHTML=response
        }
        .catch(err => console.error(err));
}
