import md5 from 'crypto-js/md5'
import sha1 from 'crypto-js/sha1'

const generateEasyRemeberPassword = () => {
  let vowels = 'aeiou'
  let consonants = 'bcdfghjklmnpqrstvwxyz'
  let result = ''

  result += consonants[getRandomNumber(consonants.length - 1)]
  result += vowels[getRandomNumber(vowels.length - 1)]
  result += consonants[getRandomNumber(consonants.length - 1)]
  result += vowels[getRandomNumber(vowels.length - 1)]
  result += vowels[getRandomNumber(vowels.length - 1)]
  result += consonants[getRandomNumber(consonants.length - 1)]

  return result
}

const generatePassword = (selectedTypes, passwordLength) => {
  if (
    selectedTypes.lower ||
    selectedTypes.upper ||
    selectedTypes.numeric ||
    selectedTypes.special
  ) {
    let resultPassword = []

    for (let i = 0; i < passwordLength; i++) {
      resultPassword.push(null)
    }

    let numeric = selectedTypes.numeric
    let lower = selectedTypes.lower
    let upper = selectedTypes.upper
    let special = selectedTypes.special
    let type = null

    for (let i = 0; i < passwordLength; i++) {
      // check if all types are at least used once
      if (numeric) {
        type = 'numeric'
        numeric = false
      } else if (lower) {
        type = 'lower'
        lower = false
      } else if (upper) {
        type = 'upper'
        upper = false
      } else if (special) {
        type = 'special'
        special = false
      } else {
        type = 'random'
      }

      resultPassword[
        findRandomNonUsedPosition(resultPassword, passwordLength)
      ] = getRandomSymbol(type, selectedTypes)
    }

    return resultPassword.join('')
  } else {
    throw 'Mindestens eine Symbolart muss ausgewählt sein.'
  }
}

const findRandomNonUsedPosition = (password, passwordLength) => {
  let randomPosition = getRandomNumber(passwordLength - 1)

  if (
    password[randomPosition] !== null ||
    typeof password[randomPosition] == 'undefined'
  ) {
    randomPosition = findRandomNonUsedPosition(password, passwordLength)
  }
  return randomPosition
}

const getRandomSymbol = (type, selectedTypes) => {
  let numeric = '1234567890'
  let lowerAlphabet = 'abcdefghijklmopqrstuvwxyz'
  let upperAlphabet = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'
  let specialChars = '!{}=$%&#+*<>'

  let symbol = ''

  switch (type) {
    case 'numeric': {
      symbol = numeric[getRandomNumber(numeric.length - 1)]
      break
    }

    case 'lower': {
      symbol = lowerAlphabet[getRandomNumber(lowerAlphabet.length - 1)]
      break
    }

    case 'upper': {
      symbol = upperAlphabet[getRandomNumber(upperAlphabet.length - 1)]
      break
    }

    case 'special': {
      symbol = specialChars[getRandomNumber(specialChars.length - 1)]
      break
    }

    default: {
      let base = ''

      if (selectedTypes.numeric) {
        base += numeric
      }

      if (selectedTypes.lower) {
        base += lowerAlphabet
      }

      if (selectedTypes.upper) {
        base += upperAlphabet
      }

      if (selectedTypes.special) {
        base += specialChars
      }

      symbol = base[getRandomNumber(base.length - 1)]
      break
    }
  }

  return symbol
}

const getRandomNumber = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateHash = (username, password, cryptType = 'md5') => {
  if (!username || !password) throw 'Bitte Nutzername und Passwort eingeben.'

  let hash = ''

  switch (cryptType) {
    case 'md5':
      hash = md5(password).toString()
      break
    case 'sha1':
      hash = sha1(password).toString()
      break
  }

  return `${username}:${hash}`
}

export default {
  generatePassword,
  generateHash,
}
