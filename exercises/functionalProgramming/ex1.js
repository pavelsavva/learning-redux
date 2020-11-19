let input = { tag: "JAVASCRIPT" } 
let output = "(javascript)"

function wrapInParentheses (input) {
  return `(${input})`
}

const transform = _.flow(String.toLowerCase, wrapInParentheses)

console.log(output === transform(input.tag))