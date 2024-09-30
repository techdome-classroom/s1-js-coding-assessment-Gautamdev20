function isValid(s) {
    const matchingBracket = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    const stack = [];

    for (let char of s) {
        if (matchingBracket[char]) {
            const topElement = stack.length ? stack.pop() : '#';
            if (topElement !== matchingBracket[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}
