let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfa'))
console.log(isValidPassword('asdf123488'))
console.log(isValidPassword('asdfaASDpassword'))