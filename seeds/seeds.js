const sequelize = require('../config/connection');
const { User, D20_Character } = require('../models');

const userData = require('./userData.json');
const characterData = require('./characterData.json');

const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        const users = await User.bulkCreate(userData, {
            individualHooks:true,
            returning: true
        });

        for(const char of characterData) {
            await D20_Character.create({
                ...char,
                user_id: users[Math.floor(Math.random() * users.length)].id,
            })
        }
        console.log("Database Seeded!");
    } catch(err) {
        console.log(err);
    }
    process.exit(0);
}

seedDatabase();