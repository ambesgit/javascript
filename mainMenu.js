function passDataLeft(){//the name passInput was tried to use here, but mozilla fairfox doesn't accept it may be due to the Input key word   
    
    
    var arr=[{el:"input",ty:"button",na:"target",ids:"target",va:"target"},{el:"input",ty:"button",na:"exportData",ids:"exportData",va:"exportData"},{el:"input",ty:"button",na:"point",ids:"point",va:"point"},{el:"input",ty:"button",na:"line",ids:"line",va:"line"},{el:"input",ty:"button",na:"polygon",ids:"polygon",va:"polygon"},{el:"input",ty:"button",na:"devisor1",ids:"devisor1",va:"======="},{el:"input",ty:"button",na:"classify",ids:"classify",va:"classify"},{el:"input",ty:"button",na:"addClass",ids:"addClass",va:"addClass"},{el:"input",ty:"button",na:"done",ids:"done",va:"done"},{el:"input",ty:"button",na:"devisor0",ids:"devisor0",va:"======="},{el:"input",ty:"button",na:"Dsave",ids:"Dsave",va:"saveGraph"},{el:"input",ty:"button",na:"exportgraph",ids:"exportGraph",va:"exportGraph"},{el:"input",ty:"button",na:"pausej",ids:"pausej",va:"pause"},{el:"input",ty:"button",na:"resume",ids:"resume",va:"resume"},{el:"input",ty:"button",na:"fillcolor",ids:"Efillcolor",va:"fillcolor"},{el:"input",ty:"button",na:"Dimlable",ids:"dimLabel",va:"Dim"},{el:"input",ty:"text",na:"Dinsert",ids:"Dinsert",va:"0"},{el:"input",ty:"button",na:"Dfrom",ids:"Dfrom",va:"From"},{el:"input",ty:"text",na:"deginsert",ids:"fdeginsert",va:"0"},{el:"input",ty:"button",na:"Edraw",ids:"Edraw",va:"angMove"},{el:"input",ty:"button",na:"Dto",ids:"Dto",va:"To"},{el:"input",ty:"text",na:"tdeginsert",ids:"tdeginsert",va:"0"},{el:"input",ty:"button",na:"Earc",ids:"Earc",va:"arc"},{el:"input",ty:"button",na:"Dnum",ids:"Dnum",va:"Side"},{el:"input",ty:"text",na:"Dside",ids:"Dside",va:"5"},{el:"input",ty:"button",na:"Dshape",ids:"Dshape",va:"shape"},{el:"input",ty:"button",na:"newColumn",ids:"newColumn",va:"newColumn"},{el:"input",ty:"button",na:"newRow",ids:"newRow",va:"newRow"},{el:"input",ty:"button",na:"devisor6",ids:"devisor6",va:"======="},{el:"input",ty:"button",na:"left",ids:"Eleft",va:"left"},{el:"input",ty:"button",na:"up",ids:"Eup",va:"up"},{el:"input",ty:"button",na:"right",ids:"Eright",va:"right"},{el:"input",ty:"button",na:"down",ids:"Edown",va:"down"},{el:"input",ty:"button",na:"devisor4",ids:"devisor4",va:"========"},{el:"input",ty:"button",na:"lefta",ids:"Elefta",va:"Larrow"},{el:"input",ty:"button",na:"upa",ids:"Eupa",va:"Uarrow"},{el:"input",ty:"button",na:"righta",ids:"Erighta",va:"Rarrow"},{el:"input",ty:"button",na:"downa",ids:"Edowna",va:"Darrow"},{el:"input",ty:"button",na:"devisor3",ids:"devisor3",va:"========"},{el:"input",ty:"button",na:"addLine",ids:"addLine",va:"addline"},{el:"input",ty:"button",na:"gSine",ids:"tosine",va:"sine"},{el:"input",ty:"text",na:"textsin",ids:"giveSine",va:"0"},{el:"input",ty:"button",na:"gCose",ids:"tocose",va:"cos"},{el:"input",ty:"text",na:"textcos",ids:"giveCose",va:"0"},{el:"input",ty:"button",na:"gsqrt",ids:"tosqrt",va:"sqrt"},{el:"input",ty:"text",na:"textsqrt",ids:"givesqrt",va:"0"}];
    return arr;                    
}
//this one was added for image analysis currently it is not used
function createImage(img){
    var im,mim,ibox,gim,gel,hold;
    gim=document.getElementById("bimage");
    if(gim){
        gel=document.getElementById("map");
        if(gel.value === ""){
        gel=document.getElementById("satImage");        
        }
        if(gel.value === ""){
        gel=document.getElementById("bgimage"); 
        }
        gim.setAttribute("src",gel.value);       
    }
    else{
    im=document.createElement("img");
    mim=document.createElement("img");
    
    im.src=img;//"body/brain.png";
    
    im.id="bimage";
    mim.id="eimage";
   // im.style.display="none";
    mim.style.display="none";
    ibox=document.createElement("div");
    ibox.backgroundColor="white";
    ibox.style.width="1200px";
    ibox.style.height="600px";
    ibox.style.margin="20px";
     ibox.style.position="relative";
    ibox.style.left="100px";
    ibox.style.top="20px";
    ibox.id="ibox";
    ibox.appendChild(im);
    //ibox.appendChild(mim);    
    document.body.appendChild(ibox);    
    document.body.normalize();
    }
}

