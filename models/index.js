const User = require('./User');
const D20_Character = require('./D20_Character');

User.hasMany(D20_Character, {
    foreignKey:'creator_id',
    onDelete:'CASCADE'
});

D20_Character.belongsTo(User, {
    foreignKey:'creator_id'
});

module.exports = { User, D20_Character };