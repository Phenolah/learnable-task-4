class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
      this.sortedData = data.sort();
    }
  
    // Mean
    mean() {
      const sum = this.data.reduce((x, y) => x + y, 0);
      return sum / this.data.length;
    }
  
    // Median
    median() {
        if (this.sortedData.length % 2 === 0) {
          const x = this.sortedData[(this.sortedData.length / 2) - 1];
          const y = this.sortedData[this.sortedData.length / 2];
          return (x + y) / 2
        }
    
        return this.sortedData[Math.floor(this.sortedData.length / 2)];
      }
  
    // Range
    range() {
      return this.sortedData[this.sortedData.length - 1] - this.sortedData[0];
    }
  
    // Variance
    variance() {
      const mean = this.mean();
      const squaredDifferences = this.data.map(value => (value - mean) ** 2);
      const sumSquaredDiff = squaredDifferences.reduce((x, y) => x + y, 0);
      return sumSquaredDiff / this.data.length;
    }
  
    // Deviation
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  }
  

  const data = [40, 22, 13, 34, 95];
  const stats = new DescriptiveStatistics(data);
  
  console.log('Mean:', stats.mean());
  console.log('Median:', stats.median());
  console.log('Range:', stats.range());
  console.log('Variance:', stats.variance());
  console.log('Standard Deviation:', stats.standardDeviation());
  
