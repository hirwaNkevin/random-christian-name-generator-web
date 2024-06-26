import * as namePool from './name-pool';

export function generateFullName(): string {
    let result: string = '';
    let firstName: string = namePool.firstNamePool[Math.floor(Math.random() * namePool.firstNamePool.length)];
    let lastName: string = namePool.lastnamePool[Math.floor(Math.random() * namePool.lastnamePool.length)];
    // console.log('random number : ' + Math.floor(Math.random()));
    // console.log('firstname array length : ' + namePool.firstNamePool.length);
    // console.log('lastname array length : ' + namePool.lastnamePool.length);
    // console.log('random firstname index : ' + Math.floor(Math.random() * namePool.firstNamePool.length));
    // console.log('random lastname index : ' + Math.floor(Math.random() * namePool.lastnamePool.length));
    // console.log('firstname: ' + firstName);
    // console.log('lastName: ' + lastName);
    // console.log(`${firstName + ' ' + lastName}`);
    result = `${firstName + ' ' + lastName}`;
    return result;
}