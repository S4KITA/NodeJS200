const listUser = [
    {name: 'kyeongrok', age: 31},
    {name: 'jihyun', age: 31},
    {name: 'minsup', age: 35}
];

listUser.forEach(function (user) {
    console.log(user);
});
console.log('--------------------------');
listUser.forEach(user => console.log(user));