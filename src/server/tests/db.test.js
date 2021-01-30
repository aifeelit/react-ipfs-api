// const db = require('../db');

// beforeAll(async () => {
//     await db.sequelize.sync();
// });

// test('create user', async () => {
//     expect.assertions(2);
//     const userEmail = 'bobbie@droptables.com';
//     const user = await db.User.create({
//         id: 1,
//         email: userEmail
//     });
//     expect(user.id).toEqual(1);
//     expect(user.email).toEqual(userEmail);
// });

// afterAll(async () => {
//     await db.sequelize.close();
// });
