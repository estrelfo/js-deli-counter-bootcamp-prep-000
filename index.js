var katzDeli = [];
var counter = 0;

function takeANumber (katzDeli, name)
{
  katzDeli.push(name);
  var last = katzDeli.length;
  return `Welcome, ${name}. You are number ${last} in line.`;
}

function nowServing (katzDeli)
{
  if (katzDeli.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
   
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

function currentLine (katzDeli)
{
  if (katzDeli.length > 0)
  {
    var total = katzDeli.length;
    for (var i; i < total; i++)
    {
      return ``;
    }
  }
  else
  {
    return "The line is currently empty.";
  }
}