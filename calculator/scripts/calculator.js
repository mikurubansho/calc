function Calculator(){
  if (!(this instanceof Calculator)){
     return new Calculator();
  }
  
  this.expression = '';
  
  this.getExpression = function(){
      return this.expression;
  }
  
  this.append = function( ch ){
      this.expression += ch;
  }
  
  this.clearEntry = function(){
      this.expression = this.expression.substring(0, this.expression.length-1);
  }
  
  this.clear = function(){
      this.expression = '';
  }
  
  this.calculate = function(){
      this.expression = this.expression.replace('×', '*');
      this.expression = this.expression.replace('÷', '/');
      this.expression = eval(this.expression);
  }
}