function passDataRight(){ //to be checked the id uniquness
    
var arr=[{el:"input",ty:"button",na:"target",ids:"target",va:"target"},{el:"input",ty:"button",na:"compute",ids:"comstart",va:"compute"},{el:"input",ty:"file",na:"fileread",ids:"fileread",va:""},{el:"input",ty:"button",na:"getcopy",ids:"getcopy",va:"copy"},{el:"input",ty:"button",na:"delete",ids:"delete",va:"Delete"},{el:"input",ty:"button",na:"devisor3",ids:"rdevisor3",va:"======="},{el:"input",ty:"button",na:"grid",ids:"grid",va:"grid"},{el:"input",ty:"button",na:"boundary",ids:"rboundary",va:"boundary"},{el:"input",ty:"button",na:"Point",ids:"rpoint",va:"point"},{el:"input",ty:"button",na:"line",ids:"rline",va:"line"},{el:"input",ty:"button",na:"rpolygone",ids:"rpolygone",va:"polygon"},{el:"input",ty:"button",na:"devisor2",ids:"rdevisor2",va:"======="},{el:"input",ty:"button",na:"scatter",ids:"scatter",va:"scatter"},{el:"input",ty:"button",na:"Histogram",ids:"histogram",va:"histogram"},{el:"input",ty:"button",na:"Pie",ids:"rpie",va:"pie"},{el:"input",ty:"button",na:"loosePie",ids:"loosepie",va:"loosepie"},{el:"input",ty:"button",na:"bufferArea",ids:"bufferArea",va:"circle"},{el:"input",ty:"button",na:"devisor1",ids:"rdevisor1",va:"======="},{el:"input",ty:"button",na:"readData",ids:"readData",va:"readData"},{el:"input",ty:"button",na:"drawGraph",ids:"drawGraph",va:"drawGraph"},{el:"input",ty:"button",na:"devisor4",ids:"devisor4",va:"========"},{el:"input",ty:"button",na:"leftj",ids:"leftj",va:"Ljump"},{el:"input",ty:"button",na:"upj",ids:"upj",va:"Ujump"},{el:"input",ty:"button",na:"rightj",ids:"rightj",va:"Rjump"},{el:"input",ty:"button",na:"downj",ids:"Jdown",va:"Djump"},{el:"input",ty:"button",na:"broken",ids:"broken",va:"brokenLine"},{el:"input",ty:"button",na:"devisor0",ids:"devisor0",va:"======="},{el:"input",ty:"button",na:"removet",ids:"removetext",va:"remove"},{el:"input",ty:"button",na:"addt",ids:"addtext",va:"addText"},{el:"input",ty:"button",na:"devisor5",ids:"devisor5",va:"======="},{el:"input",ty:"button",na:"execute",ids:"execute",va:"Run"}];
    return arr; 


}
function passDataTopRight(){   
    
    var arr=[{el:"input",ty:"button",na:"Show",ids:"Show",va:"Show"},{el:"input",ty:"button",na:"startP",ids:"startP",va:"STA"},{el:"input",ty:"text",na:"tstartP",ids:"tstartP",va:""},{el:"input",ty:"button",na:"endP",ids:"endP",va:"END"},{el:"input",ty:"text",na:"tendP",ids:"tendP",va:""},{el:"input",ty:"button",na:"redgreen",ids:"redgreen",va:"R<>G"},{el:"input",ty:"button",na:"redblue",ids:"redblue",va:"R<>B"},{el:"input",ty:"button",na:"greenblue",ids:"greenblue",va:"G<>B"},{el:"input",ty:"button",na:"classify",ids:"classify",va:"[/]"},{el:"input",ty:"button",na:"transparency",ids:"transparency",va:"1<T>0"},{el:"input",ty:"text",na:"alphainput",ids:"alphainput",va:""},{el:"input",ty:"button",na:"coordinate",ids:"coordinate",va:"[x,y]"},{el:"input",ty:"button",na:"</>",ids:"angular",va:"</>"},{el:"input",ty:"button",na:"Dnumber",ids:"Dnumber",va:"N<256"},{el:"input",ty:"text",na:"dnValue",ids:"dnValue",va:""},{el:"input",ty:"button",na:"winMove",ids:"winMove",va:"[Win]"},{el:"input",ty:"text",na:"winValue",ids:"winValue",va:""},{el:"input",ty:"text",na:"Ckeyword",ids:"Ckeyword",va:""},{el:"input",ty:"button",na:"searchP",ids:"searchP",va:"search"},{el:"input",ty:"text",na:"keyword",ids:"Dkeyword",va:""},{el:"input",ty:"button",na:"startnow",ids:"startnow",va:"START"},{el:"input",ty:"button",na:"fromc",ids:"fromc",va:"From"},{el:"input",ty:"button",na:"tod",ids:"tod",va:"To"},{el:"input",ty:"text",na:"databaseC",ids:"dataBaseC",va:""},{el:"input",ty:"text",na:"databaseD",ids:"dataBaseD",va:""},{el:"input",ty:"button",na:"tox",ids:"tox",va:"YTO"},{el:"input",ty:"button",na:"toy",ids:"toy",va:"XTO"},{el:"input",ty:"text",na:"YADJ",ids:"YADJ",va:""},{el:"input",ty:"text",na:"XADJ",ids:"XADJ",va:""}]
return arr;
}


