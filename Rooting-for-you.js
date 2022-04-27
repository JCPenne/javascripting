const judgeVegetable = function (vegetables, metric) {
  let scoreTracker = 0;
  let submitterTracker = '';


  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > scoreTracker) {
      scoreTracker = vegetables[i][metric];
      submitterTracker = vegetables[i].submitter;
    }
  }
  return submitterTracker;
};


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    d: 45,
    redness: 8
  },
  {
    submitter: 'Sally Tomato-Grower',
    d: 25,
    redness: 10
  },
  {
    submitter: 'Hamid Hamidson',
    d: 10,
    redness: 50
  }
]

const metric = 'redness'

let result = judgeVegetable(vegetables, metric);
console.log(result)