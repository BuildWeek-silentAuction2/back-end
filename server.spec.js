const db = require('./data/dbConfig.js');

const model = require('./data/seller_auction_model/seller_auction_model.js');

describe('database model', () => {
    describe('sellers models', () => {
        describe('addSeller()', () => {
            it('should return the new ID of ', async () => {
                await db('sellers').truncate();
                let newSeller = ({
                    id: 'test_id',
                    username: 'testseller3',
                    password: 'testseller3',
                    email: 'testseller3@test.com'
                })
                let test = await model.addSeller(newSeller);
                expect(test[0]).toBe(1);
            })
            it('should insert the new seller into the database', async () => {
                let test = await model.getAllSellers();
                expect(test[0].username).toBe('testseller3');
            })
        })
        describe('getAllSellers()', () => {
            it('should get a list of sellers from the db', async () => {
                let test = await model.getAllSellers();
                expect(test.length).toBe(1);
            })
        })
        describe('findSellerByUsername', () => {
            it('should return a seller given a username', async () => {
                let test = await model.findSellerByUsername('testseller3');
                expect(test.email).toBe('testseller3@test.com');
            })
            it('should return undefined if the username does not exist', async () => {
                let test = await model.findSellerByUsername('invalid_username');
                expect(test).toBe(undefined);
            })
        })
        describe('findSellerById', () => {
            it('should return a seller given an id', async () => {
                let test = await model.findSellerById('test_id');
                expect(test[0].email).toBe('testseller3@test.com');
            })
            it('should return an empty array if the id does not exist', async () => {
                let test = await model.findSellerById('invalid_id');
                expect(test[0]).toBe(undefined);
            })
        })
        describe('removeSeller', () => {
            it('should return the number of sellers deleted', async () => {
                let test = await model.removeSeller('test_id');
                expect(test).toBe(1);
            })
            it('should remove the seller from the database', async () => {
                let test = await model.findSellerById('test_id');
                expect(test[0]).toBe(undefined);
            })
        })
    })
})