/* eslint-disable quotes */
'use strict';

const chai = require('chai');
const expect = chai.expect;
const app = require('../app');
const request = require('supertest');

let dataActionAndRating = [{"App":"ROBLOX","Category":"GAME","Rating":4.5,"Reviews":"4447388","Size":"67M","Installs":"100,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone 10+","Genres":"Adventure;Action & Adventure","Last Updated":"July 31, 2018","Current Ver":"2.347.225742","Android Ver":"4.1 and up"},{"App":"slither.io","Category":"GAME","Rating":4.4,"Reviews":"5234162","Size":"Varies with device","Installs":"100,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone","Genres":"Action","Last Updated":"November 14, 2017","Current Ver":"Varies with device","Android Ver":"2.3 and up"},{"App":"Temple Run 2","Category":"GAME","Rating":4.3,"Reviews":"8118609","Size":"62M","Installs":"500,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone","Genres":"Action","Last Updated":"July 5, 2018","Current Ver":"1.49.1","Android Ver":"4.0 and up"},{"App":"Helix Jump","Category":"GAME","Rating":4.2,"Reviews":"1497361","Size":"33M","Installs":"100,000,000+","Type":"Free","Price":"0","Content Rating":"Everyone","Genres":"Action","Last Updated":"April 9, 2018","Current Ver":"1.0.6","Android Ver":"4.1 and up"},{"App":"Zombie Hunter King","Category":"GAME","Rating":4.3,"Reviews":"10306","Size":"50M","Installs":"1,000,000+","Type":"Free","Price":"0","Content Rating":"Mature 17+","Genres":"Action","Last Updated":"August 1, 2018","Current Ver":"1.0.8","Android Ver":"2.3 and up"},{"App":"Kick the Buddy","Category":"GAME","Rating":4.3,"Reviews":"1000417","Size":"Varies with device","Installs":"50,000,000+","Type":"Free","Price":"0","Content Rating":"Teen","Genres":"Action","Last Updated":"July 5, 2018","Current Ver":"Varies with device","Android Ver":"4.4 and up"}];




describe('Test our Play store GET method', ()=>{
  
  it('GET /apps with both fields', ()=>{
    return request(app)
      .get('/apps')
      .query({genre: 'Action', Sort: 'Rating'})
      .expect(200, dataActionAndRating);
  });

  it('GET /apps with bad genre', ()=>{
    return request(app)
      .get('/apps')
      .query({genre: 'AcXCCXtion', Sort: 'Rating'})
      .expect(400, 'That Genre is not existent. PLease check it');
  });

  it('GET /apps with no sort and bad genre', ()=>{
    return request(app)
      .get('/apps')
      .query({genre: 'AcXCCXtion'})
      .expect(400, 'That Genre is not existent. PLease check it');
  });
  it('GET /apps with no sort', ()=>{
    return request(app)
      .get('/apps')
      .query({genre: 'Action'})
      .expect(400, 'That Genre is not existent. PLease check it');
  });

  it('GET /apps with bad sort', ()=>{
    return request(app)
      .get('/apps')
      .query({sort: 'AcXCCXtion'})
      .expect(400, 'That is not a sort option. Possibliy check your casing');
  });

  it('GET /apps with no fields', ()=>{
    return request(app)
      .get('/apps')
      .query()
      .expect(400, 'That is not a sort option. Possibliy check your casing');
  });

  it('GET /apps with bad route', ()=>{
    return request(app)
      .get('/ay')
      .query()
      .expect(404, 'That resource does not exist');
  });

});



