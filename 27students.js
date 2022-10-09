/* 27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method */

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
    // Sort the array and find the min and max age
    ages.sort();
    console.log(ages);
    let minValue = ages.at(0);
    console.log(`Min Value : ${minValue}`);
    let maxValue = ages.at(-1);
    console.log(`Max Value : ${maxValue}`);
    
    //Find the median age(one middle item or two middle items divided by two)
    let median = ages[Math.round(ages.length / 2)];
    console.log(`Median : ${median}`);
    
    //Find the average age(all items divided by number of items)
    let sum = 0;
    for (ele of ages) {
      ///console.log(ele);
      sum = sum + ele;
    }
    // console.log(sum);
    
    let average = sum / ages.length;
    console.log(`Average : ${average}`);
    //Find the range of the ages(max minus min)
    
    let range = maxValue - minValue;
    console.log(`Range : ${range}`);
    //Compare the value of (min - average) and (max - average), use abs() method
    let value = Math.abs(minValue - average - (maxValue - average));
    console.log(`Value : ${value}`);
    