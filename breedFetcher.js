const request = require('request');
const breedName = process.argv[2];
const fetchBreedDescription = function() {
   request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(err,result,body) => {
  
    if (err !== null) {
      console.log('The URL is broken, it may contain a typo.');
      return 'The URL is broken, it may contain a typo.';
    }
    
    body = JSON.parse(body);
    let descr = body[0];
    //let desc = descr['description']
    err = JSON.parse(err);
  
  
    if (descr === undefined) {
      console.log('That breed can not be found.');
      return 'That breed can not be found.'
    } else  {
      console.log(`Description: ${descr['description']}`);
      return descr['description'];
    }
  
  
  
  
  });
};

console.log(fetchBreedDescription());
module.exports = { fetchBreedDescription };

// use the cmdline input for the name and search the object
// concatenate the string from the id to the request above in order to search for the cat.


