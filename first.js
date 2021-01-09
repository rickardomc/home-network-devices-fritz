const readline = require("readline")
const fs = require('fs')
const { mainModule } = require("process")
const puppeteer = require('puppeteer')


let handleCredentials = async () => {
   console.log(!fs.existsSync('credentials.json'))
   if (!fs.existsSync('credentials.json')) {
      const a = await generateCredentialsFile() //deve ritornare i due parametri
   }
   return await true
}

let readCredentials = async() => {
   let rawdata = fs.readFileSync('credentials.json')
   let credentials = JSON.parse(rawdata)
   return await credentials
}


const main = () => {
   handleCredentials()
      .then(inutile => readCredentials())
      .then(credentials =>
         (
            console.log(credentials.username)
         )()
      )
}

const generateCredentialsFile = async () => {
   const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
   })

   rl.question("type your username ", function (username) {
      rl.question("type your password ", function (password) {
         fs.writeFileSync('credentials.json', `{\n\t"username": "${username}", \n\t"password": "${password}"\n}`)
         console.log('created credentials.json')
         rl.close()
         return await
      })
   })
}

main()

