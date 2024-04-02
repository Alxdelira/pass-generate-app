export default function generatePass() {
    let pass: string = ''
    let characters: string = 'Aa@#$%&*1234567890JjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!&_?qwertyuiopasdfghjklzxcvbnm'
    let passWordLength = 8
    for (let i = 0; i < passWordLength; i++) {
        pass += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }
    return pass
}