function passSelect(bgco){   

var arr=[{el:"option",na:"Color",va:""},{el:"option",na:"AliceBlue",va:"AliceBlue"},{el:"option",na:"Antiquewhite",va:"Antiquewhite"},{el:"option",na:"Aqua",va:"Aqua"},{el:"option",na:"Aquamarine",va:"Aquamarine"},{el:"option",na:"Azure",va:"Azure"},{el:"option",na:"Beige",va:"Beige"},{el:"option",na:"Bisque",va:"Bisque"},{el:"option",na:"black",va:"black"},{el:"option",na:"BlanchedAlmod",va:"BlanchedAlmod"},{el:"option",na:"Blue",va:"Blue"},{el:"option",na:"BlueViolet",va:"BlueViolet"},{el:"option",na:"Brown",va:"Brown"},{el:"option",na:"BurlyWood",va:"BurlyWood"},{el:"option",na:"CadetBlue",va:"CadetBlue"},{el:"option",na:"Chartreuse",va:"Chartreuse"},{el:"option",na:"Chocolate",va:"Chocolate"},{el:"option",na:"Coral",va:"Coral"},{el:"option",na:"CornflowerBlue",va:"CornflowerBlue"},{el:"option",na:"Cornsilk",va:"Cornsilk"},{el:"option",na:"Crimson",va:"Crimson"},{el:"option",na:"Cyan",va:"Cyan"},{el:"option",na:"DarkBlue",va:"DarkBlue"},{el:"option",na:"DarkCyan",va:"DarkCyan"},{el:"option",na:"DarkGoldenRod",va:"DarkGoldenRod"},{el:"option",na:"DarkGray",va:"DarkGray"},{el:"option",na:"DarkGray",va:"DarkGray"},{el:"option",na:"DarkGreen",va:"DarkGreen"},{el:"option",na:"DarkKhaki",va:"DarkKhaki"},{el:"option",na:"DarkMagenta",va:"DarkMagenta"},{el:"option",na:"DarkOliveGreen",va:"DarkOliveGreen"},{el:"option",na:"DarkOrange",va:"DarkOrange"},{el:"option",na:"DarkOrchid",va:"DarkOrchid"},{el:"option",na:"DarkRed",va:"DarkRed"},{el:"option",na:"DarkSalmon",va:"DarkSalmon"},{el:"option",na:"DarkSeaGreen",va:"DarkSeaGreen"},{el:"option",na:"DarkSlateBlue",va:"DarkSlateBlue"},{el:"option",na:"DarkSlateGray",va:"DarkSlateGray"},{el:"option",na:"DarkTurquoise",va:"DarkTurquoise"},{el:"option",na:"DarkViolet",va:"DarkViolet"},{el:"option",na:"DeepPink",va:"DeepPink"},{el:"option",na:"DeepSkyBlue",va:"DeepSkyBlue"},{el:"option",na:"DimGray",va:"DimGray"},{el:"option",na:"DobgerBlue",va:"DobgerBlue"},{el:"option",na:"FireBrick",va:"FireBrick"},{el:"option",na:"FloralWhite",va:"FloralWhite"},{el:"option",na:"ForestGreen",va:"ForestGreen"},{el:"option",na:"Fuchsia",va:"Fuchsia"},{el:"option",na:"Gainsboro",va:"Gainsboro"},{el:"option",na:"GhostWhite",va:"GhostWhite"},{el:"option",na:"Gold",va:"Gold"},{el:"option",na:"GoldenRod",va:"GoldenRod"},{el:"option",na:"Gray",va:"Gray"},{el:"option",na:"Green",va:"Green"},{el:"option",na:"GreenYellow",va:"GreenYellow"},{el:"option",na:"HoneyDew",va:"HoneyDew"},{el:"option",na:"HotPink",va:"HotPink"},{el:"option",na:"IndianRed",va:"IndianRed"},{el:"option",na:"Indigo",va:"Indigo"},{el:"option",na:"Ivory",va:"Ivory"},{el:"option",na:"Khaki",va:"Khaki"},{el:"option",na:"Lavender",va:"Lavender"},{el:"option",na:"LavenderBlush",va:"LavenderBlush"},{el:"option",na:"LawnGreen",va:"LawnGreen"},{el:"option",na:"LemonChiffon",va:"LemonChiffon"},{el:"option",na:"LightBlue",va:"LightBlue"},{el:"option",na:"LightCoral",va:"LightCoral"},{el:"option",na:"LightCyan",va:"LightCyan"},{el:"option",na:"LightGoldenRodYellow",va:"LightGoldenRodYellow"},{el:"option",na:"LightGray",va:"LightGray"},{el:"option",na:"LightGreen",va:"LightGreen"},{el:"option",na:"LightPink",va:"LightPink"},{el:"option",na:"LightSalmon",va:"LightSalmon"},{el:"option",na:"LightSeaGreen",va:"LightSeaGreen"},{el:"option",na:"LightSkyBlue",va:"LightSkyBlue"},{el:"option",na:"LightSlateGray",va:"LightSlateGray"},{el:"option",na:"LightSteelBlue",va:"LightSteelBlue"},{el:"option",na:"LighYellow",va:"LighYellow"},{el:"option",na:"Lime",va:"Lime"},{el:"option",na:"LimeGreen",va:"LimeGreen"},{el:"option",na:"Linen",va:"Linen"},{el:"option",na:"Magenta",va:"Magenta"},{el:"option",na:"Maroon",va:"Maroon"},{el:"option",na:"MediumAquaMarine",va:"MediumAquaMarine"},{el:"option",na:"MediumBlue",va:"MediumBlue"},{el:"option",na:"MediumOrchid",va:"MediumOrchid"},{el:"option",na:"MediumPurple",va:"MediumPurple"},{el:"option",na:"MediumSeaGreen",va:"MediumSeaGreen"},{el:"option",na:"MediumSlateBlue",va:"MediumSlateBlue"},{el:"option",na:"MediumSpringGreen",va:"MediumSpringGreen"},{el:"option",na:"MediumTurquoise",va:"MediumTurquoise"},{el:"option",na:"MediumVioletRed",va:"MediumVioletRed"},{el:"option",na:"MidnightBlue",va:"MidnightBlue"},{el:"option",na:"MintCream",va:"MintCream"},{el:"option",na:"MistyRose",va:"MistyRose"},{el:"option",na:"Moccasin",va:"Moccasin"},{el:"option",na:"Navajowhite",va:"Navajowhite"},{el:"option",na:"Navy",va:"Navy"},{el:"option",na:"OldLace",va:"OldLace"},{el:"option",na:"Olive",va:"Olive"},{el:"option",na:"OliveDrab",va:"OliveDrab"},{el:"option",na:"Orange",va:"Orange"},{el:"option",na:"OrangeRed",va:"OrangeRed"},{el:"option",na:"Orchid",va:"Orchid"},{el:"option",na:"PaleGoldenRed",va:"PaleGoldenRed"},{el:"option",na:"PaleGreen",va:"PaleGreen"},{el:"option",na:"PaleTurquoise",va:"PaleTurquoise"},{el:"option",na:"PaleVioletRed",va:"PaleVioletRed"},{el:"option",na:"PapayaWhip",va:"PapayaWhip"},{el:"option",na:"PeachPuff",va:"PeachPuff"},{el:"option",na:"Peru",va:"Peru"},{el:"option",na:"Pink",va:"Pink"},{el:"option",na:"Plum",va:"Plum"},{el:"option",na:"PowderBlue",va:"PowderBlue"},{el:"option",na:"Purple",va:"Purple"},{el:"option",na:"Red",va:"Red"},{el:"option",na:"RosyBrown",va:"RosyBrown"},{el:"option",na:"RoyalBlue",va:"RoyalBlue"},{el:"option",na:"SaddleBrown",va:"SaddleBrown"},{el:"option",na:"Salmon",va:"Salmon"},{el:"option",na:"SandyBrown",va:"SandyBrown"},{el:"option",na:"SeaGreen",va:"SeaGreen"},{el:"option",na:"SeaShell",va:"SeaShell"},{el:"option",na:"Sienna",va:"Sienna"},{el:"option",na:"Silver",va:"Silver"},{el:"option",na:"SkyBlue",va:"SkyBlue"},{el:"option",na:"SlateBlue",va:"SlateBlue"},{el:"option",na:"SlateGray",va:"SlateGray"},{el:"option",na:"Snow",va:"Snow"},{el:"option",na:"SpringGreen",va:"SpringGreen"},{el:"option",na:"SteelBlue",va:"SteelBlue"},{el:"option",na:"Tan",va:"Tan"},{el:"option",na:"Teal",va:"Teal"},{el:"option",na:"Thistle",va:"Thistle"},{el:"option",na:"Tomato",va:"Tomato"},{el:"option",na:"Turquoise",va:"Turquoise"},{el:"option",na:"Violet",va:"Violet"},{el:"option",na:"Wheat",va:"Wheat"},{el:"option",na:"White",va:"White"},{el:"option",na:"WhiteSmoke",va:"WhiteSmoke"},{el:"option",na:"Yellow",va:"Yellow"},{el:"option",na:"YellowGreen",va:"YellowGreen"}]; 
    if(bgco==="bgcolor"){
    
    arr[0].na="BGColor";
    arr[0].va="lightgray";
    }
    else if(bgco==="shadow"){
    arr[0].na="Shadow";
    arr[0].va="nocolor";
    
    }
    return arr;


}

