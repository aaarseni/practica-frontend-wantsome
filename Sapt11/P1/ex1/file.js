function capitalizeNames(arr) {
    let firstLetter = arr.map(
      aLetter => aLetter.charAt(0).toUpperCase() + aLetter.substr(1).toLowerCase()
    )
    return firstLetter;
  }
  console.log(capitalizeNames(['john', 'JACOB', 'jinGleHeimer', 'schmidt']))
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]