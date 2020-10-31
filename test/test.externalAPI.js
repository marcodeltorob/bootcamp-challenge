const { expect, assert } = require('chai');
const request = require('supertest');

const app = require('../src/app');

describe('GET /posts', () => {
    it('should return 200 & posts', () => {
        return request(app)
        .get('/posts')
        .send({})
        .expect(200)
        .expect((res) => {
            assert.isObject(res, 'we receive an object');
        })
    });
});

describe('GET /posts/id', () => {
    it('should return 200 & desired post', () => {
        return request(app)
        .get('/posts/1')
        .send({})
        .expect(200)
        .expect((res) => {
            assert.isObject(res, 'we receive an object');
        });
    });
});

describe('POST /posts', () => {
    it('should return 201 & a new post', () => {
        return request(app)
        .post('/posts')
        .send({
            userId: 1,
            title: 'POST Title',
            body: 'POST Body'
        })
        .expect(201)
        .expect((res) => {
           assert.deepEqual(res.body ,{userId: 1, title: 'POST Title', body: 'POST Body', id: 101 }, 'updated post received');
        });
    });
});

describe('PUT /posts/id', () => {
    it('should return 200 & desired post', () => {
        return request(app)
        .put('/posts/1')
        .send({
            title: 'New Title',
            body: 'New Body'
        })
        .expect(200)
        .expect((res) => {
           assert.deepEqual(res.body ,{ title: 'New Title', body: 'New Body', id: 1 }, 'updated post received');
        });
    });
});

describe('DELETE /posts/id', () => {
    it('should return 200 & message', () => {
        return request(app)
        .delete('/posts/1')
        .send({})
        .expect(200)
        .expect((res) => {
           assert.deepEqual(res.body.message , 'Post with id: 1 has been deleted', 'post deleted');
        });
    });
});