function tagelData(){
var arr=[{el:"option",na:"stop",va:"stop"},{el:"option",na:"start",va:"start"},{el:"option",na:"pause",va:"pause"}];

return arr;
}

function passForgroundImage(m){   
var arr,loo,key;
    arr=[];
if(m.length>0){
  key=Object.keys(m[0]); //this object is keys of the array input with one element as object inturn it has many objects inside 
for(loo=0; loo<key.length; loo +=1){    
if(key[loo]===CONFIGURE.FORGROUND){
arr=m[0][CONFIGURE.FORGROUND];
break;
}

}
}

return arr;
}



function passPhoto(m){   
var arr,loo,key;
    arr=[];
if(m.length>0){
  key=Object.keys(m[0]); //this object is keys of the array input with one element as object inturn it has many objects inside 
for(loo=0; loo<key.length; loo +=1){    
if(key[loo]===CONFIGURE.PHOTO){
arr=m[0][CONFIGURE.PHOTO];
break;
}

}
}

return arr;
}
function passMap(m){
var arr,loo,key;
    arr=[];
if(m.length>0){
  key=Object.keys(m[0]); //this object is keys of the array input with one element as object inturn it has many objects inside 
for(loo=0; loo<key.length; loo +=1){    
if(key[loo]===CONFIGURE.USERS){
arr=m[0][CONFIGURE.USERS];
break;
}

}
}

return arr;
}
function passgetData(m){
var arr,loo,key;
    arr=[];
if(m.length>0){
  key=Object.keys(m[0]); //this object is keys of the array input with one element as object inturn it has many objects inside 
for(loo=0; loo<key.length; loo +=1){    
if(key[loo]===CONFIGURE.INPUT){
arr=m[0][CONFIGURE.INPUT];
break;
}

}
}

return arr;
}

function passSatImage(m){
    var arr,loo,key;
    arr=[];
if(m.length>0){
  key=Object.keys(m[0]); //this object is keys of the array input with one element as object inturn it has many objects inside 
for(loo=0; loo<key.length; loo +=1){    
if(key[loo]===CONFIGURE.IMAGE){
arr=m[0][CONFIGURE.IMAGE];
break;
}

}
}
return arr;
}


function passCanvas(len){
var arr,loo;
    //the ids properties are important ....
arr=[{el:"option",na:"firstCanvas",ids:"mcanvas",va:"mcanvas"},{el:"option",na:"secondCanvas",ids:"pcanvas",va:"pcanvas"},{el:"option",na:"thirdCanvas",ids:"lcanvas",va:"lcanvas"},{el:"option",na:"fourthCanvas",ids:"hcanvas",va:"hcanvas"},{el:"option",na:"fifthCanvas",ids:"rcanvas",va:"rcanvas"},{el:"option",na:"sixthCanvas",ids:"ycanvas",va:"ycanvas"}];
    
    if(len==="length"){
    return arr.length;
    
    }
    
    else if(typeof len===String && len!="length"){
    
    for(loo=0; loo<arr.length; loo +=1){
    if(len===arr[loo]){
    return loo;
    }
    
    
    }
    
    }
    else { 
        return arr;
         }
}

function passLineSize(){
   
var arr=[{el:"option",na:"lineSize",va:1},{el:"option",na:"one",va:1},{el:"option",na:"two",va:2},{el:"option",na:"three",va:3},{el:"option",na:"four",va:4},{el:"option",na:"five",va:5},{el:"option",na:"six",va:6},{el:"option",na:"seven",va:7},{el:"option",na:"eight",va:8},{el:"option",na:"nine",va:9},{el:"option",na:"ten",va:10}];
    
    return arr;
    
}

function passTextSize(){
    
    var arr=[{el:"option",na:"fontSize",va:8},{el:"option",na:"10",va:10},{el:"option",na:"12",va:12},{el:"option",na:"15",va:15},{el:"option",na:"18",va:18},{el:"option",na:"20",va:20},{el:"option",na:"22",va:22},{el:"option",na:"25",va:25},{el:"option",na:"27",va:27},{el:"option",na:"30",va:30},{el:"option",na:"40",va:40}];
    
return arr;
}

function passDimension(w,h){
    var wid,hei,el;
   
    var arr=[{el:"option",na:"winSize",va:""},{el:"option",na:"small",va:500},{el:"option",na:"midium",va:1000},{el:"option",na:"large",va:2000}];//,{el:"option",na:"height",ids:"win2",va:1600},{el:"option",na:"width",ids:"win1",va:20000},{el:"option",na:"height",ids:"win2",va:10000}];
    if(w >0 && h >0){
    
    arr[1].va=w;
    arr[2].va=h;
    
    }
return arr;
}





