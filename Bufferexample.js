
//var buf = Buffer([10,20,30,40,50])
var buf = Buffer.from([1, 2, 3]);
for(var i=0;i<3;i++)
{
    console.log(buf[i]);
}
var buf1 = Buffer.from("Welcome in Buffer");
console.log(buf1.toString());
var buf2 = Buffer.alloc(256);
buf2.write("Welcome in scs");
console.log(buf2.toString());
var buf = Buffer.from('Simply Easy Learning');
//var json = buf.toJSON(buf);
//console.log(json);