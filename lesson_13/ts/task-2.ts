const namesAthletes: string[] = ["Олександр", "Степан", "Ярослав"];

document.write(`<p>Список спортсменів: ${namesAthletes.join(", ")}</p><br>`);

function generateCompetitionResults(athletes: string[]): string[][] {
  const result: string[][] = [];
  const used: boolean[] = Array(athletes.length).fill(false);

  function backtrack(currentOrder: string[]): void {
    if (currentOrder.length === athletes.length) {
      result.push([...currentOrder]);
      return;
    }

    for (let i = 0; i < athletes.length; i++) {
      if (!used[i]) {
        used[i] = true;
        currentOrder.push(athletes[i]);

        backtrack(currentOrder);

        currentOrder.pop();
        used[i] = false;
      }
    }
  }

  backtrack([]);
  return result;
}

const allResults: string[][] = generateCompetitionResults(namesAthletes);

allResults.forEach((result: string[], index: number): void => {
  document.write(`<b>Варіант ${index + 1}</b><br>`);

  result.forEach((name: string, place: number): void => {
    document.write(`${place + 1} місце — ${name}<br>`);
  });

  document.write("<br>");
});

document.write(`<b>Всього варіантів: ${allResults.length}</b>`);