function passPoint(p,rp){
    var rval,arr,con=0,can,el,loo,w,h,val,cony;
    arr=[{x:0,y:0,r:5}];
    
    el=document.getElementById("canavs");//do i have canvas
    if(el){
    val=el.value; 
    }
    can=document.getElementById(val); //get me the canvas 
    if(can){
    w=can.getAttribute("width");
    h=can.getAttribute("height");
    
    }
    if(p.length>0){       
       
        for(loo=0; loo<p.length-1; loo +=2){
            if(loo<arr.length){
            con=Number(p[loo])
            cony=Number(p[loo+1])
            if(con>w || cony>h){
            con=w-1;
            cony=h-1;            
            }
        arr[loo].x=con; //Number(p[loo]);
        arr[loo].y=cony;//Number(p[loo +1]);
        if(rp>0){
            rval=Number(rp[loo]);
        arr[loo].r=rval;        
        }
    }
         else{
             con=Number(p[loo]);
            cony=Number(p[loo +1]);
             if(con>w || cony>h){ //check if the input coordinates are greater than the window size
            con=w-1;
            cony=h-1;            
            }
             
             if(rp>0 && rp.length===p.length){ //check if the user provides input for point size
            rval=Number(rp[loo]);        
            arr[arr.length]={x:con,y:cony,r:rval};
             }
             else{
                 arr[arr.length]={x:con,y:cony,r:5};
             
             }
                            
         }              
        
        }    
    }  
        
  if(arr.length>1){ 
return arr;
  }
}


function passLine(p){
    var elx=0,ely=0,last,arr,conver=0,can,el,loo,w,h,val,convery;
    if(document.getElementById("XADJ")){
    elx=Number(document.getElementById("XADJ").value);
       }
    if(document.getElementById("YADJ")){
       ely=Number(document.getElementById("YADJ").value);
       }
     arr=[{x:10,y:20,r:5}];
    el=document.getElementById("canvas");
    val=el.value
    if(val){
    can=document.getElementById(val);
    w=can.getAttribute("width");
    h=can.getAttribute("height");    
    }
    if(p.length>0){
        if(p.length%2===0){
        last=p.length;
        }
        
        else{
        
        last=p.length-1;
        }
        for(loo=0; loo<last-1; loo +=2){            
                if(loo===0){
                    if(Number(p[loo])!=0){
        arr[arr.length-1].x=Number(p[loo])+elx; 
        arr[arr.length-1].y=Number(p[loo+1])+ely;
                    }
            else{
            arr[arr.length-1].x=Number(p[loo]); 
            arr[arr.length-1].y=Number(p[loo+1]);
            }
                }
                  
            else{
              if(Number(p[loo])!=0){  
            conver=Number(p[loo])+elx;                
            convery=Number(p[loo +1])+ely;
              }
                else{
                conver=Number(p[loo]);                
                convery=Number(p[loo +1]);
                }
            if(conver>=w || convery>=h){
            conver=w-1;
            convery=h-1;      
            }            
            arr[arr.length]={x:conver,y:convery,r:5};         
            
            }
            
        }   
        
    }
    
return arr;    

}

function passHisto(p){
    var space=25,xaxis,conver=0,can,el,loo,w,h,val;
    el=document.getElementById("canvas");
    val=el.value;
    can=document.getElementById(val);
    xaxis=can.getAttribute("width");
    w=0;//can.getAttribute("width")
    if(bufferArea[bufferArea.length-1].x1!=0){
        if(bufferArea[bufferArea.length-1].y1-250<=0){
            h=250;        
        } 
        else{
            h=bufferArea[bufferArea.length-1].y1;
        }
    }
    else{    
    h=can.getAttribute("height")/2;    
    }
    
    var arr=[{x:0,y:h,r:105}];//,{x:100,y:h,r:100},{x:150,y:h,r:130},{x:200,y:h,r:305},{x:250,y:h,r:200},{x:300,y:h,r:215},{x:350,y:h,r:40},{x:400,y:h,r:130},{x:450,y:h,r:0},{x:450,y:h,r:130}]; 
    
    
    if(p.length !=0){        
    for(loo=0; loo<p.length; loo +=1){
    
    if(loo<arr.length && w<can.getAttribute("width")){
      
    arr[loo].r=Number(p[loo].r);
        if(loo !=0){//to start some point, u need a reference so the zero will be used for so
          if(bufferArea[bufferArea.length-1].x1!=0 && bufferArea[bufferArea.length-1].x2!=0){
        arr[loo].x=(bufferArea[bufferArea.length-1].x1 + Math.floor(space)>=xaxis)?xaxis:bufferArea[bufferArea.length-1].x1 + Math.floor(space); //increament along x depends on the length of the input       
          
          } 
            else{
     arr[loo].x=arr[loo-1].x + Math.floor(can.getAttribute("width")/p.length); //increament along x depends on the length of the input
                
            }
        }
        else{
            if(bufferArea[bufferArea.length-1].x1!=0 && bufferArea[bufferArea.length-1].x2!=0){
            arr[loo].x=(bufferArea[bufferArea.length-1].x1>=xaxis)?xaxis:bufferArea[bufferArea.length-1].x1;
            
            }
            else{
         arr[loo].x=Math.floor(can.getAttribute("width")/p.length); 
            }
        }
    
    }
        
    else{
        if(bufferArea[bufferArea.length-1].x1!=0 && bufferArea[bufferArea.length-1].x2!=0){
            w=arr[arr.length-1].x + Math.floor(space);
        }
             {
           // w=arr[arr.length-1].x+ Math.floor(can.getAttribute("width")/p.length);
            }       
         
        if(w<can.getAttribute("width")){
            
          conver=Number(p[loo].r);  
           
    arr[arr.length]={x:w,y:h,r:conver};
        
        
              }
        
    }
        
    }
    return arr;
    }
    
    
    else{
    return arr;
    }
              
return arr;

}
function passPie(inp){
    var ad,max,mean,min,loo,el,val,can,w,h,rad;
    el=document.getElementById("canvas");
    val=el.value;
    can=document.getElementById(val);
    w=Math.floor(can.getAttribute("width")/2);
    h=Math.floor(can.getAttribute("height")/2);
    rad=can.getAttribute("height")-100;
    var arr=[{x:w,y:h,r:rad,s:1},{x:w,y:h,r:rad,s:2},{x:w,y:h,r:rad,s:12},{x:w,y:h,r:rad,s:36},{x:w,y:h,r:rad,s:30},{x:w,y:h,r:rad,s:30},{x:w,y:h,r:rad,s:31},{x:w,y:h,r:rad,s:33}];
    if(inp.length>0){
        for(loo=0; loo<inp.length; loo +=1){
             
        inp[loo]=Number(inp[loo]);
        
        }
    
    for(loo=0; loo<inp.length; loo +=1){
    max=0;
    min=0;
    mean=0;
        if(inp[loo]>max){
        max=inp[loo];
        mean=mean+inp[loo];
        if(inp[loo]<min){
        min=inp[loo];
        }
        }   
    
    }
    for(loo=0; loo<inp.length;loo +=1){
    if(loo<arr.length){
    arr[loo].s=(inp[loo]/max)*(2*Math.PI);
    
    }
    else{
      ad=(inp[loo]/max)*(2*Math.PI); 
    arr[arr.length]={x:w,y:h,r:rad,s:ad};
    
    }
    
    }
    return arr;
    
    }
    else{
    return arr;
    }
   }
