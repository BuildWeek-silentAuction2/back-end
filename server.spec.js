const db = require('./data/dbConfig.js');

const model = require('./data/seller_auction_model/seller_auction_model.js');

describe('database model', () => {
    describe('sellers models', () => {
        describe('addSeller()', () => {
            it('should return the number of inserted sellers', async () => {
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
                let test = await model.findSellerById('test_id');
                expect(test[0].username).toBe('testseller3');
            })
        })
        describe('getAllSellers()', () => {
            it('should get a list of sellers from the database', async () => {
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
        describe('updateSeller', () => {
            it('should return the number of updated records', async () => {
                let changes = { email: 'testseller4@test.com' }
                let test = await model.updateSeller('test_id', changes)
                expect(test).toBe(1);
            })
            it('should successfully update the records', async () => {
                let test = await model.findSellerById('test_id');
                expect(test[0].email).toBe('testseller4@test.com')
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
    describe('buyers models', () => {
        describe('addBuyer()', () => {
            it('should return the number of inserted buyers', async () => {
                await db('buyers').truncate();
                let newBuyer = {
                    id: 'test_id',
                    username: 'testbuyer6',
                    password: 'testbuyer6',
                    email: 'testbuyer6@test.com'
                }
                let test = await model.addBuyer(newBuyer);
                expect(test[0]).toBe(1);
            })
            it('should insert the new buyer into the database', async () => {
                let test = await model.findBuyerByUsername('testbuyer6');
                expect(test.email).toBe('testbuyer6@test.com');
            })
        })
        describe('getAllBuyers()', () => {
            it('should get a list of all the buyers in the database', async () => {
                let test = await model.getAllBuyers();
                expect(test.length).toBe(1);
            })
        })
        describe('findBuyerByUsername', () => {
            it('should return a buyer given a username', async () => {
                let test = await model.findBuyerByUsername('testbuyer6');
                expect(test.email).toBe('testbuyer6@test.com');
            })
            it('should return undefined when given an invalid username', async () => {
                let test = await model.findBuyerByUsername('invalid_username')
                expect(test).toBe(undefined);
            })
        })
        describe('updateBuyer()', () => {
            it('should return the number of records updated', async () => {
                let changes = { email: 'testbuyer7@test.com' }
                let test = await model.updateBuyer('test_id', changes)
                expect(test).toBe(1);
            })
            it('should successfully update the record', async () => {
                let test = await model.findBuyerByUsername('testbuyer6')
                expect(test.email).toBe('testbuyer7@test.com');
            })
        })
        describe('deleteBuyer()', () => {
            it('should return the number of records deleted', async () => {
                let test = await model.removeBuyer('test_id')
                expect(test).toBe(1);
            })
            it('should successfully delete the buyer', async () => {
                let test = await model.findBuyerByUsername('testbuyer6')
                expect(test).toBe(undefined);
            })
        })
    })
})