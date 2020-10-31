const { expect } = require('chai');
const request = require('supertest');

const app = require('../src/app');

describe('GET /', () => {
    it('should return 200 & Hello World', () => {
        request(app)
        .get('/')
        .send({})
        .expect(200)
        .then((res) => {
            expect(res.text).to.be.eql('Hello World');
        });
    });
});

describe('GET /unknown', () => {
    it('trying unknown endpoint should return 404', () => {
        request(app)
        .get('/unknown')
        .send({})
        .expect(404)
        .then((res) => {
        });
    });
});