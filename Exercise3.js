function cariMedian(arr) {
    var panjang = arr.length;
    // console.log(panjang)
    
    if(panjang % 2 === 0){
      var median1 = (panjang / 2) - 1;
      var median2 = ((panjang / 2) + 1) - 1;
      var genap = (arr[median1] + arr[median2]) / 2;
      return genap
      // console.log(median1);
      // console.log(median2);
    }else{
      var ganjil = ((panjang + 1) / 2) -1;
      return arr[ganjil]
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3 ganjil
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7 ganjil
  console.log(cariMedian([1, 3, 3])); // 3 ganjil
  console.log(cariMedian([7, 7, 8, 8])); // 7.5