(() => {
  const lookup = { Mara: 'Mara → Eintrag vorhanden: feste Zuordnung aus der Tabelle.', Omar: 'Omar → Eintrag vorhanden: feste Zuordnung aus der Tabelle.', Neu: 'Neuer Name → kein Ergebnis: Ein Algorithmus ohne passende Regel kann nicht aus Erfahrung raten.' };
  const lookupRun = document.querySelector('#lookup-run');
  if (lookupRun) lookupRun.addEventListener('click', () => { document.querySelector('#lookup-result').textContent = lookup[document.querySelector('#lookup-name').value]; });
  let examples = 2;
  const updateLearning = text => { const percentage = Math.min(85, 15 + examples * 15); document.querySelector('#learning-bar').style.width = `${percentage}%`; document.querySelector('#learning-result').textContent = text; };
  const more = document.querySelector('#train-more');
  if (more) more.addEventListener('click', () => { examples += 1; updateLearning(`Jetzt ${examples} Beispielgruppen: Das Modell passt seine Grenze an. Mehr Daten helfen nur, wenn sie vielfältig und passend sind.`); });
  const test = document.querySelector('#train-test');
  if (test) test.addEventListener('click', () => { updateLearning(examples < 4 ? 'Neuer Fall: noch unsicher. Wenige Beispiele können keine robuste Regel garantieren.' : 'Neuer Fall: plausiblere Zuordnung – aber weiterhin nur eine Vorhersage, keine Gewissheit.'); });
})();
