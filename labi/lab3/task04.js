const ut = require('./ut00');

const groupName = 'ПИб-1';

const groupId = ut.getGroupId(groupName);

console.log(
    ut.getAdultStudents()
        .filter(g => g.idGr === groupId)
)

