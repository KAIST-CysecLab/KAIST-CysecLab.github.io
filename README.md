# CySec Web Server source code 


### ./publications   
  `.pdf` or `.bib` files for the papers

### ./images 
  `.jpg` or `.png` resources for the pictures

### ./index.html   

* News : edit the item in carousel ...  

``` html 
 		<div class="item">
 			    ... 
            <div class="container">
            <div class="carousel-caption">
              <h1>News.</h1>
              <p>Win the prize in Hacking contest. </p>
              <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
```
* Memebrer : edit the following mark-up 

``` html 
        <div>
            <div class="thumbnail">
                <img class="img-circle" alt="" src="./images/minsukim.jpg">
                <div class="caption">
                    <div>
                        <h3></h3>
                        <p></p>
                        <h3>Minsu Kim</h3>
                        <p>Ph.D. Student</p>
                        <p>pshskms (at) kaist.ac.kr&nbsp;</p>
                    <p></p>
                    </div>
                    <p class="group">
                    	<a href="/minsukim.html" class="btn btn-default">HOMEPAGE<br></a>
                    </p>
                </div>
            </div>
        </div>
```

* Publication : refer the following mark-up 

``` html 
		<p>
			<span style="font-weight: bold;">On-demand Bootstrapping Mechanism for Isolated Cryptographic Operations on Commodity Accelerators</span>
		</p>
        <p>Yonggon Kim, Ohmin Kwon,  Jinsoo Jang, Seongwook Jin, Hyeongboo Baek, <strong>Brent Byunghoon Kang</strong>, Hyunsoo Yoon
        </p>
        <p>Computers &amp; Security 2016 
        	<a href="/publications/On-demand_Bootstrapping_Mechanism_for_Isolated_Cryptographic_Operations_on_Commodity_Accelerators.pdf">[PDF]</a> 
        	<a href="/publications/ondemand.bib">[BIBTEX]</a>
        </p>


```
