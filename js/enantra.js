var titleID=document.getElementById("content-title");
var bodyID=document.getElementById("content-body");
var mainContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
//array of contents
var content=["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non","os qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure ","At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime","Vestibulum commodo quam at tempus volutpat. Donec ex justo, congue eu erat at, rhoncus gravida sem. Nulla et tempor massa. Duis venenatis imperdiet enim, at vehicula erat ornare quis. In quis pulvinar diam. Phasellus nulla massa, ultrices vitae lorem vel, eleifend pellentesque felis. Nulla a dictum sapien. Nunc sollicitudin scelerisque mi in gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ","Vivamus felis quam, aliquet eu sagittis vitae, egestas sed ante. Nam posuere rhoncus mi, sed aliquet elit pulvinar porta. Praesent ultrices tincidunt eros, sit amet feugiat lectus hendrerit sagittis. Praesent rutrum eleifend ligula congue facilisis. Nam consequat porta nisl ac sollicitudin. Aenean rutrum fringilla elit, eu tincidunt neque mollis in. Nullam placerat massa non diam rutrum vehicula. Maecenas porttitor lectus sit amet diam finibus, at porttitor eros sagittis. "," Suspendisse tellus nunc, lobortis eget nisl sit amet, tempus vehicula ipsum. Ut quis leo at leo elementum blandit. Integer ac aliquet arcu, fermentum laoreet nisi. In hac habitasse platea dictumst. Donec ornare augue ac nibh mollis, id malesuada dui eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae"];
//array of titles
var titles=["<h4><i class='fa fa-ravelry' aria-hidden='true'></i></h4>","<h4><i class='fa fa-snowflake-o' aria-hidden='true'></i></h4>","<h4><i class='fa fa-bell' aria-hidden='true'></i></h4>","<h4><i class='fa fa-rocket' aria-hidden='true'></i></h4>","<h4><i class='fa fa-pie-chart' aria-hidden='true'></i></h4>","<h4><i class='fa fa-inr' aria-hidden='true'></i></h4>"];

//functions to change
function revokeChanges(){
	titleID.style.animation="flip .2s 0s";
	bodyID.style.animation="flip .2s 0s";
	//for unsupported
	titleID.style.WebkitAnimation="flip .2s 0s";
	bodyID.style.WebkitAnimation="flip .2s 0s";
	titleID.innerHTML="<h4><i class='fa fa-superpowers' aria-hidden='true'></i></h4>";
	bodyID.innerHTML=mainContent;
	
}
function makeChanges(i){
	titleID.innerHTML=titles[i];
	bodyID.innerHTML=content[i];
	console.log(i);
	if(i==0||i==1){
		titleID.style.animation="slide-up 2s 0.2s";
		bodyID.style.animation="slide-up 2s 0.2s";
		//for unsupported browsers
		titleID.style.WebkitAnimation="slide-up 2s 0.2s";
		bodyID.style.WebkitAnimation="slide-up 2s 0.2s";
	}
	else if(i==2){
		titleID.style.animation="slide-left 1s 0.2s";
		bodyID.style.animation="slide-left 1s 0.2s";
		//for unsupported browsers
		titleID.style.WebkitAnimation="slide-left 1s 0.2s";
		bodyID.style.WebkitAnimation="slide-left 1s 0.2s";

	}
	else if(i==3){
		titleID.style.animation="slide-right 1s 0.2s";
		bodyID.style.animation="slide-right 1s 0.2s";
		//for unsupported browsers
		titleID.style.WebkitAnimation="slide-right 1s 0.2s";
		bodyID.style.WebkitAnimation="slide-right 1s 0.2s";
	}
	else if(i==4||i==5){
		titleID.style.animation="slide-down 2s 0.2s";
		bodyID.style.animation="slide-down 2s 0.2s";
		//for unsupported browsers
		titleID.style.WebkitAnimation="slide-down 2s 0.2s";
		bodyID.style.WebkitAnimation="slide-down 2s 0.2s";
	}
}


//for menu item 1
document.getElementById("mi-1").onmouseover=function(){makeChanges(0)};
document.getElementById("mi-1").onmouseout=function(){revokeChanges()};

//for menu item 2
document.getElementById("mi-2").onmouseover=function(){makeChanges(1)};
document.getElementById("mi-2").onmouseout=function(){revokeChanges()};

//for menu item 3
document.getElementById("mi-3").onmouseover=function(){makeChanges(2)};
document.getElementById("mi-3").onmouseout=function(){revokeChanges()};

//for menu item 4
document.getElementById("mi-4").onmouseover=function(){makeChanges(3)};
document.getElementById("mi-4").onmouseout=function(){revokeChanges()};

//for menu item 5
document.getElementById("mi-5").onmouseover=function(){makeChanges(4)};
document.getElementById("mi-5").onmouseout=function(){revokeChanges()};

//for menu item 6
document.getElementById("mi-6").onmouseover=function(){makeChanges(5)};
document.getElementById("mi-6").onmouseout=function(){revokeChanges()};

