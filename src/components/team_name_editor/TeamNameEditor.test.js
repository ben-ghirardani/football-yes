import teamNameEditor from './TeamNameEditor.js'

test('AFC Manchester United FC becomes Manchester Utd', ()=> {
  expect(teamNameEditor("AFC Manchester United FC")).toBe("Manchester Utd");
})