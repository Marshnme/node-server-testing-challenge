const request = require("supertest");
const server = require("./server");



describe('server', () => {
    describe('GET /smash', () => {
        it('should return 200 OK', () => {
            return request(server).get('/smash').then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return JSON data', () => {
            return request(server).get('/smash').then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
    describe('POST /smash', () => {
        it('should return 200 OK', () => {
            return request(server).post('/smash').send({name:"Bowser"}).then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return JSON data', () => {
            return request(server).post('/smash').send({name:"Bowser"}).then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
    describe('PUT /smash/:id', () => {
        it('should return 200 OK', () => {
            return request(server).put('/smash/1').send({id:1,name:"newname"}).then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return JSON data', () => {
            return request(server).put('/smash/1').send({id:1,name:"newname"}).then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
    describe('DELETE /smash/:id', () => {
        it('should return 200 OK', () => {
            return request(server).delete('/smash/1').send({id:1}).then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return JSON data', () => {
            return request(server).put('/smash/1').send({id:1}).then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
})