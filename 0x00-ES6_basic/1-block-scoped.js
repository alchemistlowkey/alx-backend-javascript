export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = false;
    const task2 = true;
    return [task, task2];
  }

  return [task, task2];
}
