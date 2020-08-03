// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('#fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', () => {
    let cat = 'siberian';
    assert.equal(fetchBreedDescription(cat),'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.' )
  });


  
  it('returns a string description for a valid breed, via callback', () => {
    let cat = 'ironman';
    assert.equal(fetchBreedDescription(cat),'That breed can not be found.' )
  });





});

