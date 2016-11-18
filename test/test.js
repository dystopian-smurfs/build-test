import request from 'supertest';
import express from 'express';
import { expect } from 'chai';

import app from '../server.js';

describe('routes', function() {

  it('request to unkown url should return 404', function(done) {
    request(app).get('/somethingfunny').expect(404).end(done);
  });

});