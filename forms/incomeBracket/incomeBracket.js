let incomeValue = ""

btnSubmit.onclick= function(){
incomeValue = inptIncome.value
  if (incomeValue < 30000){
    lblTax.value = "With your income of "+ inptIncome.value+ ", you are in a tax bracket of 8%"
  } else if (incomeValue >= 30000 && incomeValue <= 99999){
    lblTax.value = "With your income of " + inptIncome.value+ ", you are in a tax bracket of 15%"
  } else {
    lblTax.value = "With your income of "+ inptIncome.value+ ", you are in a tax bracket of 25%"
}
}

btngoAgain.onclick=function(){
inptIncome.value = ""
lblTax.value = ""
}

