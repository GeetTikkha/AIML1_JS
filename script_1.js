var a = 40;
var b = 20;
var linebreak = "<br />";

document.write("Value of a => (a = b) => ");
result = (a = b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a += b) => ");
result = (a += b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a -= b) => ");
result = (a -= b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a *= b) => ");
result = (a *= b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a /= b) => ");
result = (a /= b);
document.write(result);
document.write(linebreak);

document.write("Value of a => (a %= b) => ");
result = (a %= b);
document.write(result);
document.write(linebreak);
var count = 0;
document.write("Starting loop");
while (count < 10)
{
    document.write("Current Count:" + count + "<br/>");
    count++;
}
document.write("loop stopped1");
var age=20;
if(agr>18)
{
    document.write("<b>You are eligible to vote </b>");
}
var grade = 'A';
document.write("Entering switch block <br/>");
switch(grade) {
    case 'A' : document.write("good job <br/>");
    break;

    case 'B' : document.write("preety good <br/>");
    break;

    case 'C' : document.write("passed <br/>");
    break;

    case 'D' : document.write("not so good <br/>");
    break;

     case 'E' : document.write("failed <br/>");
    break;

    default: document.write("unknown grade")
}