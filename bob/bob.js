//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
    const trimmed = message.trim()
  
    if (trimmed === "") {
      return "Fine. Be that way!"
    }
  
    const letters = /[a-zA-Z]/g
    const hasLetters = letters.test(trimmed)
  
    if (hasLetters && trimmed === trimmed.toUpperCase()) {
      if (trimmed.endsWith("?")) {
        return "Calm down, I know what I'm doing!"
      } else {
        return "Whoa, chill out!"
      }
    }
  
    if (trimmed.endsWith("?")) {
      return "Sure."
    } else {
      return "Whatever."
    }
  };
