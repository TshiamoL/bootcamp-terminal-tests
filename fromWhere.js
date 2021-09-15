module.exports =function fromWhere(regNo){
    if (regNo.endsWith('Y')){
      return 'Bellville';
    }else if (regNo.endsWith('J')){
      return 'Paarl';
    }else if (regNo.endsWith('A')){
      return 'Cape Town';
      }else if (regNo.endsWith('C')){
      return 'Some other place!';
      }
    }