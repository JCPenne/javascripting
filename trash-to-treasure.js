const garbageCount = {
  waste: 0,
  recycling: 0,
  compost: 0
};


const smartGarbage = function (trash, bins) {
  if (trash === 'recycling') {
    garbageCount.recycling = bins.recycling + 1;
    garbageCount.waste = bins.waste;
    garbageCount.compost = bins.compost;
    return garbageCount;
  } else if (trash ==='waste') {
    garbageCount.recycling = bins.recycling;
    garbageCount.waste = bins.waste + 1;
    garbageCount.compost = bins.compost;
    return garbageCount;
    } else if (trash === 'compost') {
      garbageCount.recycling = bins.recycling;
      garbageCount.waste = bins.waste;
      garbageCount.compost = bins.compost + 1;
    };
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
console.log(garbageCount);
