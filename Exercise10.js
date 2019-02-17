function changeMe(arr) {
    //var tahu = [];
    var display = {};
    var judul;
    for (var g = 0; g <= arr.length -1; g++) {
      judul = g + 1 + '. ' + arr[g][0] + ' ' + arr[g][1];
      console.log(judul);
      display.firstName = arr[g][0];
      display.lastName = arr[g][1];
      display.gender = arr[g][2];
      display.age = 2018 - arr[g][3];
      if (arr[g][3] === undefined) {
        display.age = 'Invalid Birth Year';
      }
      console.log(display);
    }if (arr.length === 0) {
      console.log('" "');
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); //
  //1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""