function passRect(point){
    var xco=0,yco,el,elval,can,w,h;
    el=document.getElementById("canvas");
    if(el){
    elval=el.value;
    can=document.getElementById(elval);
    w=can.getAttribute("width"); 
    h=can.getAttribute("height");   
    }
    var arr=[{x:0,y:0,r:105}];//,{x:10,y:10,r:100},{x:15,y:15,r:130},{x:20,y:20,r:305},{x:25,y:25,r:200},{x:30,y:30,r:215},{x:40,y:40,r:4},{x:45,y:45,r:10}];
    for(yco=0; yco<=h; yco +=20){
        for(xco=0; xco<=w; xco +=20){
    arr[arr.length]={x:xco,y:yco,r:10}; 
        }
    
    }
    return arr;

}
function passConfigure(){//to be configure
var arr=[{el:"option",na:"LineWidth",va:1},{el:"option",na:"one",va:1},{el:"option",na:"two",va:2},{el:"option",na:"three",va:3},{el:"option",na:"four",va:4},{el:"option",na:"five",va:5},{el:"option",na:"six",va:6},{el:"option",na:"seven",va:7},{el:"option",na:"eight",va:8},{el:"option",na:"nine",va:9},{el:"option",na:"ten",va:10}];
    
    return arr;


}


function passFunctions(){//to be configure
var arr=[{el:"option",na:"Functions",va:""},{el:"option",na:"STDEVremover",va:"STDEVremover()"},{el:"option",na:"changeToColor",va:"grayToColor()"},{el:"option",na:"maximum",va:"maximum()"},{el:"option",na:"minimum",va:"minimum()"},{el:"option",na:"average",va:"average()"},{el:"option",na:"greenBand",va:"greenBand()"},{el:"option",na:"redBand",va:"redBand()"},{el:"option",na:"RGB",va:"RGB()"},{el:"option",na:"blueBand",va:"blueBand()"},{el:"option",na:"featureSpace",va:"featureSpace()"},{el:"option",na:"cloudRemover",va:"cloudRemover()"},{el:"option",na:"shadowRemover",va:"shadowRemover()"},{el:"option",na:"clipArea",va:"clipArea()"},{el:"option",na:"moveWin",va:"moveWin()"},{el:"option",na:"sysSampling",va:"sysSampling()"},{el:"option",na:"changeToGray",va:"colorToGray()"}];
    
    return arr;


}


function passAdder(){//to be configure
var arr=[{el:"option",na:"Result",va:""},{el:"option",na:"Display",va:"add"},{el:"option",na:"Clear",va:"remove"}];
    
    return arr;


}
function passScale(){//to be configure
var arr=[{el:"option",na:"scale",va:"noscale"},{el:"option",na:"twice",va:2},{el:"option",na:"triple",va:3}];//,{el:"option",na:"three",ids:"lwid3",va:3},{el:"option",na:"four",ids:"lwid4",va:4},{el:"option",na:"five",ids:"lwid5",va:5},{el:"option",na:"six",ids:"lwid6",va:6},{el:"option",na:"seven",ids:"lwid7",va:7},{el:"option",na:"eight",ids:"lwid8",va:8},{el:"option",na:"nine",ids:"lwid9",va:9},{el:"option",na:"ten",ids:"lwid10",va:10}];
    
    return arr;


}

//don't put a function that has a return value of array or primitive in between a function that returns image, must not be at the end too
var satimage=[{landsate:[{el:"option",na:"Image",va:""},{el:"option",na:"Sample1",va:"body/brainc.png"},{el:"option",na:"Sample2",va:"body/ezana.png"},{el:"option",na:"Sample3",va:"body/ezana.gif"},{el:"option",na:"Sample5",va:"body/rad.png"},{el:"option",na:"Sample4",va:"body/refit.png"}],adane:[{el:"option",na:"Image",va:""},{el:"option",na:"Sample4",va:"body/refit.png"}]}];

var users=[{ambes:[{el:"option",na:"Map",va:""},{el:"option",na:"Sample2",va:"country/mymap.png"},{el:"option",na:"Sample1",va:"body/brainc.png"},{el:"option",na:"Sample3",va:"body/ezana.gif"},{el:"option",na:"Sample4",va:"body/rad.png"},{el:"option",na:"Sample7",va:"country/mydrawing.png"}],tesfaye:[{el:"option",na:"Map",va:""},{el:"option",na:"Sample6",va:"body/rad.png"},{el:"option",na:"Sample4",va:"body/refit.png"},{el:"option",na:"Sample8",va:"country/mymap.png"}],adane:[{el:"option",na:"Map",va:""},{el:"option",na:"Sample4",va:"body/rad.png"},{el:"option",na:"Sample5",va:"body/refit.png"}],nigsti:[{el:"option",na:"Map",va:""},{el:"option",na:"steps",va:"country/grid.png"},{el:"option",na:"Sample6",va:"country/ambes.png"},{el:"option",na:"Sample7",va:"country/mymap.png"},{el:"option",na:"Sample7",va:"country/mydrawing.png"}]}];


var input=[{local:[{el:"option",na:"INPUT",va:""},{el:"option",na:"API",va:"API"},{el:"option",na:"Mapping",va:"mapping"},{el:"option",na:"Database",va:"Database"},{el:"option",na:"Cloud",va:"cloud"},{el:"option",na:"JSON",va:"JSON"},{el:"option",na:"XML",va:"XML"},{el:"option",na:"Drawing",va:"drawing"},{el:"option",na:"meshNet",va:"meshNet"}],network:[{el:"option",na:"Database",va:"Database"},{el:"option",na:"Cloud",va:"cloud"},{el:"option",na:"Drawing",va:"drawing"},{el:"option",na:"Mapping",va:"mapping"}]}];


var photo=[{pattern:[{el:"option",na:"Photo",va:""},{el:"option",na:"Sample2",va:"gallory/YPO4_43WWW.png"},{el:"option",na:"Sample1",va:"gallory/SbBcI11_13GyGyGy53.png"}],natural:[{el:"option",na:"Sample3",va:"gallory/YPO4_43WWW.png"}]}];

