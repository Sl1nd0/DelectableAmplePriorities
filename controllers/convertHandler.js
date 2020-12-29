/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    result = input.replace(/[^0-9\.]+/g,"");
    if (!result) {
      result = "invalid number"; 
    }
    console.log(result);
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var total = input.length;    
    var number = input.replace(/[^0-9\.]+/g,"");
    var decTotal = number.toString().length;
    var valid = false;
    result = input.substring(decTotal, total);
    console.log(result);

    var arr = [
      'mi',
      'km',
      'kg',
      'lbs',
      'gal',
      'l'
    ]

    for (var i = 0; i < arr.length; i++) {
      if (result.toLowerCase() == arr[i]) { 
          valid = true;
      }
    }
    if (valid == false) {
       result="invalid unit";
    }
    return result.toLowerCase();
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit.toLowerCase()) {
      case "mi":
        result = "km";
      break;
      case "km":
              result = "mi";
      break;
      case "lbs":
        result = "kg";
      break;
      case "kg":
        result = "lbs"
      break;
       case "gal":
        result = "l";
      break;    
      case "l":
        result = "gal";
      break;  
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit.toLowerCase()) {

      case "mi":
        result = "miles";
      break;
      case "km":
              result = "kilometers";
      break;
      case "lbs":
        result = "pounds";
      break;
      case "kg":
        result = "kilograms";
      break;
       case "gal":
        result = "gallons";
      break;    
      case "l":
        result = "liters";
      break;   
      default: 
      result: "invalid unit"
    } 
    return result;
  };
  
  this.convert = function(initNum, initUnit) {

    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result = 0;

    console.log(initNum + " " + initUnit);

    switch(initUnit.toLowerCase()) {
        case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case "mi":
        result = initNum * miToKm;
      break;
      case "km":
              result = initNum / miToKm;
      break;
      case "lbs":
        result = initNum * lbsToKg;
      break;
      case "kg":
        result = initNum / lbsToKg;
      break;
       case "gal":
        result = initNum * galToL;
      break;    
      case "l":
        result = initNum / galToL;
      break; 
    } 
    return Number(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
 var result;

    switch(initUnit.toLowerCase()) {
      case "mi":
        result = "miles coverts to " + returnNum.toString() + " kilometers";
      break;
      case "km":
              result = "kilometers coverts to " + returnNum.toString() + " miles";
      break;
      case "lbs":
       result = "pounds coverts to " + returnNum.toString() + " kilgrams";
      break;
      case "kg":
        result = "kilograms coverts to " + returnNum.toString() + " pounds";
      break;
       case "gal":
        result = "gallons coverts to " + returnNum.toString() + " liters";
      break;    
      case "l":
        result = "liters coverts to " + returnNum.toString() + " gallons";
      break; 
       default:
        result = "invalid unit"; 
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
