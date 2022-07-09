var Width, Height,num, y, x, tmp='';
function gen_box() 
{
	tmp='';
	Height=parseInt(document.getElementById('cboFNum').value);
	Width=parseInt(document.getElementById('cboSNum').value);
	for(y=1;y<=Height;y++)
	{
		tmp+="\n"+'<div id="box' + y +'" class="boxY"></div>';
			for (x=2; x<=Width; x++)
		{

			tmp+="\n"+'<div id="box' + y +'" class="boxX"></div>';
		}
	}
	document.getElementById('disp').innerHTML=tmp;
	console.log(tmp);
}