var forground=[{pattern:[{el:"option",na:"Data",va:""}]}];

function passIdFunc(num){    
var arr=[{Id:"canvas",func:"passCanvas('me')"},{Id:"bgcolor",func:"passSelect('bgcolor')"},{Id:"mycolor",func:"passSelect()"},{Id:"shadowColor",func:"passSelect('shadow')"},{Id:"lineSize",func:"passLineSize()"},{Id:"winSize",func:"passDimension('w' +','+'h')"},{Id:"fontProperty",func:"passTextSize()"},{Id:"getData",func:"passgetData(input)"},{Id:"computing",func:"passFunctions()"},{Id:"forground",func:"passForgroundImage(forground)"},{Id:"satImage",func:"passSatImage(satimage)"},{Id:"display",func:"passAdder()"},{Id:"map",func:"passMap(users)"},{Id:"bgimage",func:"passPhoto(photo)"}];//image type has to be added at the end of the list,the background image has to be the last entry
    if(num === "length"){
        return arr.length;
        }
    else if(num==="all"){
    return arr;    
    
    }
else {
    return arr[num];}
}

function createHidden(){
    var im,el;
    el=document.getElementById("forground");
    if(el.value!=""){
    if(!document.images.namedItem("$"+el.options[el.selectedIndex].text)){//make sure only one  is created for a give image
    im=document.createElement("img");
    im.id="$"+el.options[el.selectedIndex].text;
    im.src=el.value;       
    im.style.position="fixed";
    im.style.left=CONFIGURE.BUTWIDTH+8*CONFIGURE.BORDER+"px";
    im.style.top=CONFIGURE.SELHEIGHT+8*CONFIGURE.BORDER+"px";       
    im.style.display="none";
    document.body.appendChild(im);
    return document.getElementById(el.options[el.selectedIndex].text); //this makes sure the computition is done on the right data
    }
    }

}
function pointerShare(){
var op,opt,eli, eliv,elc,elcv;
    eli=document.getElementById("satImage");
    if(eli){
    eliv=eli.value;
    op=document.createElement("option");
    op.setAttribute("value",eliv);
    opt=document.createTextNode(eli.options[eli.selectedIndex].text);//copy the text and the attach to the new option
    op.appendChild(opt);
    elc=document.getElementById("forground");
    if(elc){
    for(loo=0; loo<elc.options.length; loo+=1){
        //check if there is already one added
    if(eli.options[eli.selectedIndex].text===elc.options[loo].text ||eli.options[eli.selectedIndex].text==="Image"){
      break;       
    }
        //if it is checked thoroughly and no one found by that name, then it is fine to add to the list of select object
    else if(loo===elc.options.length-1){
     elc.appendChild(op);
    }
    }
      
    
    }
    }
createHidden();
}

function dataAnalysis(){
var el,dat, spl, arr,loo;
    arr=[{x:0}];
    el=document.getElementById("mappingfile");
    dat=el.value;
    spl=dat.split(",");
    for(loo=0; loo<spl.length; loo +=1){
    arr[loo].x=spl[loo];    
    }
    return arr;


}

