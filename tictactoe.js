var p=1;
function player(){
	var x=document.getElementById("sp").checked;
	if(x==true)
		p=1;
	else
		p=2;
	if(p==1)
		document.getElementById("p2name").disabled=true;
	//updatescore();
	//document.getElementById("p1n").innerHTML=p;
	//if(p==1)
	//	document.getElementById("np").innerHTML="SINGLE PLAYER";
	//else
	//	document.getElementById("np").innerHTML="MULTIPLAYER";
}
var n1=" ";
var n2=" ";
var s1=0,s2=0;
var c=0;
function updatescore()
{
	document.getElementById("p1n").value=n1+" (X)";
	document.getElementById("p1s").value=s1;
	document.getElementById("p2n").value=n2+" (O)";
	document.getElementById("p2s").value=s2;
}
function funct(){
	n1=document.getElementById("p1name").value;
	if(p==2)
		n2=document.getElementById("p2name").value;
	else
		n2="COMPUTER (O)";
	document.getElementById("p2name").disabled=true;
	document.getElementById("p1name").disabled=true;
	//document.getElementById("p1n").innerHTML=n1;
	//document.getElementById("p2").innerHTML=n2;
	updatescore();
	updateval();
}

var x=[];
x.push(document.getElementById("b1"));
x.push(document.getElementById("b2"));
x.push(document.getElementById("b3"));
x.push(document.getElementById("b4"));
x.push(document.getElementById("b5"));
x.push(document.getElementById("b6"));
x.push(document.getElementById("b7"));
x.push(document.getElementById("b8"));
x.push(document.getElementById("b9"));
var sc=["#","#","#","#","#","#","#","#","#"];
function updateval()
{
	for(var i=0;i<9;i++)
		x[i].innerHTML=sc[i];
}
var flag=1;
function rando()
{
	var ab=[];
	for(var i=0;i<9;i++)
	{
		if(sc[i]=="#")
			ab.push(i);
	}
	var leng=ab.length;
	//var d=new Date();
	//var t1=d.getTime();
	//var t2=60*(d.getSeconds());
	//t1-=t2;
	var t1=Math.floor(Math.random() * 10);
	var index=t1%leng;
	sc[ab[index]]="O";
}
function play(i)
{
	if(sc[i]!="#")
		return;
	if(flag==1 && sc[i]=="#")
		sc[i]="X";
	else if(p==2 && sc[i]=="#")
		sc[i]="O";
	c++;
	updateval();
	if(sc[0]!="#" && sc[0]==sc[1] && sc[0]==sc[2] && flag==1)
	{
		document.getElementById("result").value=n1+" WINS";
		c=0;
		s1++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[3]!="#" && sc[3]==sc[4] && sc[3]==sc[5] && flag==1)
	{
		document.getElementById("result").value=n1+" WINS";
		c=0;
		s1++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[6]!="#" && sc[6]==sc[7] && sc[7]==sc[8] && flag==1)
	{
		document.getElementById("result").value=n1+" WINS";
		c=0;
		s1++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[0]!="#" && sc[0]==sc[3] && sc[3]==sc[6] && flag==1)
	{
		document.getElementById("result").value=n1+" WINS";
		c=0;
		s1++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[1]!="#" && sc[1]==sc[4] && sc[4]==sc[7] && flag==1)
	{
		document.getElementById("result").value=n1+" WINS";
		c=0;
		s1++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[2]!="#" && sc[2]==sc[5] && sc[5]==sc[8] && flag==1)
	{
		document.getElementById("result").value=n1+" WINS";
		c=0;
		s1++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[0]!="#" && sc[0]==sc[4] && sc[4]==sc[8] && flag==1)
	{
		document.getElementById("result").value=n1+" WINS";
		c=0;
		s1++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[2]!="#" && sc[2]==sc[4] && sc[2]==sc[6] && flag==1)
	{
		document.getElementById("result").value=n1+" WINS";
		c=0;
		s1++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[0]!="#" && sc[0]==sc[1] && sc[0]==sc[2] && flag==2)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[3]!="#" && sc[3]==sc[4] && sc[3]==sc[5] && flag==2)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[6]!="#" && sc[6]==sc[7] && sc[7]==sc[8] && flag==2)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[0]!="#" && sc[0]==sc[3] && sc[3]==sc[6] && flag==2)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[1]!="#" && sc[1]==sc[4] && sc[4]==sc[7] && flag==2)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[2]!="#" && sc[2]==sc[5] && sc[5]==sc[8] && flag==2)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[0]!="#" && sc[0]==sc[4] && sc[4]==sc[8] && flag==2)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[2]!="#" && sc[2]==sc[4] && sc[2]==sc[6] && flag==2)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(p==1 )
	{
		if(c<9)
		rando();
	if(c<9)
		c++;
		updateval();
		if(sc[0]!="#" && sc[0]==sc[1] && sc[0]==sc[2] && flag==1)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[3]!="#" && sc[3]==sc[4] && sc[3]==sc[5] && flag==1)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[6]!="#" && sc[6]==sc[7] && sc[7]==sc[8] && flag==1)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[0]!="#" && sc[0]==sc[3] && sc[3]==sc[6] && flag==1)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[1]!="#" && sc[1]==sc[4] && sc[4]==sc[7] && flag==1)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[2]!="#" && sc[2]==sc[5] && sc[5]==sc[8] && flag==1)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[0]!="#" && sc[0]==sc[4] && sc[4]==sc[8] && flag==1)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	if(sc[2]!="#" && sc[2]==sc[4] && sc[2]==sc[6] && flag==1)
	{
		document.getElementById("result").value=n2+" WINS";
		c=0;
		s2++;
		updatescore();
		flag=1;
		return;
	}
	}
	updateval();
	if(c>=9)
	{
		document.getElementById("result").value="MATCH DRAWN";
		c=0;
		
		flag=1;
		s1+=0.5;
		s2+=0.5;
		updatescore();
		return;
	}
	if(p==1)
		return;
	if(flag==1)
		flag=2;
	else
		flag=1;
	
}
function reset(){
	for(var i=0;i<9;i++)
		sc[i]="#";
	document.getElementById("result").value=" ";
	updateval();
}
