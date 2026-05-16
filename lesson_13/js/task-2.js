"use strict";
const namesAthletes = ["Олександр", "Степан", "Ярослав"];
document.write(`<p>Список спортсменів: ${namesAthletes.join(", ")}</p><br>`);
function generateCompetitionResults(athletes) {
    const result = [];
    const used = Array(athletes.length).fill(false);
    function backtrack(currentOrder) {
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
const allResults = generateCompetitionResults(namesAthletes);
allResults.forEach((result, index) => {
    document.write(`<b>Варіант ${index + 1}</b><br>`);
    result.forEach((name, place) => {
        document.write(`${place + 1} місце — ${name}<br>`);
    });
    document.write("<br>");
});
document.write(`<b>Всього варіантів: ${allResults.length}</b>`);