function PassModifier(){
    
    var el,lel,trel,til,loo,lab;
    trel=document.getElementById("toprightMenu");
    el=document.getElementById("vleftMenu");
    lel=document.getElementById("vrightMenu");
    for(loo=0; loo<trel.childNodes.length; loo +=1){
    if(trel.childNodes[loo].id==="alphainput" ||trel.childNodes[loo].id==="tstartP" || trel.childNodes[loo].id==="tendP"){
       trel.childNodes[loo].style.width="45px"; 
        trel.childNodes[loo].style.height="20px";
        trel.childNodes[loo].style.backgroundColor="wheat";
        trel.childNodes[loo].style.color="black";    
    
    }
    if(trel.childNodes[loo].id==="dnValue"){
        trel.childNodes[loo].style.width="45px"; 
        trel.childNodes[loo].style.height="20px";
        trel.childNodes[loo].style.backgroundColor="wheat";
        trel.childNodes[loo].style.color="black"; 
    
    }
    if(trel.childNodes[loo].id==="winValue"){
     trel.childNodes[loo].style.width="45px"; 
        trel.childNodes[loo].style.height="20px";
        trel.childNodes[loo].style.backgroundColor="wheat";
        trel.childNodes[loo].style.color="black"; 
    
    }
        
        if(trel.childNodes[loo].id==="fromc"){
     trel.childNodes[loo].style.width="50px"; 
        trel.childNodes[loo].style.height="30px";        
        trel.childNodes[loo].style.marginLeft="100px";
        
    }
        if(trel.childNodes[loo].id==="tox"){
     trel.childNodes[loo].style.width="50px"; 
        trel.childNodes[loo].style.height="30px";        
        trel.childNodes[loo].style.marginLeft="260px";
        
    }
        if(trel.childNodes[loo].id==="toy"){
     trel.childNodes[loo].style.width="50px"; 
        trel.childNodes[loo].style.height="30px";        
        trel.childNodes[loo].style.marginLeft="260px";
        
    }
        if(trel.childNodes[loo].id==="tod"){
     trel.childNodes[loo].style.width="50px"; 
        trel.childNodes[loo].style.height="30px";        
        trel.childNodes[loo].style.marginLeft="100px";
    }
        if(trel.childNodes[loo].id==="dataBaseC"){
     trel.childNodes[loo].style.width="200px"; 
        trel.childNodes[loo].style.height="20px";
        trel.childNodes[loo].style.backgroundColor="wheat";
        trel.childNodes[loo].style.color="black"; 
        trel.childNodes[loo].style.marginLeft="100px";
    }
    if(trel.childNodes[loo].id==="dataBaseD"){
     trel.childNodes[loo].style.width="200px"; 
        trel.childNodes[loo].style.height="20px";
        trel.childNodes[loo].style.backgroundColor="wheat";
        trel.childNodes[loo].style.color="black"; 
        trel.childNodes[loo].style.marginLeft="100px";
    }
        
        if(trel.childNodes[loo].id==="XADJ"){
     trel.childNodes[loo].style.width="50px"; 
        trel.childNodes[loo].style.height="20px";
        trel.childNodes[loo].style.backgroundColor="wheat";
        trel.childNodes[loo].style.color="black"; 
        trel.childNodes[loo].style.marginLeft="250px";
    }
        if(trel.childNodes[loo].id==="YADJ"){
     trel.childNodes[loo].style.width="50px"; 
        trel.childNodes[loo].style.height="20px";
        trel.childNodes[loo].style.backgroundColor="wheat";
        trel.childNodes[loo].style.color="black"; 
        trel.childNodes[loo].style.marginLeft="250px";
    }
      if(trel.childNodes[loo].id==="Dkeyword"){
     trel.childNodes[loo].style.width="100px"; 
        trel.childNodes[loo].style.height="20px";
        trel.childNodes[loo].style.backgroundColor="wheat";
        trel.childNodes[loo].style.color="black"; 
        trel.childNodes[loo].style.marginLeft="40px";
    } 
    if( trel.childNodes[loo].id==="Ckeyword"){
    trel.childNodes[loo].style.width="100px"; 
        trel.childNodes[loo].style.height="20px";
        trel.childNodes[loo].style.backgroundColor="wheat";
        trel.childNodes[loo].style.color="black";
        trel.childNodes[loo].style.marginRight="30px";
    }
    if(trel.childNodes[loo].id==="searchP"){
        trel.childNodes[loo].style.width="120px"; 
    //trel.childNodes[loo].style.marginLeft="40px";
    
    }
    if(trel.childNodes[loo].id==="startnow"){
    trel.childNodes[loo].style.width="95px";  
    trel.childNodes[loo].style.display="none";
    trel.childNodes[loo].style.marginLeft="40px";
    }
    if(trel.childNodes[loo].id==="winMove"){
     trel.childNodes[loo].style.width="50px"; 
    }
     if(trel.childNodes[loo].id==="startP"){
     trel.childNodes[loo].style.width="50px";   
    }
        
    if(trel.childNodes[loo].id==="endP"){
     trel.childNodes[loo].style.width="50px";   
    }
    }
    for(loo=0; loo<el.childNodes.length; loo +=1){
    if(el.childNodes[loo].id==="Dinsert" ||el.childNodes[loo].id==="fdeginsert"|| el.childNodes[loo].id==="tdeginsert"|| el.childNodes[loo].id==="Dside" || el.childNodes[loo].id==="giveSine" ||el.childNodes[loo].id==="giveCose" || el.childNodes[loo].id==="givesqrt"){        
    el.childNodes[loo].style.backgroundColor="wheat";   
    el.childNodes[loo].style.left="50px";
    el.childNodes[loo].style.color="black";
    el.childNodes[loo].style.width="45px";   
     if(el.childNodes[loo].id==="givesqrt"){
     el.childNodes[loo].style.height="15px";     
     }   
    }  
     else if(el.childNodes[loo].id==="devisor0" || el.childNodes[loo].id==="devisor1" || el.childNodes[loo].id==="devisor2" ||el.childNodes[loo].id==="devisor3" || el.childNodes[loo].id==="devisor4"  || el.childNodes[loo].id==="devisor6"){
    el.childNodes[loo].style.backgroundColor="black";
    el.childNodes[loo].style.color="white";   
        
    }    
if(el.childNodes[loo].id==="tosine"){
el.childNodes[loo].style.display="inline-block";
el.childNodes[loo].style.width="50px";
}
}
    for(loo=0; loo<lel.childNodes.length; loo +=1){
    if(lel){        
    if(lel.childNodes[loo].id==="rdevisor1" ||lel.childNodes[loo].id==="rdevisor2" || lel.childNodes[loo].id==="rdevisor3" ||lel.childNodes[loo].id==="comstart" ||lel.childNodes[loo].id==="devisor4"||lel.childNodes[loo].id==="devisor0"|| lel.childNodes[loo].id==="devisor5"){
    lel.childNodes[loo].style.backgroundColor="black";
    lel.childNodes[loo].style.color="white";
    if(lel.childNodes[loo].id==="comstart"){
    lel.childNodes[loo].style.backgroundColor="gold";
    lel.childNodes[loo].style.color="black";
    
    }
    }
    }
    }
    
    
}
function changeFont(){
var el, elVal;
    el=document.getElementById("fontProperty");
    if(el){
    CONFIGURE.FONTSIZE=Number(el.value);    
    }



}
function execute(){
var wloo,can,tmp,com, comV,st,stV,el,loo,iloo,cloo,k,eof,eol,col,eoc,gcom,p1,p2,p3,p4,t1;
    can=document.getElementById("canvas");
    el=document.getElementById("mappingfile");
    eoc=Number(document.getElementById("Dinsert").value);
    tmp=[];
    if(el){
    com=el.value;
     comV=com.split(";");
        if(comV.length>0){
      for(loo=0; loo<comV.length; loo +=1){
      st=comV[loo].split(" ");
          for(cloo=0; cloo<st.length; cloo +=1){
          if((/[0-9a-zA-Z]/.test(st[cloo]))){
          tmp[tmp.length]=st[cloo];
          
          }          
          }
          for(iloo=0; iloo<commands.length; iloo +=1){              
      if(tmp[0]===commands[iloo]){
      gcom=commands[iloo];
          if(gcom==="shape"){
          document.getElementById("Dside").value=Number(tmp[iloo +1]);
            wloo=Number(tmp[iloo +2])
        if(wloo>0){            
            while(wloo>0){
            
            saveDrawing[4][saveDrawing[4].length]=gcom;
            drawGrid(can.value,gcom);
                if(Number(tmp[iloo +3])>0){
                col=importColor(wloo);
            drawGrid(can.value,"fillcolor",0,0,col);
                }
            saveDrawing[4][saveDrawing[4].length]="newColumn";
            drawGrid(can.value,"newColumn");
            //getMax();
            if(bufferArea[0].xmax>(document.getElementById(can.value)).getAttribute("width")-20){            
            saveDrawing[4][saveDrawing[4].length]="newRow";
            drawGrid(can.value,"newRow"); 
           // getMax();
            }
            wloo -=1;
            }
        }
          else{
              saveDrawing[4][saveDrawing[4].length]=gcom;
                drawGrid(can.value,gcom);
              }
          }
        
        else if(gcom==="diamond"){
            document.getElementById("fdeginsert").value=0;
            for(cloo=0; cloo<4; cloo +=1){            
             drawGrid(can.value,"angMove");
            document.getElementById("fdeginsert").value +=90;
            }
            document.getElementById("fdeginsert").value=0;
        }
        break;
      }
      }
          break;
         }
          }
    }
   
    

}

