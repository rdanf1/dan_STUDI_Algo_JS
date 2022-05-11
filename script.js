const poem = prompt("Entrer a poem")
const n = poem.length
for (let i = 1; i <= n; i++) {
  console.log(poem[n - i])
}