const request = require('request');

let commandLineInput = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${commandLineInput}`,(err,result,body) => {
  
  if (err !== null) {
    console.log('The URL is broken, it may contain a typo.');
  }
  
  body = JSON.parse(body);
  let object1 = body[0];
  err = JSON.parse(err);


  if (object1 === undefined) {
    console.log('That breed can not be found.');
  } else  {
    console.log(`Description: ${object1['description']}`);
  }




});





// use the cmdline input for the name and search the object
// concatenate the string from the id to the request above in order to search for the cat.



