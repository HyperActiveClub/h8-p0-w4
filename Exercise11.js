function shoppingTime(memberId, money) {
    var goodsInSale = { barang: ['sepatu stacattu', 'baju zoro', 'baju h&n', 'sweater unikloh', 'casing handphone'], harga: [1500000, 500000, 250000, 175000, 50000]};
    
    var shopLog = {memberId: '',
                  money: '',
                  listPurchased: [],
                  changeMoney: 0
    }
    // sort harga barang dari termahal ke termurah
    
    // sort harga barang dari termurah ke termahal
    
    
    if (memberId === '') {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if (arguments.length === 0) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if (memberId !== ''){
        if (money < 50000) {
            return 'Mohon maaf, uang tidak cukup';
        } else {
            var arr1 = goodsInSale.barang;
            var arr2 = goodsInSale.harga;
            
            sortArraysInSync(arr1, arr2);
            
            goodsInSale.barang = arr1;
            goodsInSale.harga = arr2;
        }
    }
    
    return goodsInSale;
}

function sortArraysInSync (x, y) {  
    let arr = [];
    
    let l1 = Math.min(y.length, x.length);
    let l2 = Math.min(y.length, x.length);
    
    while (l1--) arr.push({ name: x[l1], score: y[l1]});  
    
    arr.sort(function(a, b) {
        return b.score - a.score; });  
    
    while (l2--) {  
        x[l2] = arr[l2].name;  
        y[l2] = arr[l2].score;  
    }
}


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja