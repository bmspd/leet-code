function predictPartyVictory(senate: string): string {
  const arrSenate = senate.split('')
  const votes = {
    dire: 0,
    radiant: 0,
    turn: senate[0]
  }
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') votes.radiant++
    else votes.dire++
  }
  let i = 0;
  while (votes.radiant && votes.dire) {
    while (arrSenate[i] === 'B') i++
    if (i === arrSenate.length) {
      i = 0;
      continue
    }
    votes.turn = arrSenate[i]
    const first = arrSenate.indexOf(votes.turn === 'R' ? 'D' : 'R')
    const second = arrSenate.indexOf(votes.turn === 'R' ? 'D' : 'R', i)
    if (second === -1) arrSenate[first] = 'B'
    else arrSenate[second] = 'B'
    if (votes.turn === 'R') votes.dire--
    else votes.radiant--
    i++
    if (i === arrSenate.length) i = 0
  }
  return votes.radiant ? 'Radiant' : 'Dire'
}

console.log(predictPartyVictory("RD") === 'Radiant')
console.log(predictPartyVictory("RDD") === 'Dire')
console.log(predictPartyVictory("DDRRR") === 'Dire')
console.log(predictPartyVictory("RRDRDDRDRRDDDDDRDRDR") === 'Radiant')