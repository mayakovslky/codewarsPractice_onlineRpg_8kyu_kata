// 3. Online RPG: player to qualifying stage?

function playerRankUp (points) {
  if (points > 99) {
    return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
  }
  return false;
}