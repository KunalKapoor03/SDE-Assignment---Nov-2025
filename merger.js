
const mergeTimeRanges = (ranges, threshold) => {
 
  if (!ranges || ranges.length === 0) {
    return [];
  }

  ranges.sort((a, b) => a[0] - b[0]);
  
  const mergedRanges = [ranges[0]];


  for (let i = 1; i < ranges.length; i++) {
    const currentRange = ranges[i];
    const lastMergedRange = mergedRanges[mergedRanges.length - 1];

    const currentStart = currentRange[0];
    const currentEnd = currentRange[1];
    const lastEnd = lastMergedRange[1];

    const gap = currentStart - lastEnd;

    if (gap < threshold) {
      lastMergedRange[1] = Math.max(lastEnd, currentEnd);
    } else {
      mergedRanges.push(currentRange);
    }
  }

  return mergedRanges;
};

module.exports = {
  mergeTimeRanges,
};
