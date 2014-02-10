var count = {};
count.hr = 0;
count.min = 0;
count.sec = 0;

count.counter = -1;
count.total = -1;

count.bol = true;

count.start = function()
{
	if (this.bol)
	{
		++this.total;
		this.sec = ++this.counter;
	
		if (this.sec >= 60)
		{	
			secTominTohr(this.min, minute);		
	
			this.sec = 0;
			this.counter = 0;
		}
	
		if (this.min >= 60)
		{
			secTominTohr(this.hr, hour);
		
			this.min = 0;
		}
	
	
		unitsToTens(this.sec, second);
		this.stop(this.total, 40);
	
		setTimeout(function(){count.start()}, 1000);
	}
}

function unitsToTens(timer, _DOM)
{
	if (timer < 10) {_DOM.innerText = "0"+timer}
	else { _DOM.innerText = timer; }
}

count.stop = function(running, waiting)
{
	if (running >= waiting){this.bol = false}
}	


function secTominTohr(timer, _DOM)
{
	++timer;
	unitsToTens(timer, _DOM);
}

//convert = {};