var interpret = function(command) {
    let str = '';
    const splitStr = command.split('');
    
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === 'G') {
            str = str.concat('G');
        } else if (splitStr[i] === '(' && splitStr[i + 1] === 'a') {
            str = str.concat('al')
            i += 3;
        } else {
            str = str.concat('o');
            i += 1
        }
    }
    
    return str;
};
