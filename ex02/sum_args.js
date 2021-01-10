var sum;
var i;

sum = 0;
i = 2;
while (i < process.argv.length)
{
	sum += parseInt(process.argv[i++]);
}
console.log("%s", sum);
