//***********************************************************************************************
var ip="127.0.0.1";
function createModule(){    
    var that=this;
this.commands=["shape","angMove","arc","newColumn","newRow","fillColor","diamond","rectangle","traingle","parallelogram","stair"];
var lineCounter=0; //controls the path to be closed
this.CONFIGURE={LOCK:0,BACKGROUND:"cadetblue",SELWIDTH:810,SELHEIGHT:60,BUTWIDTH:100,BUTHEIGHT:2000,CONWIDTH:2000,CONHEIGHT:2040,BORDER:1,MARGIN:0,CANVAS:3,NOCANVAS:12,FONTSIZE:15,FONTFAMILY:"arial",FONTWEIGHT:"bold",USERS:"nigsti",INPUT:"local",PHOTO:"pattern",IMAGE:"landsate",FORGROUND:"pattern",FILE:undefined};//critical
    if(who.length>0){
    CONFIGURE.USERS=who[0].val;
    
    }

this.da=[];
this.slider=[];
this.monitorShadow=function(){
    var col;
    if(document.getElementById("shadowColor")){
    col=document.getElementById("shadowColor").value;
    
    }
    else{
    col="nocolor";
    
    
    }
    return col;
};

this.controller=[1,2]; //event control
 var TargetC=""; 
//var inputData=[];//{r:20},{r:30},{r:40},{r:50},{r:60},{r:70},{r:80},{r:90},{r:100},{r:120},{r:130}];
    //*******************************************************************************************
    
    this.collectPoints=[[],[],[]];
    
    this.generateData=function(co,dat){
    var del,el,can,con,val,loo,las;
    del=document.getElementById("drawingfile");
    el=document.getElementById("mappingfile");
    if(el){    
    val=el.value;
    if(co===0){  
    
    can=collectPoints[0][1]+","+collectPoints[1][1];       
      //-1 is to avoid the last enyry of the doubleclick      
    for(loo=2; loo<collectPoints[0].length-1; loo +=1){    //3 is used to avoid the first mouse move and the second is used on the top can variable            
   
    can=can+","+collectPoints[0][loo]+","+collectPoints[1][loo];          
     
    
    }  
    
    }
        el.value=can;
    }
    if(dat==="save"){
        if(saveDrawing[4].length>0){
            if(saveDrawing[4][0]==="angMove"){ 
            can=saveDrawing[0][0]+","+saveDrawing[1][0]+","+saveDrawing[2][0]+","+saveDrawing[3][0]+","+saveDrawing[4][0]+","+saveDrawing[6][0]+","+saveDrawing[12][0];
            }
        else if(saveDrawing[4][0]==="arc"){
            can=saveDrawing[0][0]+","+saveDrawing[1][0]+","+saveDrawing[2][0]+","+saveDrawing[3][0]+","+saveDrawing[4][0]+","+saveDrawing[6][0]+","+saveDrawing[7][0]+","+saveDrawing[12][0];
            
            }
    
    else if(saveDrawing[4][0]==="fillcolor"){
            can=saveDrawing[0][0]+","+saveDrawing[1][0]+","+saveDrawing[2][0]+","+saveDrawing[3][0]+","+saveDrawing[4][0]+","+saveDrawing[6][0]+","+saveDrawing[7][0]+","+saveDrawing[8][0]+","+saveDrawing[12][0];
            
            }
    else if(saveDrawing[4][0]==="shape"){
         can=saveDrawing[0][0]+","+saveDrawing[1][0]+","+saveDrawing[2][0]+","+saveDrawing[3][0]+","+saveDrawing[4][0]+","+saveDrawing[9][0]+","+saveDrawing[12][0];
    }
    
            else{
        can=saveDrawing[0][0]+","+saveDrawing[1][0]+","+saveDrawing[2][0]+","+saveDrawing[3][0]+","+saveDrawing[4][0]+","+saveDrawing[12][0];
            }
     for(loo=1; loo<saveDrawing[4].length; loo +=1){
             if(saveDrawing[4][loo]==="angMove"){
            can=can+","+saveDrawing[2][loo]+","+saveDrawing[3][loo]+","+saveDrawing[4][loo]+","+saveDrawing[6][loo]+","+saveDrawing[12][loo];
            }
            else if(saveDrawing[4][loo]==="arc"){
                
             can=can+","+saveDrawing[2][loo]+","+saveDrawing[3][loo]+","+saveDrawing[4][loo]+","+saveDrawing[6][loo]+","+saveDrawing[7][loo]+","+saveDrawing[12][loo];
            
            }
         
          else if(saveDrawing[4][loo]==="fillcolor"){
                
             can=can+","+saveDrawing[2][loo]+","+saveDrawing[3][loo]+","+saveDrawing[4][loo]+","+saveDrawing[8][loo]+","+saveDrawing[12][loo];
            
            }
         else if(saveDrawing[4][loo]==="shape"){
        can=can+","+saveDrawing[2][loo]+","+saveDrawing[3][loo]+","+saveDrawing[4][loo]+","+saveDrawing[9][loo]+","+saveDrawing[12][loo];
    }
         
         
            else{
        can=can+","+saveDrawing[2][loo]+","+saveDrawing[3][loo]+","+saveDrawing[4][loo]+","+saveDrawing[12][loo];
            }
        
        }        
        
        
        }
    del.value=can;
    }
    
}
    
//*************************************************************************************
this.nodeDrawing=[[],[],[]];
this.readDrawing=[[],[],[],[],[],[{Ucount:0,UtotalD:0,UAcount:0,UAtotalD:0,UJcount:0,UJtotalD:0,Dcount:0,DtotalD:0,DAcount:0,DAtotalD:0,DJcount:0,DJtotalD:0,Lcount:0,LtotalD:0,LAcount:0,LAtotalD:0,LJcount:0,LJtotalD:0,Rcount:0,RtotalD:0,RAcount:0,RAtotalD:0,RJcount:0,RJtotalD:0}]]; 
this.importData=function(){
if(document.getElementById("vleftMenu").childNodes[0].value!="pause"){
                    if(saveDrawing[0].length <1){
        saveDrawing[0][saveDrawing[0].length]=bufferArea[bufferArea.length-1].x1;
        saveDrawing[1][saveDrawing[1].length]=bufferArea[bufferArea.length-1].y1;
        
        }
    }

}
//0=x,1=y,2=arrow,3=dimenssio,4=command,5=stat,6=fromdegree,7=todegree,8=fillcolor,9=side,10=newrow,11=newcol,12=color
this.saveDrawing=[[],[],[],[],[],[{Ucount:0,UtotalD:0,UAcount:0,UAtotalD:0,UJcount:0,UJtotalD:0,Dcount:0,DtotalD:0,DAcount:0,DAtotalD:0,DJcount:0,DJtotalD:0,Lcount:0,LtotalD:0,LAcount:0,LAtotalD:0,LJcount:0,LJtotalD:0,Rcount:0,RtotalD:0,RAcount:0,RAtotalD:0,RJcount:0,RJtotalD:0}],[],[],[],[],[],[],[]];  
this.borderLine=[{x0:0,y0:0},{x1:0,y1:0,x2:0,y2:0}];
    

this.bufferArea=[{x1:0,y1:0,x2:0,y2:0,p:200,x3:0,y3:0,tx:0,ty:0,xo:0,yo:0,xmax:0,ymax:0,xmin:0,ymin:0,dy:0,dx:0,sx:0,sy:0}];
this.getMax=function(){   
if(bufferArea[0].y1>bufferArea[0].ymax && bufferArea[0].x1>bufferArea[0].xmax){   
    bufferArea[0].xmax=bufferArea[0].x1;   
    bufferArea[0].ymax=bufferArea[0].y1;
    bufferArea[0].dx=bufferArea[0].xmax-bufferArea[0].xmin;
    bufferArea[0].dy=bufferArea[0].ymax-bufferArea[0].ymin;
    }
else if(bufferArea[0].y1>bufferArea[0].ymax && bufferArea[0].x1<bufferArea[0].xmax){   
    bufferArea[0].ymin=bufferArea[0].ymax;
    bufferArea[0].ymax=bufferArea[0].y1;
    
    } 
else if(bufferArea[0].y1<bufferArea[0].ymin && bufferArea[0].x1>bufferArea[0].xmax){    
    bufferArea[0].xmax=bufferArea[0].x1;    
    bufferArea[0].ymin=bufferArea[0].y1;
    bufferArea[0].dx=bufferArea[0].xmax-bufferArea[0].xmin;
    bufferArea[0].dy=bufferArea[0].ymax-bufferArea[0].ymin;
}
else if(bufferArea[0].y1<bufferArea[0].ymin && bufferArea[0].x1<bufferArea[0].xmax){
    bufferArea[0].ymin=bufferArea[0].y1;
    
    bufferArea[0].dy=bufferArea[0].ymax-bufferArea[0].ymin;
}
else{
if(bufferArea[0].x1>bufferArea[0].xmax){     
    bufferArea[0].xmax=bufferArea[0].x1;
    bufferArea[0].dx=bufferArea[0].xmax-bufferArea[0].xmin;
}
else if(bufferArea[0].x1<bufferArea[0].xmin){
 bufferArea[0].xmin=bufferArea[0].x1;

bufferArea[0].dx=bufferArea[0].xmax-bufferArea[0].xmin;
}
}
    
};
    
//***********************************************************************************
this.pieLocation=[{x1:0,y1:0,x2:0,y2:0}];
this.configurationData=[[],[]];
    
//********************************************************************************
    
   this.borderData=function(event){      
    if(borderLine[0].x0===0){
borderLine[0].x0=event.pageX - CONFIGURE.BUTWIDTH;
borderLine[0].y0=event.pageY - CONFIGURE.SELHEIGHT;
}
else if(borderLine[1].x1===0){
borderLine[1].x1=event.pageX - CONFIGURE.BUTWIDTH;
borderLine[1].y1=event.pageY - CONFIGURE.SELHEIGHT;

}
else{
borderLine[1].x2=event.pageX - CONFIGURE.BUTWIDTH;
borderLine[1].y2=event.pageY - CONFIGURE.SELHEIGHT;
} 
    
if(bufferArea[0].x1===0 && bufferArea[0].y1===0){
bufferArea[0].x1=event.pageX - CONFIGURE.BUTWIDTH;
bufferArea[0].y1=event.pageY - CONFIGURE.SELHEIGHT;
bufferArea[0].xmax=bufferArea[0].x1;
bufferArea[0].ymax=bufferArea[0].y1;
bufferArea[0].xmin=bufferArea[0].x1;
bufferArea[0].ymin=bufferArea[0].y1;

}
else if(bufferArea[0].x2===0 && bufferArea[0].y2===0){
    bufferArea[0].x2=event.pageX - CONFIGURE.BUTWIDTH;
    bufferArea[0].y2=event.pageY - CONFIGURE.SELHEIGHT;
    if(document.getElementById("vrightMenu").childNodes[0].value!="circle"){
    bufferArea[0].x1=bufferArea[0].x2;
    bufferArea[0].y1=bufferArea[0].y2;
    }
    bufferArea[0].xo=bufferArea[0].x2;
    bufferArea[0].yo=bufferArea[0].y2;
    bufferArea[0].xmax=bufferArea[0].x1;
    bufferArea[0].ymax=bufferArea[0].y1;
    bufferArea[0].xmin=bufferArea[0].x1;
    bufferArea[0].ymin=bufferArea[0].y1
    }
    
else{    
    bufferArea[0].x2=event.pageX - CONFIGURE.BUTWIDTH;
    bufferArea[0].y2=event.pageY - CONFIGURE.SELHEIGHT;
    if(document.getElementById("vrightMenu").childNodes[0].value!="circle"){
    bufferArea[0].x1=bufferArea[0].x2;
    bufferArea[0].y1=bufferArea[0].y2;
    }
    bufferArea[0].xo=bufferArea[0].x2;
    bufferArea[0].yo=bufferArea[0].y2;
    bufferArea[0].xmax=bufferArea[0].x1;
    bufferArea[0].ymax=bufferArea[0].y1;
    bufferArea[0].xmin=bufferArea[0].x1;
    bufferArea[0].ymin=bufferArea[0].y1
          
    }    
    

}
 
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   
     
    this.drawHistogram=function(id,inp) {        
    var tofset,hwidth,addline,conver=0,max,min,nspl,loo,splel,elval,el,hisArray,lhis,lctx,getHis,con,his,x11,x22,y11,y22,color;
       inp=[{r:200}]; 
       
        tofset=150;
        hwidth=10;
        if(document.getElementById("vleftMenu")){
        addline=document.getElementById("vleftMenu").childNodes[0].value;
        }
        color=document.getElementById("mycolor");       
    if(document.getElementById("canvas")){
       id=document.getElementById("canvas").value;        
    getHis=document.getElementById(id);
        if(document.getElementById("canvas").value==id){
    if(getHis.getContext){
    lctx=getHis.getContext("2d");        
        lctx.font="bold 15px Arial";
        lctx.textAlign="left";
        lctx.textBasline="middle"
        lctx.fillStyle=color.value;
        if(document.getElementById("shadowColor").value!="nocolor"){
        lctx.shadowColor=(document.getElementById("shadowColor"))?document.getElementById("shadowColor").value:"lightgray";
        lctx.shadowBlur=5;
        lctx.shadowOffsetX=5;
        lctx.shadowOffsetY=5;
        }        
        
        lhis=0; 
        //hisData=dataAnalysis();        
        //***************************************************************************      
        if(document.getElementById("mappingfile")){
        el=document.getElementById("mappingfile");        
          elval=el.value;
            if(elval!=undefined){
        splel=elval.split(",");            
         for(nspl=0;nspl<splel.length; nspl +=1){
             
                 conver=Number(splel[nspl]);
             if(typeof conver==="number"){//typeof conver===Number){//to be checked //////////////////////////////////////
         splel[nspl]=conver; 
             }
         
         }  
        max=splel[0];        
        for(loo=1; loo<splel.length; loo +=1){
          if(max<Math.abs(splel[loo])){
          max=splel[loo];
          
          }              
                
        }
                
            for(nspl=0; nspl<splel.length; nspl +=1){
                if(max!=0){ 
            splel[nspl]=Math.floor((splel[nspl] * bufferArea[0].p)/max);//intruder bufferArea
            }
             else{
            splel[nspl]=0;
            }
        
        }
           
         //elval=splel.toString();
            for(loo=0; loo<splel.length; loo +=1){
                if(loo<inp.length){
            inp[loo].r=(splel[loo]);
                }
                else{
                inp[inp.length]={r:(splel[loo])}; //if the input is greater than the default array given above
                
                }
            }
        
        }
        
            else{
            inp=[{r:0}];//if the input in the textarea is empty
            
            }
    }
        //******************************************************************************
        else{
        max=inp[0].r;
        for(loo=0; loo<inp.length; loo +=1){//get max from default data
        if(Math.abs(inp[loo].r)>max){
        max=inp[loo].r;        
        }
            
        }       
        for(loo=0; loo<inp.length; loo +=1){//covert to 200 percent
            if(max!=0){
            inp[loo].r=Math.floor(inp[loo].r * bufferArea[0].p/max)
            }
        }
        }
        //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        if(bufferArea[bufferArea.length-1].y1<=250){
          bufferArea[bufferArea.length-1].y1=250;  
        }
        
        hisArray=passHisto(inp);
        lctx.beginPath();
        lctx.moveTo(hisArray[0].x,hisArray[0].y);        
        if(hisArray[0].r>=0){
           
        x11=hisArray[0].x;
        y11=hisArray[0].y;
        if(hisArray.length>2){            
        while(lhis<hisArray.length){            
            lctx.lineTo(hisArray[lhis].x,hisArray[0].y);                        
            x22=hisArray[lhis].x;
            y22=hisArray[lhis].y; 
            
            his=Math.floor(Math.sqrt((x22-x11)*(x22-x11)+(y22-y11)*(y22-y11)));
          if(lhis<hisArray.length){ 
          if(hisArray[lhis].r>=0){  
           
       // lctx.fillText(hisArray[lhis].x,hisArray[lhis].x+5,hisArray[lhis].y+20); 
               
               
              
          }
              else{
               
             // lctx.fillText(hisArray[lhis].x,hisArray[lhis].x+5,hisArray[lhis].y-20);
               
             
              }
          }
        x11=x22;
        y11=y22;
            lhis +=1;
       
        }
        
    lctx.stroke();
      lhis =0;
        lctx.beginPath();
        lctx.moveTo(hisArray[0].x,hisArray[0].y);
           //lctx.closePath(); 
        //*************************************************************************************************************************
        while(lhis<hisArray.length){
            
            lctx.fillStyle=color.value;
         if(hisArray[lhis].r>=0){  
        lctx.fillRect(hisArray[lhis].x,Math.abs(hisArray[lhis].r-hisArray[lhis].y),hwidth,hisArray[lhis].r)
         }
          
        else{
        lctx.fillRect(hisArray[lhis].x,hisArray[lhis].y,hwidth,Math.abs(hisArray[lhis].r))
        }
        
        if(lhis===0){            
        lctx.moveTo(hisArray[lhis].x,Math.abs(hisArray[lhis].y));
        }
        lctx.strokeStyle=color.value;
            if(addline==="addline"){
        lctx.lineTo(hisArray[lhis].x,Math.abs(hisArray[lhis].y-hisArray[lhis].r));            
        lctx.lineTo(hisArray[lhis].x+hwidth,Math.abs(hisArray[lhis].r-hisArray[lhis].y));
        
            }
        
        if(hisArray[lhis].r>=0){
        lctx.fillText(hisArray[lhis].r,hisArray[lhis].x+5,(Math.abs((hisArray[lhis].y-hisArray[lhis].r-5))))  
         //lctx.fillRect();
        }
            else{
            lctx.fillText(hisArray[lhis].r,hisArray[lhis].x+5,(Math.abs(hisArray[lhis].r)+(hisArray[lhis].y)+15)) 
            
            
            }
        lhis +=1;
        if(lhis===hisArray.length -1 ){
             //lctx.moveTo(hisArray[0].x,Math.abs(hisArray[0].y-hisArray[0].r));
        
        lctx.stroke();
        //lctx.fill();
        //lctx.stroke();
        }
         
        
        
        }
        lctx.stroke();
        //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    
        lhis=hisArray.length-1;
            //lctx.moveTo(hisArray[0].x,Math.abs(hisArray[0].y-hisArray[0].r));
            while(lhis>=0){
            lctx.strokeStyle=color.value;
          if(addline==="addline"){ 
              
        lctx.lineTo(hisArray[lhis].x+hwidth,Math.abs(hisArray[lhis].r-hisArray[lhis].y));
        lctx.lineTo(hisArray[lhis].x,Math.abs(hisArray[lhis].r-hisArray[lhis].y));
          }
        
            lhis -=1;
            }
       
    
    }
            
        }
    }
    }
    }
    }
   //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    
   //***********************************************************************************************
    this.drawPoint=function(id,buffer){
        var tt,oddeven,persont=200,calradius,rp,loo,splel,elval,el,cel,by,bx,points,getImage,enele,enctx,max,min,mean=0;
        splel=[];
        inp=[];
        rp=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
     cel=document.getElementById("canvas");  
     el=document.getElementById("mappingfile");
        
    if(el){
    elval=el.value;
    splel=elval.split(",");
    }   
    if(cel){
    id=cel.value;    
    enele=document.getElementById(id);
    if(cel.value==id){
    if(enele.getContext){
       enctx=enele.getContext("2d");
        if(document.getElementById("shadowColor").value!="nocolor"){
        enctx.shadowColor=(document.getElementById("shadowColor"))?document.getElementById("shadowColor").value:"lightgray";
        enctx.shadowBlur=5;
        enctx.shadowOffsetX=5;
        enctx.shadowOffsetY=5;
        }
        enctx.font=CONFIGURE.FONTWEIGHT+" "+CONFIGURE.FONTSIZE+"px"+" "+CONFIGURE.FONTFAMILY;
        enctx.textAlign="left";
        enctx.textBasline="middle"       
        enctx.beginPath();      
        enctx.fillStyle=(document.getElementById("mycolor"))?document.getElementById("mycolor").value:"green";
       enctx.strokeStyle=(document.getElementById("mycolor"))?document.getElementById("mycolor").value:"green";
        //**************************************************************************
        if(buffer==="circle" && (bufferArea[0].x1!=0 && bufferArea[0].x2!=0)){
            enctx.beginPath();
            //enctx.moveTo(bufferArea[0].x1,bufferArea[0].y1);
        calradius=Math.floor(Math.sqrt(Math.abs((bufferArea[0].x2-bufferArea[0].x1)*(bufferArea[0].x2-bufferArea[0].x1))+Math.abs((bufferArea[0].y2-bufferArea[0].y1)*(bufferArea[0].y2-bufferArea[0].y1))));
            if(bufferArea[0].x2>bufferArea[0].x1){
            if(Math.abs(bufferArea[0].x2-bufferArea[0].x1)<5){
            enctx.arc(Math.abs(bufferArea[0].x2),Math.abs(bufferArea[0].y2-calradius),calradius,0,2*Math.PI,true);
            }
            else if(Math.abs(bufferArea[0].y2-bufferArea[0].y1)<5){
            enctx.arc(Math.abs(bufferArea[0].x2-calradius),Math.abs(bufferArea[0].y2),calradius,0,2*Math.PI,true);
            
            }
            else{
            enctx.arc(Math.abs(bufferArea[0].x2),Math.abs(bufferArea[0].y2),calradius,0,2*Math.PI,true);
            
            }
            }
            else if(bufferArea[0].x2<bufferArea[0].x1){
            
            if(Math.abs(bufferArea[0].x2-bufferArea[0].x1)<5){
            enctx.arc(Math.abs(bufferArea[0].x1),Math.abs(bufferArea[0].y1-calradius),calradius,0,2*Math.PI,true);
            }
            else if(Math.abs(bufferArea[0].y2-bufferArea[0].y1)<5){
            enctx.arc(Math.abs(bufferArea[0].x1-calradius),Math.abs(bufferArea[0].y1),calradius,0,2*Math.PI,true);
            
            }
            else{
            enctx.arc(Math.abs(bufferArea[0].x1),Math.abs(bufferArea[0].y1),calradius,0,2*Math.PI,true);
            
            }
            
            }
            else if(bufferArea[0].x2===bufferArea[0].x1){
            if(bufferArea[0].y2>bufferArea[0].y1){
            enctx.arc(Math.abs(bufferArea[0].x2),Math.abs(bufferArea[0].y2-calradius),calradius,0,2*Math.PI,true);
            }
            else if(bufferArea[0].y2<bufferArea[0].y1){
            enctx.arc(Math.abs(bufferArea[0].x1-calradius),Math.abs(bufferArea[0].y1),calradius,0,2*Math.PI,true);
            
            }
            else{
            enctx.arc(Math.abs(bufferArea[0].x2),Math.abs(bufferArea[0].y2),calradius,0,2*Math.PI,true);
            
            }           
            
            }
            enctx.closePath();
            enctx.fill();
            
            
        }
        
        
        //scatter plot,this creates the structure on which the data to  be displied
        else if(buffer==="scatter" && splel.length>0){
        
        if(bufferArea[bufferArea.length-1].x1!=0 && bufferArea[bufferArea.length-1].x2!=0){
        if(bufferArea[bufferArea.length-1].y1<=450){
        
        bufferArea[bufferArea.length-1].y1=450;
        }        
        if(splel.length>0){
        for(loo=0; loo<splel.length; loo +=1){
            try{
            splel[loo]=Number(splel[loo]);       
        mean=mean+splel[loo];
            }
            catch(e){}
        }
            if(splel.length>0){
        mean=Math.floor(mean/splel.length);
            }
        max=splel[0];
        min=splel[0];
            for(loo=0; loo<splel.length; loo +=1){
            
            if(Math.abs(splel[loo])>max){
            max=splel[loo];            
            }
            if(Math.abs(splel[loo])<min){
            min=splel[loo];            
            }
            }
          for(loo=0; loo<splel.length; loo +=1){
              if(max!=0){
          splel[loo]=Math.floor(splel[loo]*400/max);
              }
          
          } 
            
        }
        
        }       
        
        
        }
        
        if(buffer==="circle" && splel.length>0){        
        points=passPoint(splel,rp);        
        } 
        
        
        else if(buffer==="scatter" && (splel.length>0 && bufferArea[bufferArea.length-1].x1!=0)){
            by=bufferArea[bufferArea.length-1].y1;
            bx=bufferArea[bufferArea.length-1].x1;
            enctx.beginPath();
            enctx.moveTo(bx,by);
           enctx.lineTo(bx,by-400);
            enctx.moveTo(bx,by);
            //if(bufferArea[bufferArea.length].y1+200>=
            
             if(by+450>enele.getAttribute("height")){
                
            enctx.lineTo(bx,enele.getAttribute("height")-20);
            }
            else{
                
             enctx.lineTo(bx,by+450);
            }
            enctx.moveTo(bx,by);            
            enctx.lineTo(enele.getAttribute("width")-200,by);
            enctx.moveTo(bx,by);
            
            if(splel.length>0){
            if(splel.length%2===0){            
            oddeven=splel.length;
            }
            else{
            oddeven=splel.length-1;
            }
            //enctx.fillText(tval,bx,by-420);
              for(loo=0;loo<oddeven-1; loo +=2){
              
              if(splel[loo+1]>0){
               enctx.moveTo(bx+Math.abs(splel[loo]),by-Math.abs(splel[loo+1]));
              enctx.arc(bx+Math.abs(splel[loo]),by-Math.abs(splel[loo+1]),2,0,2*Math.PI,true); 
                enctx.closePath();
                enctx.fill();
                enctx.stroke();
                enctx.beginPath()
              }
              else if(splel[loo+1]<0){
               
              enctx.moveTo(bx+Math.abs(splel[loo]),by+Math.abs(splel[loo+1]));
              enctx.arc(bx+Math.abs(splel[loo]),by+Math.abs(splel[loo+1]),2,0,2*Math.PI,true);
                enctx.closePath();
                enctx.fill();
                enctx.stroke();
                
                enctx.beginPath()
              }
            else if(splel[loo+1]===0){
            enctx.moveTo(bx+Math.abs(splel[loo]),by+splel[loo+1]);
              enctx.arc(bx+Math.abs(splel[loo]),by+Math.abs(splel[loo+1]),2,0,2*Math.PI,true);
                enctx.closePath();
                enctx.fill();
                enctx.stroke();
                enctx.beginPath()
            }
              
              }  
                
                
            }
            enctx.closePath();
            enctx.fill();
            enctx.stroke();
        }
       
        else{
        points=passPoint(inp,rp); //returns array object
        }
        
        
        if(buffer!="scatter" && buffer!="circle"){
             tt=0;
        while(tt<points.length){
            enctx.fillStyle=(document.getElementById("mycolor"))?document.getElementById("mycolor").value:"green";
            enctx.beginPath();
            enctx.arc(0+points[tt].x,points[tt].y,points[tt].r,0,2*Math.PI,true);            
            enctx.closePath();
        enctx.fill(); 
            enctx.fillStyle=(document.getElementById("mycolor"))?document.getElementById("mycolor").value:"green";
            enctx.beginPath();
        enctx.fillText(points[tt].r,points[tt].x,points[tt].y)
            enctx.closePath();
            tt +=1;
            //enctx.moveTo(150+test,150-test);
        }
        enctx.closePath;
    }
    }
    }
    }
    
    
    };
    
    //##########################################################################################################################          3
    
   this.drawLine=function(id,pol,num){
       var tra,input,check,num,inp,col,lineArray,lLine,rctx,getLine,dist,x1,x2,y1,y2,conver=0,max,min,nspl,loo,splel,elval,el;
        //the document API is one of the entry point of the data to be drawn 
       num=num;
       check=collectPoints[0].length;
        inp=[120,10]
        splel=[]; 
       input=document.getElementById("getData");
       if(input){
       if(input.value===""){       
       input.style.backgroundColor="red";
       }
        else{
        input.style.backgroundColor=CONFIGURE.BACKGROUND;
        
        }
       
       }
       if(document.getElementById("mappingfile")){
        el=document.getElementById("mappingfile");
       }
       else if(CONFIGURE.FILE!=undefined){
       el=CONFIGURE.FILE;
       }
        col=document.getElementById("mycolor"); //access the current color to fill or stroke the graph
        
        if(el){
        elval=el.value;
        }
       else{
       elval=el;
       }
        if(elval!=undefined){
            try{
        splel=elval.split(",");
            }
            catch(e){
            
            }
            
        for(loo=0; loo<splel.length; loo +=1){ 
         
            if(check===0 || num===0){
        collectPoints[0][collectPoints[0].length]=Number(splel[loo]);        
        collectPoints[1][collectPoints[1].length]=Number(splel[loo +=1]); 
        splel[loo]=Number(splel[loo]);
        if(splel[loo]===0){            
        collectPoints[2][collectPoints[2].length]=collectPoints[0].length;
        
        }
            
            }
           
        }
            }
               
       
     if(document.getElementById("canvas")){
       id=document.getElementById("canvas").value;                       
    getLine=document.getElementById(id);       
    if(getLine.getContext){
    rctx=getLine.getContext("2d");
        if(document.getElementById("shadowColor").value!="nocolor"){
        rctx.shadowColor=(document.getElementById("shadowColor"))?document.getElementById("shadowColor").value:"lightgray";
        rctx.shadowBlur=5;
        rctx.shadowOffsetX=5;
        rctx.shadowOffsetY=5;
        }
        
        rctx.font=CONFIGURE.FONTWEIGHT+" "+CONFIGURE.FONTSIZE+"px"+" "+CONFIGURE.FONTFAMILY;
        rctx.textAlign="left";
        rctx.textBasline="middle"
        rctx.fillStyle=(document.getElementById("mycolor"))?document.getElementById("mycolor").value:"green";        
        if(splel.length>0){
           lineArray=passLine(splel);
        }
       
        else{
            lineArray=passLine(inp);
        }
        //rctx.beginPath();
        
            //****************************************
        if(lineArray.length>2){
        lLine=0;
         if(num===0){
         lLine=num+1;
         }
        else if(num>0){
        lLine=num;        
        }
        rctx.moveTo(lineArray[lLine].x,lineArray[lLine].y);
        x1=lineArray[lLine].x;
        y1=lineArray[lLine].y;            
        while(lLine<lineArray.length){           
            
           if(col){
                if(col.value!=""){
                rctx.strokeStyle=col.value;
                }
                else{
                
                rctx.strokeStyle="black";
                }
                
           }
            
            
           if(lineArray[lLine].x!=0){
            
            rctx.lineTo(lineArray[lLine].x,lineArray[lLine].y); 
           }
            else{
                if(lLine<lineArray.length-1){
                    
            rctx.moveTo(lineArray[lLine+1].x,lineArray[lLine+1].y);
                    if(pol==="polygon"){
            
                       
           rctx.fill();
            rctx.stroke();
        if(document.getElementById("vleftMenu").childNodes[0].value==="classify"){
            
           break;
        }
        }
                }
                else{
                //rctx.lineTo(lineArray[0].x,lineArray[0].y);
                
                }
            
            }
            
            x2=lineArray[lLine].x;
            y2=lineArray[lLine].y;
                
            dist=Math.floor(Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)))
            rctx.fillStyle=col.value;
        //rctx.fillText(dist,lineArray[lLine].x,lineArray[lLine].y)
            x1=x2;
            y1=y2;    
          lLine +=1;  
        
        }   
            
            if(pol==="polygon"){
            
            rctx.closePath();            
           rctx.fill();
           rctx.stroke();
        }
            
            else{
            rctx.closePath();
            rctx.stroke();
            }
            
         lLine=lineArray.length-1;
            
            while(lLine>=0){
            rctx.beginPath();
            if(lineArray[lLine].x===0 || lineArray[lLine].y===0){
                if(lLine===0){
            rctx.moveTo(lineArray[lLine].x,lineArray[lLine].y);
                    if(document.getElementById("vleftMenu").childNodes[0].value==="classify"){
                        break;
                        }
                }
                else{
                
                 rctx.moveTo(lineArray[lLine-1].x,lineArray[lLine-1].y);
                } 
           
              
            }
               
                else{
            rctx.lineTo(lineArray[lLine].x,lineArray[lLine].y);
                }
            lLine -=1;
                    
            rctx.stroke();
            }
            
        
    }
        }
        }
    }
    
   //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$                  4
    
    
     this.drawGrid=function(id,boundary,arr,degree,fcolor,fpattern){
          var cpos,ccol,win,hei,tdeg,bfdeg,btdeg,odimVal, tdegV,deg,degVal,tesdeg,bou,degcos,degsin,lsize,lsizeVal=0,arrow,loo,dimx,dimy,dim,dimVal=0,bx2,bx1,by1,by2,col=0,getrect,sctx,rectArray,lrect,rect,x0,y0;
         if(arr===undefined){
         arrow=8;
         }
         else{
         arrow=arr;
         }
         bou=boundary;
            
    if(document.getElementById("canvas")){
        id=document.getElementById("canvas").value;       
    getrect=document.getElementById(id);
      
    if(document.getElementById("canvas").value == id){
    if(getrect.getContext){
    sctx=getrect.getContext("2d");
        ccol=(document.getElementById("mycolor").value=="")?"black":document.getElementById("mycolor").value;
        sctx.beginPath();        
        sctx.lineJoin="round";
        sctx.font=CONFIGURE.FONTWEIGHT+" "+CONFIGURE.FONTSIZE+"px"+" "+CONFIGURE.FONTFAMILY;;
        sctx.textAlign="left";
        sctx.textBasline="middle"
        sctx.fillStyle=(document.getElementById("mycolor"))?ccol:"red";
        sctx.strokeStyle=(document.getElementById("mycolor"))?ccol:"red";
        if(document.getElementById("shadowColor").value!="nocolor"){
        sctx.shadowColor=(document.getElementById("shadowColor"))?document.getElementById("shadowColor").value:"lightgray";
        sctx.shadowBlur=5;
        sctx.shadowOffsetX=5;
        sctx.shadowOffsetY=5;
            }
        
      // sctx.strokeStyle="gold";
        if(boundary!=undefined || boundary!="boundary"){
        lsize=document.getElementById("lineSize");
         if(lsize){
             if(lsize.value!=""){
         lsizeVal=lsize.value;
             }
         }
         dim=document.getElementById("vleftMenu");
         if(dim){
         for(loo=0; loo<dim.childNodes.length; loo +=1){         
         if(dim.childNodes[loo].id==="Dinsert"){              
                 dimVal=Number(dim.childNodes[loo].value);                 
                 if(typeof dimVal==="string"){
                 dimVal=0;
                 }        
            
            break; 
         }
         }
         }
        }
        if(boundary==="remove"){ //acually this write the text to the canvas before remove the box
        
        sctx.fillText(document.getElementById("flytext").value,bufferArea[0].tx,bufferArea[0].ty);
        
        }
        //reads file into input type of file and then add one option element to the select image element
        else if(boundary==="file"){ 
            try{
      //this has an event attached to it  
    if(document.getElementById("fileread")){
    bx2=document.getElementById("fileread").files;   
    
    if(/image/.test(bx2[0].type)){
        by1=new FileReader();
        bx1=(bx2[0].name).split(".");
        dimx=document.getElementById("bMenu");//watchout this location could be move to tMenu too
        for(loo=0; loo<dimx.childNodes.length; loo +=1){        
        if(dimx.childNodes[loo].id==="satImage"){           
        dimy=document.createElement("option");
           // win,hei,tdeg
        win=document.createTextNode(bx1[0]);  //used as name        
        dimy.style.width="20px";
        dimy.style.height="20px";
        dimy.setAttribute("name","userfile");
            if(window.URL.createObjectURL){
            dimy.setAttribute("value",window.URL.createObjectURL(bx2[0]));
            }
            else if(window.webkitURL.createObjectURL){
        dimy.setAttribute("value",window.webkitURL.createObjectURL(bx2[0]));
            }
        dimy.style.color="white";
        dimy.style.backgroundColor="black";
        dimy.appendChild(win);
        dimx.childNodes[loo].appendChild(dimy);
            break;
        }
        
        } 
        /*
        by1.readAsDataURL(bx2[0]);
        //sctx.fillText("this is a test", 200,200);
        by1.onload=function(){
            
        dim=document.createElement("img");
        dim.id="$"+bx1[0];
        dim.src=by1.result;
        dim.style.position="fixed";
        dim.style.left=CONFIGURE.BUTWIDTH+"px";
        dim.style.top=CONFIGURE.SELHEIGHT+"px";       
        dim.style.display="none";
        document.body.appendChild(dim);
        //sctx.fillText("this is a test", 200,200);
        if(document.getElementById("$"+bx1[0])){ 
        hei=document.getElementById("$"+bx1[0])       
        sctx.drawImage(hei,10,10,200,200);
        }
        }*/   
        
    }
    else if (/text/.test(bx2[0].type)){ 
        by1=new FileReader();
        dim=document.getElementById("getData");
        if(dim){            
            if(dim.value==="mapping"){       
            by1.readAsText(bx2[0]);
            by1.onload=function(){
            document.getElementById("mappingfile").value=String(by1.result);            
            }
            }
            else if(dim.value==="drawing"){
            by1.readAsText(bx2[0]);
            by1.onload=function(){
            document.getElementById("drawingfile").value=String(by1.result);           
            
            }
            }
        
        }
             
             }
       }
                
            }
            
        catch(e){
        
        }
        }
    
    
        
        else if(boundary==="boundary"){         
        sctx.lineJoin="round";
        bx1=borderLine[1].x1;
        by1=borderLine[1].y1;        
        bx2=borderLine[1].x2;        
        by2=borderLine[1].y2;
        sctx.moveTo(bx1,by1);        
        sctx.strokeStyle=(document.getElementById("mycolor"))?document.getElementById("mycolor").value:"green";
        sctx.lineTo(bx2,by2)
        sctx.closePath();
        sctx.stroke();         
          
        }
        else if(boundary==="newRow"){ 
        
        dimVal=Number(document.getElementById("Dinsert").value);        
        bufferArea[0].x1=bufferArea[0].xo; 
        bufferArea[0].xmax=bufferArea[0].xo; 
        bufferArea[0].ymin=bufferArea[0].ymax;
        bufferArea[0].y1=bufferArea[0].ymax+bufferArea[0].dy;       
        sctx.moveTo(bufferArea[0].x1,bufferArea[0].y1)
        if(nodeDrawing[0][nodeDrawing[0].length-1]!=0){
        nodeDrawing[0][nodeDrawing[0].length]=0;
        nodeDrawing[1][nodeDrawing[1].length]=0;
        }
        saveDrawing[3][saveDrawing[4].length-1]=dimVal;
        saveDrawing[2][saveDrawing[4].length-1]=arrow;
        sctx.closePath();
        sctx.stroke();
       
        }
        
        else if(boundary==="newColumn"){        
        dimVal=Number(document.getElementById("Dinsert").value);       
        bufferArea[0].x1=bufferArea[0].xmax+dimVal;        
        sctx.moveTo(bufferArea[0].x1,bufferArea[0].y1)
         if(nodeDrawing[0][nodeDrawing[0].length-1]!=0){
        nodeDrawing[0][nodeDrawing[0].length]=0;
        nodeDrawing[1][nodeDrawing[1].length]=0;  
         }
        saveDrawing[3][saveDrawing[4].length-1]=dimVal;
        saveDrawing[2][saveDrawing[4].length-1]=arrow;
        sctx.closePath();
        sctx.stroke();
        
        }
        
        else if(boundary==="fillcolor"){
            dim=0;
           if(fcolor!=undefined && fcolor!="0"){
            sctx.fillStyle=fcolor;
            sctx.strokeStyle=fcolor;
           }
            else if(fpattern!=undefined){
            bx1=sctx.createPattern(document.getElementById("tempimage"),"repeat");
            sctx.fillStyle=bx1;            
            }
            else{
                
            sctx.strokeStyle=(document.getElementById("mycolor"))?ccol:"green";
            sctx.fillStyle=(document.getElementById("mycolor"))?ccol:"green";
            }
            if(nodeDrawing[0].length>0){
                if(nodeDrawing[2].length>0){
                dim=nodeDrawing[2][nodeDrawing[2].length-1];
                }
        sctx.moveTo(nodeDrawing[0][0],nodeDrawing[1][0]);
                //loop on a one class at a time
        for(loo=dim; loo<nodeDrawing[0].length; loo +=1){ 
            if(nodeDrawing[0][loo]===0){
            sctx.moveTo(nodeDrawing[0][loo+1],nodeDrawing[1][loo+=1]) 
            }
            else{
        sctx.lineTo(nodeDrawing[0][loo],nodeDrawing[1][loo]); 
            }          
            }
        sctx.closePath();
        sctx.fill();
        sctx.stroke();      
        
        nodeDrawing[2][nodeDrawing[2].length]=nodeDrawing[0].length;//this is important for fill divission
            
        }
        //to keep sync with the index of others 
        //to keep sync with the index of others 
        //this is added because 3, 8 and 4 are modified in the rpassvalue
        saveDrawing[2][saveDrawing[4].length-1]=arrow;
        saveDrawing[6][saveDrawing[4].length-1]=0;
        saveDrawing[7][saveDrawing[4].length-1]=0;
        saveDrawing[12][saveDrawing[4].length-1]=ccol;
        
        //saveDrawing[8][saveDrawing[8].length]="white";   you don't need this cos it is updated in the fillcolor section down  
        }
    
        else if(boundary==="join"){
        sctx.moveTo(bufferArea[0].x1,bufferArea[0].y1);
        sctx.lineTo(bufferArea[0].x3,bufferArea[0].y3);
        bufferArea[0].x1=bufferArea[0].x3;
        bufferArea[0].y1=bufferArea[0].y3;
        sctx.closePath();
        sctx.stroke();
        sctx.fill();
        nodeDrawing[0][nodeDrawing[0].length]=bufferArea[0].x1;
        nodeDrawing[1][nodeDrawing[1].length]=bufferArea[0].y1;
        
        }
        //********************************************************************************************DRAW
        
         else if(boundary==="shape"){             
        tdeg=document.getElementById("Dside");
        
             if(tdeg){
                 try{
             tdegV=Number(tdeg.value);        
            
                     if(tdegV<=0){
                     tdegV=3;
                     }
                     else if(tdegV>=36){
                     tdegV=36;
                     }
                 }
                 catch(e){
                 tdegV=3;                 
                 }  
                 
                 document.getElementById("fdeginsert").value=(360/tdegV)*(-1);
                
                 for(loo=0; loo<tdegV; loo +=1){                    
                     
                    drawGrid(document.getElementById("canvas").value,"angMove");            
                     
                    document.getElementById("fdeginsert").value -=(360/tdegV)*(-1); 
                     
                    if(document.getElementById("fdeginsert").value<=-360){
                    
                    break;
                    }
                 }
                
                    
                document.getElementById("fdeginsert").value=0;
                 
             }
        
        }
        else if(boundary==="angMove"){
            odimVal=dimVal;
            dimVal +=Math.ceil(10*(dimVal/100)*(Math.PI*180/360));
            deg=document.getElementById("fdeginsert");
        if(deg){
                try{
            degVal=(Number(deg.value))           
            tesdeg=degVal/2;                                
            
            if(degVal>=360 || degVal<=-360){
            degVal=360;                
                if(degVal<=-360){
                degVal=-360;
                }
            } 
             
                }
            catch(e){
            degVal=0;
            degVal=0;
            }           
            
            }
            if(degVal>=0 && degVal<=90){
            degcos=(Math.cos(degVal/180*Math.PI));
            degsin=(Math.sin(degVal/180*Math.PI))*(-1);
            }
            else if(degVal>90 && degVal<=180){
            degcos=(Math.cos(degVal/180*Math.PI));
            degsin=(Math.sin(degVal/180*Math.PI))*(-1);
            
            }
            else if(degVal>180 && degVal<=270){
            degcos=(Math.cos(degVal/180*Math.PI));
            degsin=(Math.sin(degVal/180*Math.PI))*(-1);
            
            }
            
            else if(degVal>270 && degVal<=360){
            degcos=(Math.cos(degVal/180*Math.PI));
            degsin=(Math.sin(degVal/180*Math.PI))*(-1);
            
            }
            
            else if(degVal>=-90 && degVal<0){
            degcos=(Math.cos(degVal/180*Math.PI));
            degsin=(Math.sin(degVal/180*Math.PI))*(-1);
            }
            else if(degVal>=-180 && degVal<-90){
            degcos=(Math.cos(degVal/180*Math.PI));
            degsin=(Math.sin(degVal/180*Math.PI))*(-1);
            }
            else if(degVal>=-270 && degVal<-180){
            degcos=(Math.cos(degVal/180*Math.PI));
            degsin=(Math.sin(degVal/180*Math.PI))*(-1);
            }
            else if(degVal>=-360 && degVal<-270){
            degcos=(Math.cos(degVal/180*Math.PI));
            degsin=(Math.sin(degVal/180*Math.PI))*(-1);
            }
            //to be cheked for 0.0000000001234 denominator 
            if(degcos!=0 && degsin!=0){
                
            dimx=(dimVal*(degcos));
            dimy=((dimVal*(degsin)));
            }
            else if(degcos!=0 && degsin===0){
                dimx=(dimVal*(degcos));
                dimy=0;
            }
             else if(degcos===0 && degsin!=0){
                dimx=0;
                dimy=(dimVal*(degsin));
             
             }
            
             else if(degcos===0 && degsin===0){
                dimy=0;
                dimx=0;             
             }
            
            
           
            if(bufferArea[bufferArea.length-1].x1!=0 && bufferArea[bufferArea.length-1].x2!=0){                
                sctx.moveTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
                bufferArea[0].sx=bufferArea[bufferArea.length-1].x1;
                bufferArea[0].sy=bufferArea[bufferArea.length-1].y1;
        sctx.lineTo(bufferArea[bufferArea.length-1].x1+dimx,bufferArea[bufferArea.length-1].y1+dimy);        
        bufferArea[bufferArea.length-1].x1=bufferArea[bufferArea.length-1].x1+dimx;
        bufferArea[bufferArea.length-1].y1=bufferArea[bufferArea.length-1].y1+dimy;               
        sctx.closePath();
        sctx.stroke();
        if(dimVal>=0){
        if(document.getElementById("vleftMenu").childNodes[0].value!="pause"){         
        importData();
            
        saveDrawing[3][saveDrawing[4].length-1]=odimVal;
        saveDrawing[2][saveDrawing[4].length-1]=arrow;
        saveDrawing[6][saveDrawing[4].length-1]=Number(degVal);        
        saveDrawing[12][saveDrawing[4].length-1]=ccol;        
        }
        }
        nodeDrawing[0][nodeDrawing[0].length]=bufferArea[0].x1;
        nodeDrawing[1][nodeDrawing[1].length]=bufferArea[0].y1;
        
        try{
            getMax();
        }
        catch(e){}
               /*}  */ 
          
        
            }
        }        
        
        //*************************************************************************************ARC
        else if(boundary==="arc"){
            
            deg=document.getElementById("fdeginsert");
            tdeg=document.getElementById("tdeginsert");
            if(deg && tdeg){
                try{
            degVal=(Number(deg.value))            
            tdegV=(Number(tdeg.value))
            tesdeg=degVal/2;
            tesdeg=tdegV/2; 
            bfdeg=degVal;
            btdeg=tdegV;
            if(degVal>=0 && (degVal<270 || tdegV<270)){
            degVal +=90;
            tdegV +=90;            
            }
               else if(degVal>=0 && (degVal>=270 || tdegV>=270)) {
                       
                       degVal=Math.abs(270 - degVal);
                       tdegV=Math.abs(270 - tdegV);
                       }
                
            
            if(degVal>=360 || degVal<=-360){
            degVal=360;                
                if(degVal<=-360){
                degVal=-360;
                }
            }
            if(tdegV>=360 || tdegV<=-360){
            tdegV=360;
                if(tdegV<=-360){
                tdegV=-360;
                }
            }
                    
                }
            catch(e){
            degVal=0;
            degVal=0;
            }
            }
            
            if(degVal>=0 && degVal<=90){
            degcos=(Math.cos(degVal/180*Math.PI));
            degsin=(Math.sin(degVal/180*Math.PI))*(-1);
            }
            else if(degVal>90 && degVal<=180){
            degcos=(Math.cos(degVal/180*Math.PI));
            degsin=(Math.sin(degVal/180*Math.PI))*(-1);
            
            }
            else if(degVal>180 && degVal<=270){
            degcos=(Math.cos(degVal/180*Math.PI));
            degsin=(Math.sin(degVal/180*Math.PI))*(-1);
            
            }
            
            else if(degVal>270 && degVal<=360){
            degcos=(Math.cos(degVal/180*Math.PI));
            degsin=(Math.sin(degVal/180*Math.PI))*(-1);
            
            }
            
            else if(degVal>=-90 && degVal<0){
            degcos=(Math.sin(degVal/180*Math.PI))*(-1); 
            degsin=(Math.cos(degVal/180*Math.PI))*(1);
            }
            else if(degVal>=-180 && degVal<-90){
            degcos=(Math.sin(degVal/180*Math.PI))*(-1);
            degsin=(Math.cos(degVal/180*Math.PI))*(1);
            }
            else if(degVal>=-270 && degVal<-180){
            degcos=(Math.sin(degVal/180*Math.PI))*(-1);
            degsin=(Math.cos(degVal/180*Math.PI))*(1);
            }
            else if(degVal>=-360 && degVal<-270){
            degcos=(Math.sin(degVal/180*Math.PI))*(-1); //the sin and cos are purposely changed to make a return trip
            degsin=(Math.cos(degVal/180*Math.PI))*(1);
            }
            //to be cheked for 0.0000000001234 denominator 
            if(degcos!=0 && degsin!=0){
                
            dimx=(dimVal*(degcos));
            dimy=(dimVal*(degsin));
            }
            else if(degcos!=0 && degsin===0){
                dimx=(dimVal*(degcos));
                dimy=0;
            }
             else if(degcos===0 && degsin!=0){
                dimx=0;
                dimy=Math.floor((dimVal*(degsin)));
             
             }
            
             else if(degcos===0 && degsin===0){
                dimy=0;
                dimx=0;             
             }
      
            
            if(bufferArea[bufferArea.length-1].x1!=0 && bufferArea[bufferArea.length-1].x2!=0){                
                sctx.moveTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
                
    
        sctx.lineTo(bufferArea[bufferArea.length-1].x1+dimx,bufferArea[bufferArea.length-1].y1+dimy); 
         bufferArea[bufferArea.length-1].x1=bufferArea[bufferArea.length-1].x1+dimx;
        bufferArea[bufferArea.length-1].y1=bufferArea[bufferArea.length-1].y1+dimy;
        sctx.closePath();
        sctx.stroke();
        if(dimVal>=0){
        if(document.getElementById("vleftMenu").childNodes[0].value!="pause"){         
        importData();        
        saveDrawing[2][saveDrawing[4].length-1]=arrow;
        saveDrawing[6][saveDrawing[4].length-1]=bfdeg;
        saveDrawing[7][saveDrawing[4].length-1]=btdeg;
        saveDrawing[12][saveDrawing[4].length-1]=ccol;
                }
        }
        nodeDrawing[0][nodeDrawing[0].length]=bufferArea[0].x1;
        nodeDrawing[1][nodeDrawing[1].length]=bufferArea[0].y1;
        try{getMax();
           
           }
        catch(e){
           
           }
                /*}   */
                      
        
            }
        }        
        
    
        else if(boundary==="up" ||boundary==="Uarrow" ||boundary==="Ujump"){
            odimVal=dimVal;
            dimVal +=Math.ceil(10*(dimVal/100)*(Math.PI*180/360));
            try{
                
            if(bufferArea[bufferArea.length-1].y1-dimVal<20){
            dim=20+Math.floor((20)/2*Math.PI);            
            }
            else{
         dim=(bufferArea[bufferArea.length-1].y1-dimVal); 
            }
        if(bufferArea[bufferArea.length-1].x1!=0 && bufferArea[bufferArea.length-1].x2!=0){
        sctx.moveTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
            if(boundary!="Ujump"){             
        
            sctx.lineTo(bufferArea[bufferArea.length-1].x1,dim);
            
            
            
            }
        else{
        sctx.moveTo(bufferArea[bufferArea.length-1].x1,dim);
        
        
        }
            if(dimVal>=0){
                
                if(document.getElementById("vleftMenu").childNodes[0].value!="pause"){
                    /*
                    if(saveDrawing[0].length<1){
        saveDrawing[0][saveDrawing[0].length]=bufferArea[bufferArea.length-1].x1;        
        saveDrawing[1][saveDrawing[1].length]=bufferArea[bufferArea.length-1].y1;
        
                    }*/
                    importData();
         saveDrawing[3][saveDrawing[4].length-1]=odimVal;
        saveDrawing[2][saveDrawing[4].length-1]=arrow; 
        saveDrawing[12][saveDrawing[4].length-1]=ccol;
       
                }              
                
        bufferArea[bufferArea.length-1].y1=dim;
           if(boundary!="Ujump"){      
        nodeDrawing[0][nodeDrawing[0].length]=bufferArea[0].x1;
        nodeDrawing[1][nodeDrawing[1].length]=bufferArea[0].y1;
        try{getMax();}catch(e){}
           }
                else{
                    if(nodeDrawing[0][nodeDrawing[0].length-1]!=0){
                nodeDrawing[0][nodeDrawing[0].length]=0;
                nodeDrawing[1][nodeDrawing[1].length]=0;
                try{getMax();}catch(e){}
                    }
                
                }
            }
            if(boundary==="Uarrow"){
                sctx.moveTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1+arrow);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1+arrow,bufferArea[bufferArea.length-1].y1+arrow);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
                sctx.moveTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1+arrow);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1-arrow,bufferArea[bufferArea.length-1].y1+arrow);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
                sctx.fill();
                }
        sctx.closePath();
        sctx.stroke();
            
        
        }
              
               
            }
            catch(e){
            
            }
            
        }        
        else if(boundary==="down" ||boundary==="Darrow" || boundary==="Djump"){
            odimVal=dimVal;
            dimVal +=Math.ceil(10*(dimVal/100)*(Math.PI*180/360));
            try{
        if((dimVal+bufferArea[bufferArea.length-1].y1)>getrect.getAttribute("height")-20){
           dim=getrect.getAttribute("height")-20;
           }
            else{
             dim=dimVal+bufferArea[bufferArea.length-1].y1;            
            }
        if(bufferArea[bufferArea.length-1].x1!=0 && bufferArea[bufferArea.length-1].x2!=0){            
        sctx.moveTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
            if(boundary!="Djump"){
        sctx.lineTo(bufferArea[bufferArea.length-1].x1,dim);
        
       
            }
        else{
        sctx.moveTo(bufferArea[bufferArea.length-1].x1,dim);
        
        }
        
            if(dimVal>=0){
        if(document.getElementById("vleftMenu").childNodes[0].value!="pause"){
            /*
                    if(saveDrawing[0].length <1){
        saveDrawing[0][saveDrawing[0].length]=bufferArea[bufferArea.length-1].x1;
        saveDrawing[1][saveDrawing[1].length]=bufferArea[bufferArea.length-1].y1;
        
                    }*/
            importData();
         saveDrawing[3][saveDrawing[4].length-1]=odimVal;
        saveDrawing[2][saveDrawing[4].length-1]=arrow;
        saveDrawing[12][saveDrawing[4].length-1]=ccol;
        
                }
        bufferArea[bufferArea.length-1].y1=dim;
                if(boundary!="Djump"){
        nodeDrawing[0][nodeDrawing[0].length]=bufferArea[0].x1;
        nodeDrawing[1][nodeDrawing[1].length]=bufferArea[0].y1;
            }
                else{
               if(nodeDrawing[0][nodeDrawing[0].length-1]!=0){
                nodeDrawing[0][nodeDrawing[0].length]=0;
                nodeDrawing[1][nodeDrawing[1].length]=0;
                    }
                
                }
            }
            if(boundary==="Darrow"){
                sctx.moveTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1-arrow);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1+arrow,bufferArea[bufferArea.length-1].y1-arrow);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
                sctx.moveTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1-arrow);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1-arrow,bufferArea[bufferArea.length-1].y1-arrow);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
                sctx.fill();
                }
        sctx.closePath();
        sctx.stroke();
        }
            }
            catch(e){}
        }
        
        else if(boundary==="left" ||boundary==="Larrow" || boundary==="Ljump"){
            odimVal=dimVal;
            dimVal +=Math.ceil(10*(dimVal/100)*(Math.PI*180/360));
            try{
            if(bufferArea[bufferArea.length-1].x1-dimVal<20){
            dim=20;            
            }        
            else{
         dim=bufferArea[bufferArea.length-1].x1-dimVal; 
            }
        if(bufferArea[bufferArea.length-1].x1!=0 && bufferArea[bufferArea.length-1].x2!=0){            
        sctx.moveTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
            if(boundary!="Ljump"){
         sctx.lineTo(dim,bufferArea[bufferArea.length-1].y1);
        
            }
        else{
        sctx.moveTo(dim,bufferArea[bufferArea.length-1].y1);
        
        }
       
            if(dimVal>=0){
       if(document.getElementById("vleftMenu").childNodes[0].value!="pause"){
           /*
                    if(saveDrawing[0].length < 1){
        saveDrawing[0][saveDrawing[0].length]=bufferArea[bufferArea.length-1].x1;
        saveDrawing[1][saveDrawing[1].length]=bufferArea[bufferArea.length-1].y1;
                    }*/
           importData();
            saveDrawing[3][saveDrawing[4].length-1]=odimVal;
           saveDrawing[2][saveDrawing[4].length-1]=arrow;
           saveDrawing[12][saveDrawing[4].length-1]=ccol;
           
                }
        bufferArea[bufferArea.length-1].x1=dim;
                if(boundary!="Ljump"){
        nodeDrawing[0][nodeDrawing[0].length]=bufferArea[0].x1;
        nodeDrawing[1][nodeDrawing[1].length]=bufferArea[0].y1;
        try{getMax();}catch(e){}
                }
                else{
                if(nodeDrawing[0][nodeDrawing[0].length-1]!=0){
                nodeDrawing[0][nodeDrawing[0].length]=0;
                nodeDrawing[1][nodeDrawing[1].length]=0;
                try{getMax();}catch(e){}
                    }
                
                }
        }
            if(boundary==="Larrow"){
                sctx.moveTo(bufferArea[bufferArea.length-1].x1+arrow,bufferArea[bufferArea.length-1].y1);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1+arrow,bufferArea[bufferArea.length-1].y1+arrow);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
                sctx.moveTo(bufferArea[bufferArea.length-1].x1+arrow,bufferArea[bufferArea.length-1].y1);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1+arrow,bufferArea[bufferArea.length-1].y1-arrow);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
                sctx.fill();
                }
        sctx.closePath();
        sctx.stroke();
        
        }
            }
            catch(e){}
        }
        else if(boundary==="right" ||boundary==="Rarrow" || boundary==="Rjump"){
            odimVal=dimVal;
           dimVal +=Math.ceil(10*(dimVal/100)*(Math.PI*180/360));
            try{
            if(bufferArea[bufferArea.length-1].x1+dimVal>getrect.getAttribute("width")-20){
            dim=getrect.getAttribute("width")-20;            
            }
            else{
         dim=bufferArea[bufferArea.length-1].x1+dimVal; 
            }
        if(bufferArea[bufferArea.length-1].x1!=0 && bufferArea[bufferArea.length-1].x2!=0){
            sctx.moveTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
            if(boundary!="Rjump"){
                sctx.lineTo(dim,bufferArea[bufferArea.length-1].y1); 
                
            }
        else{
        
        sctx.moveTo(dim,bufferArea[bufferArea.length-1].y1); 
        }
            if(dimVal>=0){
        if(document.getElementById("vleftMenu").childNodes[0].value!="pause"){            
            importData();
         saveDrawing[3][saveDrawing[4].length-1]=odimVal;
        saveDrawing[2][saveDrawing[4].length-1]=arrow;
        saveDrawing[12][saveDrawing[4].length-1]=ccol;
                }
        bufferArea[bufferArea.length-1].x1=dim;
                if(boundary!="Rjump"){
        nodeDrawing[0][nodeDrawing[0].length]=bufferArea[0].x1;
        nodeDrawing[1][nodeDrawing[1].length]=bufferArea[0].y1;
        try{
            getMax();
        }
                    catch(e){
                    }
                }
                else{
                    if(nodeDrawing[0][nodeDrawing[0].length-1]!=0){
                nodeDrawing[0][nodeDrawing[0].length]=0;
                nodeDrawing[1][nodeDrawing[1].length]=0;
                try{
                    getMax();
                }
                        catch(e){
                        }
                    }
                
                }
               }
        if(boundary==="Rarrow"){
                sctx.moveTo(bufferArea[bufferArea.length-1].x1-arrow,bufferArea[bufferArea.length-1].y1);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1-arrow,bufferArea[bufferArea.length-1].y1+arrow);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
                sctx.moveTo(bufferArea[bufferArea.length-1].x1-arrow,bufferArea[bufferArea.length-1].y1);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1-arrow,bufferArea[bufferArea.length-1].y1-arrow);
                sctx.lineTo(bufferArea[bufferArea.length-1].x1,bufferArea[bufferArea.length-1].y1);
                sctx.fill();
                }
        sctx.closePath();
        sctx.stroke();
        
        }
            }
            catch(e){}
        }
        
 else{        
        sctx.lineWidth=1;
        rectArray=passRect();        
        sctx.moveTo(rectArray[0].x,rectArray[0].y);        
        x0=rectArray[0].x;
        y0=rectArray[0].y;
        if(rectArray.length>1){
        lrect=0;
        col=0;
        while(lrect<rectArray.length){            
              if(rectArray[lrect].y===0){
               sctx.fillStyle=(document.getElementById("mycolor"))?document.getElementById("mycolor").value:"green";
                sctx.strokeStyle=(document.getElementById("mycolor"))?document.getElementById("mycolor").value:"black";
            //sctx.fillText(x0,140,140);            
            }          
            if(rectArray[lrect].x===0){
                sctx.beginPath();
                sctx.fillStyle="green";
           //sctx.fillText("ambes tetemke",45,20);
            }
            
            sctx.beginPath();            
            sctx.fillStyle=importColor(0);            
            sctx.rect(x0,y0,20,20) //here is the cell
            sctx.closePath();
            sctx.fill();
            sctx.stroke();            
            x0=rectArray[lrect].x;
            y0=rectArray[lrect].y;            
            sctx.moveTo(x0,y0);
            sctx.fill();            
            sctx.stroke();               
            lrect +=1;
            col +=1;
            if(col===importColor("length")){
               col=0;
               }
       
        }
            
    sctx.closePath();
}
}
 if(!document.getElementById("locateme")){
cpos=document.createElement("div");
cpos.style.backgroundColor="white";
cpos.id="locateme";
cpos.style.width="10px";
cpos.style.height="10px";
cpos.style.position="absolute";
cpos.style.left=bufferArea[0].x1+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
cpos.style.top=bufferArea[0].y1+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
cpos.style.borderRadius="10px";
cpos.style.zIndex=10;
document.body.appendChild(cpos);
}
else{
document.getElementById("locateme").style.left=bufferArea[0].x1+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
document.getElementById("locateme").style.top=bufferArea[0].y1+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";

} 
}
}
}
}
   //######################################################################################################################################    5
     
     
     this.drawPie=function(id,bro){
         var calradius,inp,conv=0,max,min,nspl,loo,splel,elval,el,getTitle,conver,start=0,cont=0,pieArray,lpie,pctx,getpie,pie,s3;    
        inp=[1,2,3,4,5,67];
         splel=[];
        //input from textarea *********************************************************************************************
        el=document.getElementById("mappingfile");
        if(el){
        elval=el.value;
            if(elval!=undefined){
        splel=elval.split(",");
            
        for(loo=0; loo<splel.length; loo +=1){            
        splel[loo]=Number(splel[loo]);
           
        }
        }
        }
        //**********************************************************************************************************************
         if(document.getElementById("canvas")){ 
             id=document.getElementById("canvas").value;  
        if(id){
         getpie=document.getElementById(id);   
    if(getpie.getContext){        
        pctx=getpie.getContext("2d");
        if(document.getElementById("shadowColor").value!="nocolor"){
        pctx.shadowColor=(document.getElementById("shadowColor"))?document.getElementById("shadowColor").value:"lightgray";
        pctx.shadowBlur=5;
        pctx.shadowOffsetX=5;
        pctx.shadowOffsetY=5;
        }
        
        pctx.beginPath();
        pctx.font=CONFIGURE.FONTWEIGHT+" "+CONFIGURE.FONTSIZE+"px"+" "+CONFIGURE.FONTFAMILY;
        pctx.textAlign="left";
        pctx.textBasline="middle"
        pctx.fillStyle=(document.getElementById("shadowColor"))?document.getElementById("shadowColor").value:"lightgray";
        pctx.strokeStyle=(document.getElementById("shadowColor"))?document.getElementById("shadowColor").value:"lightgray";
         
        if(splel.length>0){
        pieArray=passPie(splel);
        }
        else{
        pieArray=passPie(inp);
        
        }
        
        //*****************************************************************************************To be continue from here
        s3=pieArray[0].s;       
        if(splel.length===0){             
            start=0;
           cont=0;
            lpie=0;
            while(lpie<=360){
                pctx.fillStyle=importColor(cont);
                 pctx.beginPath();
                conver=lpie*(2*Math.PI/360);                
            pctx.arc(getpie.width/2,getpie.height/2,getpie.height-600,start,conver); //double pie
                pctx.arc(getpie.width/2,getpie.height/2,300,start,conver);//double pie
            pctx.arc(getpie.width/2,getpie.height/2,200,start,conver);//double pie
            pctx.lineTo(getpie.width/2,getpie.height/2);
                pctx.fill(); 
             start=conver; //pass the old value to be used as start for the next pie
                lpie +=1;
                if(cont<importColor("length")){
                cont +=1;
                }
                else{
                cont=0;
                
                }
               
            }
        }
        //***********************************************************************************************************
        else{
            cont=0;
            lpie=0;
            start=0;
            if(bro===1){
                start=0.1;
            }
        while(lpie<pieArray.length){            
                pctx.fillStyle=importColor(cont);
                pctx.strokeStyle=importColor(cont);
                 pctx.beginPath();            
                conver=pieArray[lpie].s;
            if(Math.abs(bufferArea[0].x1-bufferArea[0].x2)>20 || Math.abs(bufferArea[0].y1-bufferArea[0].y2)>20){                
                calradius=Math.floor(Math.sqrt(Math.abs((bufferArea[0].x2-bufferArea[0].x1)*(bufferArea[0].x2-bufferArea[0].x1))+Math.abs((bufferArea[0].y2-bufferArea[0].y1)*(bufferArea[0].y2-bufferArea[0].y1))));
                if(bufferArea[0].x2>bufferArea[0].x1){
            if(Math.abs(bufferArea[0].x2-bufferArea[0].x1)<5){
            pctx.arc(Math.abs(bufferArea[0].x2),Math.abs(bufferArea[0].y2-calradius),calradius,start,conver);
                
            pctx.lineTo(bufferArea[0].x2,Math.abs(bufferArea[0].y2-calradius));
                
            }
            else if(Math.abs(bufferArea[0].y2-bufferArea[0].y1)<5){
            pctx.arc(Math.abs(bufferArea[0].x2-calradius),Math.abs(bufferArea[0].y2),calradius,start,conver);
               
            pctx.lineTo(Math.abs(bufferArea[0].x2-calradius),bufferArea[0].y2);
               
            }
            else{
            pctx.arc(Math.abs(bufferArea[0].x2),Math.abs(bufferArea[0].y2),calradius,start,conver);
               
            pctx.lineTo(bufferArea[0].x2,bufferArea[0].y2);
                
            }
            }
            else if(bufferArea[0].x2<bufferArea[0].x1){
            
            if(Math.abs(bufferArea[0].x2-bufferArea[0].x1)<5){
            pctx.arc(Math.abs(bufferArea[0].x1),Math.abs(bufferArea[0].y1-calradius),calradius,start,conver);
                
            pctx.lineTo(bufferArea[0].x1,Math.abs(bufferArea[0].y1-calradius));
               
            }
            else if(Math.abs(bufferArea[0].y2-bufferArea[0].y1)<5){
            pctx.arc(Math.abs(bufferArea[0].x1-calradius),Math.abs(bufferArea[0].y1),calradius,start,conver);
               
            pctx.lineTo(Math.abs(bufferArea[0].x1-calradius),bufferArea[0].y1);
                } 
            
            else{
            pctx.arc(Math.abs(bufferArea[0].x1),Math.abs(bufferArea[0].y1),calradius,start,conver);
               
            pctx.lineTo(bufferArea[0].x1,bufferArea[0].y1);          
            
            }
            }
            else if(bufferArea[0].x2===bufferArea[0].x1){
            if(bufferArea[0].y2>bufferArea[0].y1){
            pctx.arc(Math.abs(bufferArea[0].x2),Math.abs(bufferArea[0].y2-calradius),calradius,start,conver);
                
            pctx.lineTo(bufferArea[0].x2,Math.abs(bufferArea[0].y2-calradius));
               
            }
            else if(bufferArea[0].y2<bufferArea[0].y1){
            pctx.arc(Math.abs(bufferArea[0].x1-calradius),Math.abs(bufferArea[0].y1),calradius,start,conver);
                
            pctx.lineTo(Math.abs(bufferArea[0].x1-calradius),bufferArea[0].y1);
                
            }
            else{
            pctx.arc(Math.abs(bufferArea[0].x2),Math.abs(bufferArea[0].y2),calradius,start,conver);
                
            pctx.lineTo(bufferArea[0].x2,bufferArea[0].y2);
                
            }           
            
            }
                        
            }
            
            
            
            
            else{
            pctx.arc(getpie.width/2,getpie.height/2,200,start,conver);
                if(lpie!=pieArray.length-1){
            pctx.lineTo(getpie.width/2,getpie.height/2);//controls the pie
                }
            }           
            
            pctx.fill();
            pctx.stroke();
            if(bro===1){
             start=conver+0.1; 
            }
            else{
            start=conver
            }
                lpie +=1;            
                if(cont<importColor("length")){
                cont +=1;
                }
                else{
                cont=0;
                
                }
               
            }
            
        }
        
        pctx.closePath();
        pctx.fill();
        pctx.stroke();
        
        }
    }
    }
    }
     
    //**********************************************************************************************                                6
   
    
    //############################################################################## 
     
    
this.modifyText=function(){         
     if(document.getElementById("getData")){  
    if(!document.getElementById("mappingfile")){    
    
        createTextArea("mappingfile");
                
    }       
    
   if(!document.getElementById("drawingfile")){
       
   createTextArea("drawingfile");
       
   
   }
}
    }
    //***************************************************************************** 

                                       
  
    
    this.modifyCanvas=function(){
    var loo,can, sel,m;
        if(controller.length===1){
        can=document.getElementById("canvas");
        sel=document.getElementById("canvasContainer")
        if(can){
        for(loo=0;loo<sel.childNodes.length; loo +=1){            
            if(can.value===sel.childNodes[loo].id){
                sel.insertBefore(sel.childNodes[loo],sel.firstChild);
                //place holder for a method to configure the hMenu
                 
            }
            
            }  
        
        }
            
        }
   
    }
  //*********************************************************************************                                               10
    this.createCanvas=function(id){
var sz,lef,bor,mar,verify,container,gcan,w,h,gw,gh,dg,ret,terminate=0,loo=0;
        lef=CONFIGURE.BUTWIDTH;
        bor=CONFIGURE.BORDER;
        mar=CONFIGURE.MARGIN;
        sz=document.getElementById("winSize");
        if(sz){
        if(sz.value==500){
        CONFIGURE.CANVAS=1;
        }
        else if(sz.value==1000){        
        CONFIGURE.CANVAS=2;
        }
        else{
        CONFIGURE.CANVAS=3;        
        }
        
        }
        w="500";
        h="500";
        dg=passDimension(0,0);
        if(0<CONFIGURE.CANVAS && CONFIGURE.CANVAS<dg.length){
        gw=dg[CONFIGURE.CANVAS].va;
        gh=dg[CONFIGURE.CANVAS].va;
        }
        else{
        gw=dg[1].va;
        gh=dg[1].va;
        
        }
        if(gw!=0 && gh!=0){
        w=gw;
        h=gh;        
        }
    container=document.getElementById("canvasContainer");
         
    verify=document.getElementById(id);
     if(!verify){
    gcan=document.createElement("canvas");
    gcan.setAttribute("width",w);
    gcan.setAttribute("height",h);
    gcan.id=id;
    //gcan.style.overflow="scroll";
    gcan.style.backgroundRepeat="no-repeat";
         if(0<CONFIGURE.BORDER && CONFIGURE.BORDER<10){
gcan.style.border=CONFIGURE.BORDER+"px"+" ridge white";
         }
else{
gcan.style.border=1+"px"+" ridge white";

}
gcan.style.position="relative";

gcan.style.display="inline-block";    

if(!container){
   container= document.createElement("div");
    container.id="canvasContainer";
    if(100<=CONFIGURE.CONWIDTH && CONFIGURE.CONWIDTH<window.innerWidth){
    container.setAttribute("width",(CONFIGURE.CONWIDTH+"px"));
    }
    else{
    container.setAttribute("width",(CONFIGURE.CONWIDTH+"px"));
    
    }
    if(100<CONFIGURE.CONHEIGHT && CONFIGURE.CONHEIGHT<window.innerHeight){
    container.setAttribute("height",(2000+"px"));
    }
    else{
    container.setAttribute("height",(2000+"px"));
    }
    //container.style.border=CONFIGURE.BORDER+"px"+" ridge red";
    container.style.position="relative";
    container.style.left=CONFIGURE.BUTWIDTH+"px";
    container.style.top=CONFIGURE.SELHEIGHT+"px";
    //container.style.margin=CONFIGURE.MARGIN+"px";
    container.appendChild(gcan);
    document.body.appendChild(container);   
   }
else{

container.appendChild(gcan);

}

    }
    }




//*********************************************************************************                                             11
this.singleClick=function(event){
var getValue,canvasVal,pas,tag,col,va,btn,scro; 

   tag=document.getElementById("mycolor");
 col=document.getElementById("mytagel");

 if(tag && col) {     
 tag.value=col.value; 
document.body.removeChild(col);
 }
   if(lineCounter <=5) {
  lineCounter +=5;
   } 

controller=[1]; 
 
};

//#############################################################################################                             12

this.dblClick=function(){ 
var blocky,len,idloo,idval,image,bdy,country; 
 //check out this with the feed in and out  the image combine with the clearDrawing method 
//window.scrollBy(100,100);
    if(collectPoints.length>1){
generateData(controller.length);
    }
controller=[];     
 lineCounter -=5;
//clipImage();
//window.location="http://google.com";
 //window.location.hostname="192.168.1.8";
 //window.location.pathname="intpub";
    if(document.getElementById("bMenu")){            
        len=passIdFunc("length");
        for(idloo=0; idloo<len; idloo +=1){
            country=passIdFunc(idloo);
            idval=country.Id;//check every entry with the given Id (Id) is property of the object inside passIdFunc          
        image=document.getElementById(idval);
            if(image.value !==""){
            bdy=image.value;
            //image.value="";
            
            }
        }
//createImage("country/ttest.png");
    }
if(collectPoints[0].length>1){
    if(collectPoints[0][collectPoints[0].length-1]!=0){
   collectPoints[0][collectPoints[0].length]=0;
    collectPoints[1][collectPoints[1].length]=0;
    collectPoints[2][collectPoints[2].length]=collectPoints[0].length;
    }
    
    }  
    try{
        if(document.getElementById("vleftMenu").childNodes[0].value!="point"){//easy pass for creating points
    document.getElementById("vleftMenu").childNodes[0].value="target";
        }
        }
        catch(e){};
//createImage();
    //***********************************************************************
 blocky=document.getElementById("vrightMenu"); 
 if(blocky.childNodes[0].value==="boundary"){
  if(borderLine[1].x1!=0){
  drawGrid("id","boundary")
  if(borderLine.length<3){
  borderLine[2]={x3:borderLine[1].x1,y3:borderLine[1].y1};

  }
      if(Math.abs(borderLine[1].x2-borderLine[2].x3)<5 && Math.abs(borderLine[1].y2-borderLine[2].y3)<5){
    borderLine[1].x2=borderLine[2].x3;
    borderLine[1].y2=borderLine[2].y3;
    borderLine[1].x1=borderLine[1].x2;
    borderLine[1].y1=borderLine[1].y2
    drawGrid("id","boundary")    
     blocky.childNodes[0].value="target";
      }
      else{
  borderLine[1].x1=borderLine[1].x2;
borderLine[1].y1=borderLine[1].y2; 
      }
  }
  }    
} 




//*****************************************************************************************
this.colorChange=function(){

var oc,el;    
    el=document.getElementById("mycolor");
if(el){
oc=el.value;
}
    return oc;
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$                                       13

this.getCanvas = function(num){
    //look for the parameter num in the events to be modified
var cval,cre,acan,gcan,lwidth,bg,idval,len,idloo,bdy,country,image,sel,but,typ, getcan,ct,xpath,ypath,cxpath,cypath;
if(controller.length ===1 || num===0){   
but=document.getElementById("selectleft");
    if(but){
        switch(but.value){
    case "point":
            typ=0;//this is used in the canvas drawing to verify the da.length;
            break;
    case "line":
            typ=2;
            break;
    case "polygon":
            typ=1;
            break;
    case "target":
            typ=3;
    
        }

    }
    
    //get the color from an html select tag's value
    
 sel = document.getElementById("mycolor");
    if(sel){
        var fillc=sel.value;
        
    }    

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    
    if(!document.getElementById("canvas")){
        cval=passCanvas();
    for(cre=0; cre<passCanvas("length"); cre +=1){        
    createCanvas(cval[cre].ids);
        if(cre===CONFIGURE.NOCANVAS){ //you will stop creating canvas when the limit reach's
            break;//cre=passCanvas("length");
        }
    
    }  
        //check this if some thing brokes
        /*
    drawPie();
    
    drawLine();
    
    
    drawGrid();
    
   
    
    drawHistogram();
        
    drawPoint();
    */
    } 
    /*
    else{
        
    cval=document.getElementById("canvas").value;
        if(!document.getElementById(cval)){
    createCanvas(cval);
        }
   
    }
   
    */
   modifyCanvas();
    
   //***************************************************************************
    
    
    
    modifyText();
    
     //drawHistogram();
    
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
     
   
//select the background image of the selected canvas
    
    acan=document.getElementById("canvas");
    if(acan){        
    getcan=document.getElementById(acan.value);
    }
    else{
    
    getcan=document.getElementById("mcanvas");
    }
    
    
//###########################################################################################################
    
    if(document.getElementById("bMenu")){            
        len=passIdFunc("length");
        for(idloo=0; idloo<len; idloo +=1){
            country=passIdFunc(idloo);
            idval=country.Id;//check every entry with the given Id (Id) is property of the object inside passIdFunc          
        image=document.getElementById(idval);
            if(image.value !==""){
            bdy=image.value;
            //image.value="";
            
            }
            
           
        getcan.style.backgroundImage="url("+"'"+bdy+"'"+")";            
         
          if(document.getElementById("bgcolor")){
              bg=document.getElementById("bgcolor");
              getcan.style.backgroundColor=bg.value;
              document.body.style.backgroundColor=CONFIGURE.BACKGROUND;
                }
        else{
            getcan.style.backgroundColor="white";
        } 
        }
       }
//#####################################################################################################################

if(getcan.getContext){
ct=getcan.getContext("2d");
    /*
    try{

if(monitorShadow()!="nocolor"){
        ct.shadowColor=document.getElementById("shadowColor").value;
        ct.shadowBlur=5;
        ct.shadowOffsetX=5;
        ct.shadowOffsetY=5;
            }
else{
ct.shadowColor="black";
        ct.shadowBlur=0;
        ct.shadowOffsetX=0;
        ct.shadowOffsetY=0;

}
    }
    catch(e){}
    */
ct.lineWidth=1;
if(document.getElementById("lineSize")){
   lwidth=document.getElementById("lineSize");
    ct.lineWidth=lwidth.value;       
   }

ct.fillStyle=fillc;
ct.strokeStyle=fillc;//"green";
//this is not about decission making but to verify the data to be updated and draws the initial drawing has to be always 
if(da.length ===typ){ //if it is 1, it resets the begin status to a new point, if it is 0, it keeps continue doing what it is doing
ct.beginPath();
ct.lineJoin="round";
ct.scale(1,1);
//the courser from any where has to come to this point, this is the starting point of your drawing
    
   
ct.moveTo(Math.abs(da[0].xo - CONFIGURE.BUTWIDTH),Math.abs(da[0].yo -CONFIGURE.SELHEIGHT));
//ct.moveTo(Math.abs(da[0].xo - 100),Math.abs(da[0].yo -30)); 
  
}

if(da.length >1 && (typ ===1 || typ===2)){   

cxpath=Math.abs(da[0].xo -CONFIGURE.BUTWIDTH);
cypath=Math.abs(da[0].yo - CONFIGURE.SELHEIGHT);
xpath=Math.abs(da[da.length -1].xo -CONFIGURE.BUTWIDTH);
ypath=Math.abs(da[da.length -1].yo -CONFIGURE.SELHEIGHT);

ct.lineTo(xpath,ypath); //this is what makes the line to be drawn

ct.lineJoin="round";


//ct.arc(cxpath, cypath,20,0,2*Math.PI,true);    
//ct.rect(cxpath,cypath,50,50); 
    //ct.fill();
}
    
    if(typ!=0){
if(lineCounter %2===0){
    try{
    if(document.getElementById("canvas").value=="mcanvas" || document.getElementById("canvas").value=="pcanvas"){
   
    ct.fill();
    }
    }
    catch(e){
    
    ct.fill();
    }
    
 if(lineCounter===10){
lineCounter =5;
 }

}
}
//this makes the boundary of each region
    if(typ===0 && (da[1].xo%5===0 ||da[1].yo%5===0)){
     ct.beginPath();   
ct.arc(Math.abs(da[1].xo - CONFIGURE.BUTWIDTH),Math.abs(da[1].yo -CONFIGURE.SELHEIGHT),1,0,2*Math.PI,true);
       ct.fill();
        ct.stroke();
    }
ct.stroke();
    
}  
   
}
};

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%                    14
    
    
this.digitizing = function(event){
var copyx,copyy,getObj,len,con,can,tag,state,swit;
    
can=document.getElementById("canvas");

con=document.getElementById("canvasContainer");
//this function has an event listener for mousemove, so it has first checked if the controller boject has the required data
if(controller.length ===1 ){       

if(da.length >=0){ 
    
this.nNode={xo:event.pageX,yo:event.pageY}; 
  if(document.getElementById("tstartP")){
  
  document.getElementById("tstartP").value=Math.abs(this.nNode.xo - (CONFIGURE.BUTWIDTH+2*CONFIGURE.BORDER));
      
  }
    if(document.getElementById("tendP")){
document.getElementById("tendP").value=Math.abs(this.nNode.yo - (CONFIGURE.SELHEIGHT+2*CONFIGURE.BORDER));
  } 
 if(document.getElementById("vleftMenu").childNodes[0].value!="target" && (document.getElementById("getData").value==="mapping" ||document.getElementById("getData").value==="drawing")){//this is listening to the port that is currently active,in this case the textarea of the getData element in the top select menu to add database check this code later  
collectPoints[0][collectPoints[0].length]=Math.abs(this.nNode.xo - (CONFIGURE.BUTWIDTH+2*CONFIGURE.BORDER));
collectPoints[1][collectPoints[1].length]=Math.abs(this.nNode.yo - (CONFIGURE.SELHEIGHT+2*CONFIGURE.BORDER));
     
 }
 
}
    
if(da.length > 1 && controller !=0){
swit=da[0];
   swit.xo=da[da.length -1].xo; //pass the value of the old index 1 to index 0
   swit.yo=da[da.length -1].yo       
da[0]=swit;   //put back the new value of index 0 into the array   
da[da.length -1]=this.nNode; //add new value to index 1

}
else if(da.length ===1){
da[1]=this.nNode;
}
else{
da[0]=this.nNode;
}
if(da.length >0){   
getCanvas(event,0);

}


 }



else{
    da=[];
}

};
    
    
//**********************************************************************************************************************************        15
   
    
    
//this capability of the canavs will help to plugin in different shapes of an image into a specified area or location of the canavas

 this.clipImage=function(){
    var ceg,ce,el,im,ct;

    el=document.getElementById("mcanvas");
    ct=el.getContext("2d");
    im=ct.getImageData(0,0,400,400);
     //ct.scale(0.25,0.25);
    ct.putImageData(im,0,1000);
    ce=document.createElement("img");
    ce.style.width="400px";
    ce.style.height="400px";
    ce.id="copyimg";        
    document.body.appendChild(ce);
    ceg=document.getElementById("copyimg");
    ceg.putImageData(im,0,0);

};


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^          16
    
this.createButton = function(location,arr){       

var bor,txt,x=0,p,btn,con;
    if(location!="topright"){
        if(!document.getElementById("v"+location+"Menu")){
    bor=CONFIGURE.BORDER;
    con=document.createElement("div");
    con.id="v"+location+"Menu";
    con.style.backgroundColor=CONFIGURE.BACKGROUND;
    con.style.position="absolute";
    if(location==="left"){
    con.style.left="0px";
    }
    else if(location==="right"){
    con.style.right="0px";
    con.style.position="fixed";
    
    }
    //con.style.border=CONFIGURE.BORDER+"px"+" ridge white";
    con.style.top="0px";
    con.style.display="inline-block";
    con.style.width=CONFIGURE.BUTWIDTH+"px";
    con.style.height=CONFIGURE.BUTHEIGHT+"px";//"1600px";
    txt=document.createElement("input");
    txt.id="select"+location;//this will be the first button in both cases, so don't confuse with the one in the array that says target
    txt.type="button";        
    txt.value=arr[0].va;
    txt.style.color="black";
    txt.style.textAlign="right";
    txt.style.backgroundColor="white";
    txt.style.position="absolute";
    if(location==="left"){
    txt.style.left="0px";
    }
    else if(location==="right"){
        txt.style.right="0px";
    }
    txt.style.top="0px";
    txt.style.width=CONFIGURE.BUTWIDTH+"px";
    txt.style.height="20px";
    txt.style.borderRadius="0px";
    con.appendChild(txt);
    x=20;
    for(p=0; p<arr.length; p +=1){
        if(p !=0 && ((arr[p].ids!="Dinsert" && arr[p].ids!="fdeginsert") && ((arr[p].ids!="tdeginsert" && arr[p].ids!="Dside")&&( arr[p].ids!="giveSine" && arr[p].ids!="giveCose")&&(arr[p].ids!="givesqrt")))){
        x +=20;
        }            
    btn=document.createElement(arr[p].el);
    btn.id=arr[p].ids;
    btn.style.color="white";
    btn.style.backgroundColor=CONFIGURE.BACKGROUND;
    btn.style.fontSize="15px";
    btn.style.textAlign="left";
    btn.style.fontFamily="'Courier New',Courier, monospace";
    btn.style.fontWeight="bold";   
    btn.type=arr[p].ty;
    btn.name=arr[p].na;
    btn.value=arr[p].va;
    btn.style.position="absolute";
    if(location==="left"){
    btn.style.left="0px";
    }
    else if(location==="right"){
        btn.style.right="0px";
    }    
    btn.style.top=x+bor+"px";
    btn.style.width=CONFIGURE.BUTWIDTH+"px";
    btn.style.height="20px";
    btn.style.borderRadius="0px";
        con.appendChild(btn);

    }
    }
    }
    else if(location==="topright"){
        bor=CONFIGURE.BORDER;
        con=document.createElement("div");
        con.id=location+"Menu";
        con.style.backgroundColor=CONFIGURE.BACKGROUND;
        con.style.position="absolute";        
        con.style.left=CONFIGURE.BUTWIDTH+10*CONFIGURE.BORDER+CONFIGURE.SELWIDTH+"px";
        con.style.top="0px";        
        con.style.display="inline-block";
        con.style.width=CONFIGURE.SELWIDTH+"px";
        con.style.height=CONFIGURE.SELHEIGHT+"px";//"1600px";
        txt=document.createElement("input");
        txt.id="select"+location;//this will be the first button in both cases, so don't confuse with the one in the array that says
        txt.type="button";        
        txt.value=arr[0].va;
        txt.style.color="black";
        txt.style.textAlign="right";
        txt.style.backgroundColor="white";
        txt.style.position="absolute";        
        txt.style.left="0px";
        txt.style.top="0px";
        txt.style.width=CONFIGURE.BUTWIDTH/2+"px";
        txt.style.height="30px";
        txt.style.borderRadius="0px";
        con.appendChild(txt);
        x=0;
        for(p=0; p<arr.length; p +=1){
            if(p!=0){
            x +=50;
            }            
        btn=document.createElement(arr[p].el);
        btn.id=arr[p].ids;
        btn.style.color="white";
        btn.style.backgroundColor=CONFIGURE.BACKGROUND;
        btn.style.fontSize="13px";
        btn.style.textAlign="left";
        btn.style.fontFamily="'Courier New',Courier, monospace";
        btn.style.fontWeight="bold";   
        btn.type=arr[p].ty;
        btn.name=arr[p].na;
        btn.value=arr[p].va;
        btn.style.position="absolute";            
        if((p%2!=0 && p!=0)||p==1){            
        btn.style.left=x+"px";
        btn.style.top="0px";
        if(p===1){
            //x-=100;
            }
        }
        else{
        btn.style.top="30px"; 
            if(p!=0){            
            x-=50;
            btn.style.left=x+"px";  
            }        
        else{
            btn.style.left=x+"px";
        }
        }
        btn.style.width=CONFIGURE.BUTWIDTH+"px";
        btn.style.height="30px";
        btn.style.borderRadius="0px";
            con.appendChild(btn);
    }
    }
    document.body.appendChild(con);
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                       17
    

this.createSelect = function(id,arr,n){       

var p,btn,sel,txn,con;    
    if(!document.getElementById(n)){
    con=document.createElement("div");
    con.id=n;
    con.style.backgroundColor=CONFIGURE.BACKGROUND;
    con.style.position="absolute";        
    con.style.width=CONFIGURE.SELWIDTH+"px";
    con.style.height=CONFIGURE.SELHEIGHT/2+(2*CONFIGURE.BORDER)+"px";
    con.style.left=CONFIGURE.BUTWIDTH+8*CONFIGURE.BORDER+"px";
    if(con.id==="tMenu"){
    con.style.top="0px";
    }
    else {
    
     con.style.top=(CONFIGURE.SELHEIGHT/2)+(3*CONFIGURE.BORDER)+"px";
    
    }
    con.style.display="inline-block";
    con.style.border=CONFIGURE.BORDER+"px"+" ridge white";
    }
else{
    con=document.getElementById(n);
    }
    //con.style.width="100px"; 
    sel=document.createElement("select");
    sel.id=id;
    sel.style.fontSize="15px";
    sel.style.textAlign="left";
    sel.style.fontFamily="'Courier New',Courier, monospace";
    sel.style.fontWeight="bold";
    sel.style.color="white";
    sel.style.backgroundColor=CONFIGURE.BACKGROUND;
    sel.style.position="relative";
    sel.style.left="7px";
    sel.style.top="0px";
    sel.style.width="100px";
    sel.style.height="20px";
    sel.style.border=CONFIGURE.BORDER+"px"+" ridge white";
    sel.style.borderRadius="0px";
    sel.style.display="inline-block";
    for(p=0; p<arr.length; p +=1){                   
    btn=document.createElement(arr[p].el);    
    btn.style.backgroundColor="black"; 
    btn.style.fontSize="15px";
    btn.style.textAlign="left";
    btn.style.fontFamily="'Courier New',Courier, monospace";
    btn.style.fontWeight="bold";
    txn=document.createTextNode(arr[p].na);
    btn.value=arr[p].va;    
    btn.style.position="absolute";
    btn.style.left="0px";    
    btn.style.top="20px";    
    btn.style.width="100px";
    btn.style.height="30px";
        //attach text as a name 
    btn.appendChild(txn);
    sel.appendChild(btn);
    }
    con.appendChild(sel);
    if(!document.getElementById(n)){
    document.body.appendChild(con);
    }
}; 

    
 
    
    
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&                              19
 this.blockValue=function(event){   
    
 if(document.getElementById("map")===event.target){
document.getElementById("satImage").value="";
document.getElementById("bgimage").value="";
document.getElementById("forground").value="";
document.getElementById("display").value="";
 }
else if(document.getElementById("satImage")===event.target){
document.getElementById("map").value="";
document.getElementById("bgimage").value="";
document.getElementById("forground").value="";
document.getElementById("display").value="";
}
else if(document.getElementById("bgimage")===event.target){
document.getElementById("map").value="";
document.getElementById("satImage").value="";
document.getElementById("forground").value="";
document.getElementById("display").value="";
} 
else if(document.getElementById("forground")=event.target){
document.getElementById("map").value="";
document.getElementById("satImage").value="";
document.getElementById("bgimage").value="";
document.getElementById("display").value="";
} 
else if(document.getElementById("display")=event.target){
document.getElementById("map").value="";
document.getElementById("satImage").value="";
document.getElementById("bgimage").value="";
document.getElementById("forground").value="";

} 
 };
    //**************************************************************************************************
this.toSine = function(){
var lef,loo;
    lef=document.getElementById("vleftMenu");
    if(lef){
    for(loo=0; loo<lef.childNodes.length; loo+=1){
    if(lef.childNodes[loo].id==="giveSine"){
        if(!((Number(lef.value)>=-1 && Number(lef.value)<=0) || (Number(lef.value)<=1 && Numberl(ef.value)>=0))){
       try{
    lef.childNodes[loo].value=/\d\.?\d?\d?/.exec(Math.sin(Number(lef.childNodes[loo].value)/180*Math.PI));      
       }
        catch(e){}
    break;
    }
    }
    }  
    }
};
this.toCose = function(){
var el;
el=document.getElementById("giveCose");
if(el){
    try{
    if(!((Number(el.value)>=-1 && Number(el.value)<=0) || (Number(el.value)<=1 && Number(el.value)>=0))){
        if(el.value!=90){
    el.value=/\d\.?\d?\d?/.exec(Math.cos(Number(el.value)/180*Math.PI));
        }
        else{
        el.value=0;
        
        }
    }   
    }
    catch(e){
    el.value=00;
    }
}
};
 //**********************************************************************************************************
    this.tosqrt = function(){
var el;
el=document.getElementById("givesqrt");
if(el){
    try{
    if(Number(el.value)>=0){        
    el.value=/\d*\.?\d{1,4}/.exec(Math.sqrt(Number(el.value)));
        }
        else{
        el.value=0;
        
        }
      
    }
    catch(e){
    el.value=00;
    }
}
};
    //******************************************************************************************************
this.lPassValue=function(event){
var temDins,Dins,DinsVal,sen,num,loo,canvasVal,setValue,getValue,radio,ele,arcVal,fdegVal,tdegVal;   
getValue=event.target;    
setValue=document.getElementById("selectleft");
canvasVal=document.getElementById("canvas");//this will give the string that will be used in the canvas as an id later
sen=document.getElementById("mappingfile");
Dins=document.getElementById("Dinsert");
    if(Dins){
    DinsVal=Number(document.getElementById("Dinsert").value);
    }
setValue.value=getValue.value;
    
   if((bufferArea[0].x1!=0 &&  bufferArea[0].y1!=0)&& (bufferArea[0].x2!=0 &&  bufferArea[0].y2!=0)) {     
       
   
    if(getValue.value==="done"){
    
    generateData(0);
    
    }
    else if(getValue.value==="sqrt"){
        tosqrt();    
    }
    else if(getValue.value==="sine"){
        toSine();    
    }
    else if(getValue.value==="cos"){
        toCose();    
    }
    else if(getValue.value==="classify"){
        drawLine(canvasVal.value,"polygon",0);//this makes the first class to be created and make a way to the second class
     for(loo=0;loo<collectPoints[2].length; loo +=1){
         num=collectPoints[2][loo];
         document.getElementById("mycolor").value=importColor(loo);
    drawLine(canvasVal.value,"polygon",num);
     }
    
    
    }
    else if(getValue.id==="exportGraph"){
    if(!document.getElementById("drawingfile")){
    createTextArea("drawingfile");
    }
    if(!document.getElementById("tempGraph")){
    createTextArea("tempGraph");
    if(document.getElementById("tempGraph")){
    try{
    document.getElementById("tempGraph").value=document.getElementById("drawingfile").value;
    }
        catch(e){
        document.getElementById("tempGraph").value=""
        
        
        }
    }
    
    }
    else{
     document.getElementById("tempGraph").value=document.getElementById("drawingfile").value;
    
    }
    }
       
       
else if(getValue.id==="exportData"){
    if(!document.getElementById("mappingfile")){
    createTextArea("mappingfile");
    }
    if(!document.getElementById("tempData")){
    createTextArea("tempData");
    if(document.getElementById("tempData")){
    try{
    document.getElementById("tempData").value=document.getElementById("mappingfile").value;
    }
        catch(e){
        document.getElementById("tempData").value=""
        
        
        }
    }
    
    }
    else{
     document.getElementById("tempData").value=document.getElementById("mappingfile").value;
    
    }
    }
    else if(getValue.value==="line" || (getValue.value==="polygon" || getValue.value==="point")){
    
    //sen.value=[];//watch out about this...locks the input chanel to privante for collission of data 
    
    }
    
    else if(getValue.value==="addClass"){
    if(collectPoints[0][collectPoints[0].length-1]!=0){
    collectPoints[0][collectPoints[0].length]=0;
    collectPoints[1][collectPoints[1].length]=0;
    collectPoints[2][collectPoints[2].length]=collectPoints[0].length;//this addes a class to existing classes
    }
    }   
    
    else if(getValue.value==="pause"){       
    bufferArea[bufferArea.length-1].x3=bufferArea[bufferArea.length-1].x1;
    bufferArea[bufferArea.length-1].y3=bufferArea[bufferArea.length-1].y1; 
        
    
    }
    else if(getValue.value==="resume"){
        if(bufferArea[bufferArea.length-1].x3!=0){
    bufferArea[bufferArea.length-1].x1=bufferArea[bufferArea.length-1].x3;
    bufferArea[bufferArea.length-1].x2=bufferArea[bufferArea.length-1].x3;
    bufferArea[bufferArea.length-1].y1=bufferArea[bufferArea.length-1].y3; 
    bufferArea[bufferArea.length-1].y2=bufferArea[bufferArea.length-1].x3;
        }
    
    }
     else if(getValue.value==="up"){
         saveDrawing[4][saveDrawing[4].length]="up";
        drawGrid(canvasVal.value,"up");
         saveDrawing[5][0].Ucount=saveDrawing[5][0].Ucount+1;
         saveDrawing[5][0].UtotalD=saveDrawing[5][0].UtotalD+DinsVal;         
         
         
    }
    
    else if(getValue.value==="Uarrow"){
        saveDrawing[4][saveDrawing[4].length]="Uarrow";
        drawGrid(canvasVal.value,"Uarrow");
        saveDrawing[5][0].UAcount=saveDrawing[5][0].UAcount+1;
        saveDrawing[5][0].UAtotalD=saveDrawing[5][0].UAtotalD+DinsVal;    
        
    }
    
    else if(getValue.value==="down"){
        saveDrawing[4][saveDrawing[4].length]="down";
        drawGrid(canvasVal.value,"down");
        saveDrawing[5][0].Dcount=saveDrawing[5][0].Dcount+1;
        saveDrawing[5][0].DtotalD=saveDrawing[5][0].DtotalD+DinsVal;        
        
    }    
    
    
    else if(getValue.value==="Darrow"){
        saveDrawing[4][saveDrawing[4].length]="Darrow";
        drawGrid(canvasVal.value,"Darrow");
        saveDrawing[5][0].DAcount=saveDrawing[5][0].DAcount+1;
        saveDrawing[5][0].DAtotalD=saveDrawing[5][0].DAtotalD+DinsVal;
        
    }
    else if(getValue.value==="left"){
        saveDrawing[4][saveDrawing[4].length]="left";
        drawGrid(canvasVal.value,"left");
       saveDrawing[5][0].Lcount=saveDrawing[5][0].Lcount+1;
        saveDrawing[5][0].LtotalD=saveDrawing[5][0].LtotalD+DinsVal;
        
    }
    else if(getValue.value==="Larrow"){
        saveDrawing[4][saveDrawing[4].length]="Larrow";
        drawGrid(canvasVal.value,"Larrow");
        saveDrawing[5][0].LAcount=saveDrawing[5][0].LAcount+1;
        saveDrawing[5][0].LAtotalD=saveDrawing[5][0].LAtotalD+DinsVal;
        
    }    
    
    else if(getValue.value==="right"){
        saveDrawing[4][saveDrawing[4].length]="right";
        drawGrid(canvasVal.value,"right");
        saveDrawing[5][9]=saveDrawing[5][9]+DinsVal;
        
    }
    else if(getValue.value==="Rarrow"){
        saveDrawing[4][saveDrawing[4].length]="Rarrow";
    drawGrid(canvasVal.value,"Rarrow");
        saveDrawing[5][10]=saveDrawing[5][10]+DinsVal;
        
    }    
    
    else if(getValue.value==="saveGraph"){
    generateData(-1,"save");
    
    }
    else if(getValue.value==="angMove"){
        saveDrawing[4][saveDrawing[4].length]="angMove";
        drawGrid(canvasVal.value,"angMove");
               
    
    }
    else if(getValue.value==="arc"){
        arcVal=(DinsVal/100);//factorized by 20 to get modes size
        saveDrawing[3][saveDrawing[3].length]=DinsVal;
        Dins.value=arcVal;
        if(document.getElementById("fdeginsert") && document.getElementById("tdeginsert")){
            try{
        fdegVal=Number(document.getElementById("fdeginsert").value);
        tdegVal=Number(document.getElementById("tdeginsert").value);            
                
                
            }
            catch(e){
            fdegVal=0;
            tdegVal=0;
            }
        if(fdegVal<=0 && fdegVal>tdegVal){
        saveDrawing[4][saveDrawing[4].length]="arc"; 
        while(fdegVal>=tdegVal){          
    drawGrid(canvasVal.value,"arc");
    document.getElementById("fdeginsert").value=fdegVal;
            tdegVal +=1;
        }
        }
          
    else{
        if(fdegVal<tdegVal){
        saveDrawing[4][saveDrawing[4].length]="arc"; 
        for(loo=fdegVal; loo<=tdegVal; loo +=1){ 
        drawGrid(canvasVal.value,"arc");
    document.getElementById("fdeginsert").value=loo;        
    
    //document.getElementById("deginsert").value=loo;
        }
        }
        }
        }
        document.getElementById("fdeginsert").value=0;
        document.getElementById("tdeginsert").value=0;
        Dins.value=0;
        
        
    }
   
    
    else if(getValue.value==="fillcolor"){
    saveDrawing[4][saveDrawing[4].length]="fillcolor"; 
    saveDrawing[3][saveDrawing[3].length]=DinsVal;   
    saveDrawing[8][saveDrawing[4].length-1]=(document.getElementById("mycolor").value!="")?document.getElementById("mycolor").value:"white"; 
    drawGrid(canvasVal.value,"fillcolor");           
        saveDrawing[4][saveDrawing[4].length]="Rjump";
        drawGrid(canvasVal.value,"Rjump");            
        saveDrawing[4][saveDrawing[4].length]="Ljump";
        drawGrid(canvasVal.value,"Ljump");
     }
    
    else if(getValue.value==="shape"){//becarefull when you omit the equal sings, the event will listen to every area in the box and bouble to this
    saveDrawing[4][saveDrawing[4].length]="shape";
    if(saveDrawing[4].length>=1){
    saveDrawing[9][saveDrawing[4].length-1]=Number(document.getElementById("Dside").value);
    }
    else{
    saveDrawing[9][0]=Number(document.getElementById("Dside").value);
    }
    drawGrid(canvasVal.value,"shape");
    
    }
    
       else if(getValue.value==="newRow"){
        if(saveDrawing[4][saveDrawing[4].length-1]!="newRow"){
    saveDrawing[4][saveDrawing[4].length]="newRow";
    drawGrid(canvasVal.value,"newRow");
        }
    
    }
     else if(getValue.value==="newColumn"){
         if(saveDrawing[4][saveDrawing[4].length-1]!="newColumn"){
    saveDrawing[4][saveDrawing[4].length]="newColumn";
    drawGrid(canvasVal.value,"newColumn");  
         }
    }
   setValue.value=getValue.value; 
   }
}; 
   
    
    //****************************************************************************************************************
    
    
    
this.rPassValue=function(event){

var cel,Dins,DinsVal,setValue, getValue,canvasVal,loo,iloo,el,ela,v0,v1,v2,v3,v4,v6,v7,spl,splval,eloo,aloo,bloo,ind,fdegVal,tdegVal;
    
    getValue=event.target;
    setValue=document.getElementById("selectright");
    canvasVal=document.getElementById("canvas");
    Dins=document.getElementById("Dinsert");
    if(Dins){
    DinsVal=Number(document.getElementById("Dinsert").value);
    }
        
    if(getValue.value==="Run"){ 
     execute();
     }
     else if(getValue.value==="copy"){
        pointerShare();
         
    }
    else if(getValue.value==="compute"){
        computing.getFunction();
        }
    else if(getValue.value==="Delete"){
        if(document.getElementById("tempData")){
    document.body.removeChild(document.getElementById("tempData"));//remove the elements after exporting data or drawing
    } 
    if(document.getElementById("tempGraph")){
    document.body.removeChild(document.getElementById("tempGraph"));
    }   
    }
    else if(getValue.value==="point"){    
        
    drawPoint(canvasVal.value);
     
    }
     else if(getValue.value==="line"){
            drawLine(canvasVal.value);
          
    }
     else if(getValue.value==="histogram"){
         
         
    drawHistogram(canvasVal.value);
    }
     else if(getValue.value==="grid"){
         
         
    drawGrid(canvasVal.value);
     
    }
     else if(getValue.value==="pie"){      
    drawPie(canvasVal.value);
        bufferArea[0].x1=0;
        bufferArea[0].y1=0;
        bufferArea[0].x2=0;
        bufferArea[0].y2=0 
      
    
    }
    
    
    else if(getValue.value==="loosepie"){    
    drawPie(canvasVal.value,1);
        bufferArea[0].x1=0;
        bufferArea[0].y1=0;
        bufferArea[0].x2=0;
        bufferArea[0].y2=0 
      
   
    
    }
    
     else if(getValue.value==="polygon"){         
         el=document.getElementById("vleftMenu");//this is right it is vleftMenu
         if(el){
      el.childNodes[0].value="target";  
         }
    try{
    drawLine(canvasVal.value,"polygon");
    }
        catch(e){
        
        }
    
    }
    
    else if(getValue.value==="boundary" && borderLine[0].x2!=0){
    drawGrid(canvasVal.value,"boundary");
        borderLine[0].x1=0;
        borderLine[0].y1=0;
        borderLine[0].x2=0;
        borderLine[0].y2=0;
     
    }
    
    else if(getValue.value==="circle"){
    
     drawPoint(canvasVal.value,"circle");
     bufferArea[0].x1=0;
     bufferArea[0].y1=0;
     bufferArea[0].x2=0;
     bufferArea[0].y2=0;
     
    }
    
    else if(getValue.value==="scatter"){
   drawPoint(canvasVal.value,"scatter");
    bufferArea[0].x1=0;
     bufferArea[0].y1=0;
     bufferArea[0].x2=0;
     bufferArea[0].y2=0;
    }
    //to trouble shoot, check the saveDrawing database
   else if(getValue.value==="drawGraph"){
       try{
       if(document.getElementById("getData").value==="drawing"){
       cel=document.getElementById("mycolor");
       //set up the required parameters for the target command******************************************
       ela=document.getElementById("selectleft");//this is right it is vleftMenu
       el=document.getElementById("vleftMenu");
        ela.value="pause";    
       if(saveDrawing[4].length>0 && ela.value==="pause"){       
   for(loo=0; loo<saveDrawing[4].length; loo +=1){  
       cel.value=saveDrawing[12][loo];
    if(el){
        
       for(iloo=0; iloo<el.childNodes.length; iloo +=1){
           if(el.childNodes[iloo].id==="Dinsert"){
               Dins=el.childNodes[iloo];
           v3=Number(saveDrawing[3][loo]);//this is right loo not iloo
           el.childNodes[iloo].value=v3;
            break;
           }
       }
           if(saveDrawing[4][loo]==="arc"){
           for(aloo=0; aloo<el.childNodes.length; aloo +=1){
            if(el.childNodes[aloo].id==="fdeginsert"){
                v6=Number(saveDrawing[6][loo]);//this is loo not aloo
                el.childNodes[aloo].value=v6;
           }
            else if(el.childNodes[aloo].id==="tdeginsert"){
                v7=Number(saveDrawing[7][loo]);
                el.childNodes[aloo].value=v7;
            
            }
           } 
           }  
           if(saveDrawing[4][loo]==="angMove"){
           for(bloo=0; bloo<el.childNodes.length; bloo +=1){
            if(el.childNodes[bloo].id==="fdeginsert"){
                v6=Number(saveDrawing[6][loo]);
                el.childNodes[bloo].value=v6;
               
           }
           } 
           }
        
           }
         
       
    if(saveDrawing[4][loo]==="arc"){
           DinsVal=(saveDrawing[3][loo]/100);
           Dins.value=DinsVal;
           fdegVal=saveDrawing[6][loo];
           tdegVal=saveDrawing[7][loo];
    if(fdegVal<=0 && fdegVal>tdegVal){        
        while(fdegVal>=tdegVal){          
    drawGrid(canvasVal.value,"arc");
    document.getElementById("fdeginsert").value=fdegVal;
            tdegVal +=1;
        }
        }
    else if(saveDrawing[4][loo]==="shape"){
    document.getElementById("Dside").value=saveDrawing[9][loo];
    drawGrid(canvasVal.value,"shape");
    
    }  
    else{
        if(fdegVal<tdegVal){         
        for(aloo=fdegVal; aloo<=tdegVal; aloo +=1){ 
        drawGrid(canvasVal.value,"arc");
    document.getElementById("fdeginsert").value=aloo;  
    
        }
        }
        }
        document.getElementById("fdeginsert").value=0;
        document.getElementById("tdeginsert").value=0;
        Dins.value=saveDrawing[3][loo];
        }   
          
    else if(saveDrawing[4][loo]==="fillcolor"){         
       v2=Number(saveDrawing[2][loo]);
        v4=saveDrawing[4][loo];
        drawGrid(canvasVal.value,v4,v2,0,saveDrawing[8][loo]);
        //saveDrawing[4][saveDrawing[4].length]="Rjump";//check this too
        //drawGrid(canvasVal.value,"Rjump");            
        //saveDrawing[4][saveDrawing[4].length]="Ljump";
        //drawGrid(canvasVal.value,"Ljump");
       
       }
    else{
           
       v2=Number(saveDrawing[2][loo]);
        v4=saveDrawing[4][loo];
        drawGrid(canvasVal.value,v4,v2);
           
       }

       }
    //***************************************************************************************************
   }
    
   }
       }
       catch(e){
       }
   }
    
   
   else if(getValue.value==="readData"){      
   
   el=document.getElementById("drawingfile");
   try{        
       
   if(el){
       
   spl=el.value.split(",");
   }
       if(spl.length>4){
          if(/[a-zA-Z]+/.test(String(spl[4]))){ 
           ind=0;
       for(eloo=0; eloo<spl.length; eloo +=1){
           if(eloo<2){
              
            bufferArea[0].x1=Number(spl[eloo]);
            bufferArea[0].x2=bufferArea[0].x1;
            saveDrawing[0][0]=bufferArea[0].x1;         
            bufferArea[0].y1=Number(spl[eloo +=1]);
            bufferArea[0].y2=bufferArea[0].y1;
            saveDrawing[1][0]=bufferArea[0].y1;
                   
           }
        else{
       
       
            saveDrawing[2][ind]=Number(spl[eloo]);  //by pass the increment....    
            saveDrawing[3][ind]=Number(spl[eloo +=1]);   
            saveDrawing[4][ind]=spl[eloo +=1]; 
        if(saveDrawing[4][ind]==="angMove"){
        saveDrawing[6][ind]=Number(spl[eloo +=1]);
         
        }
        else if(saveDrawing[4][ind]==="arc"){
        saveDrawing[6][ind]=Number(spl[eloo +=1]);
        saveDrawing[7][ind]=Number(spl[eloo +=1]); 
         
        }
        else if(saveDrawing[4][ind]==="fillcolor"){
        saveDrawing[8][ind]=spl[eloo +=1];
         
        }
        else if(saveDrawing[4][ind]==="shape"){
        saveDrawing[9][ind]===Number(spl[eloo +=1]); 
         
        }
        else if(saveDrawing[4][ind]==="newColumn"){
            getMax();
        }
        else if(saveDrawing[4][ind]==="newRow"){
        getMax();        
        }
       saveDrawing[12][ind]=spl[eloo +=1];
       ind +=1;
           }
       } 
           }
       }
   }
       catch(e){
           
       }       
         
   }
    else if(getValue.value==="Djump"){
        saveDrawing[4][saveDrawing[4].length]="Djump";
        drawGrid(canvasVal.value,"Djump");
        saveDrawing[5][0].DJcount=saveDrawing[5][0].DJcount+1;
        saveDrawing[5][0].DJtotalD=saveDrawing[5][0].DJtotalD+DinsVal;
        
    }
    else if(getValue.value==="Rjump"){
        saveDrawing[4][saveDrawing[4].length]="Rjump";
        drawGrid(canvasVal.value,"Rjump");
        saveDrawing[5][11]=saveDrawing[5][11]+DinsVal;
       
    }
     else if(getValue.value==="Ljump"){
        saveDrawing[4][saveDrawing[4].length]="Ljump";//watch out this statment
        drawGrid(canvasVal.value,"Ljump");
        saveDrawing[5][0].LJcount=saveDrawing[5][0].LJcount+1;
        saveDrawing[5][0].LJtotalD=saveDrawing[5][0].LJtotalD+DinsVal;
       
        
    }
    else if(getValue.value==="Ujump"){
        saveDrawing[4][saveDrawing[4].length]="Ujump";
        drawGrid(canvasVal.value,"Ujump");
        saveDrawing[5][0].UJcount=saveDrawing[5][0].UJcount+1;
        saveDrawing[5][0].UJtotalD=saveDrawing[5][0].UJtotalD+DinsVal;
        
    }
    else if(getValue.value==="remove"){    
    if(document.getElementById("flytext")){ 
        drawGrid(canvasVal.value,"remove");
    document.body.removeChild(document.getElementById("flytext"));
    }
    }  
 
    else if(getValue.value==="brokenLine"){
        v0=Number(DinsVal);
        Dins.value=(DinsVal/DinsVal);
    for(loo=0; loo<v0; loo+=1){
    if(loo%2===0){
    drawGrid(canvasVal.value,"right");
    }
    else{
    drawGrid(canvasVal.value,"Rjump");
    
    }
    }  
    Dins.value=v0;
    }
    setValue.value=getValue.value;
    

};
    
    this.valueChange=function(event){
    var el,val;
        el=event.target;
        createCanvas(el.value);
    
    }

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                         20   
    
    
    
this.tagelValue=function(event,arr){
if(!document.getElementById("mytagel")){

var pas,val,x=20,p,btn,sel,txn;
    sel=document.createElement("select");
    sel.id="mytagel";
    sel.style.color="white";
    sel.style.backgroundColor="black";
    sel.style.position="absolute";
    sel.style.left=event.clientX+"px";
    sel.style.top=event.clientY+"px";
    sel.style.width="100px";
    sel.style.height="20px";
    sel.style.borderRadius="20px";
    sel.style.display="inline-block";
    for(p=0; p<arr.length; p +=1){
        if(p !=0){
        x +=20;
        }            
    btn=document.createElement(arr[p].el);    
    btn.style.backgroundColor="black";        
    txn=document.createTextNode(arr[p].na);
    btn.value=arr[p].va;
    btn.style.position="fixed";
    btn.style.left="0px";
    btn.style.top=x+"px";
    btn.style.width="100px";
    btn.style.height="20px";
        //attach text as a name 
    btn.appendChild(txn);
    sel.appendChild(btn);
    }
    document.body.appendChild(sel);
val=document.getElementById("mytagel");
pas=document.getElementById("mycolor");

    pas.value=val.value; 


}

else{
val=document.getElementById("mytagel");
pas=document.getElementById("mycolors");

    pas.value=val.value; 

document.body.removeChild(document.getElementById("mytagel"));

}

};

//&*******&*&*********************&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&**********************************************************
    
    
    
    
  
//!@!!!@!@@!@@!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

this.flyTextArea=function(event){    
var el,tar,ev;
    if(document.getElementById("vrightMenu").childNodes[0].value==="addText" ){
    bufferArea[0].tx=event.pageX-CONFIGURE.BUTWIDTH;
    bufferArea[0].ty=event.pageY-CONFIGURE.SELHEIGHT;
    el=document.createElement("textarea");
    el.id="flytext";
    el.style.backgroundColor="lightgray";
    el.style.color="black";
    el.setAttribute("cols","20");
    el.setAttribute("rows","5");
    el.style.position="absolute";
    el.style.left=event.pageX+"px"; //this is right no need to subtruct the BUT and SEl demensions co it doesn't interact with the canvas
    el.style.top=event.pageY+"px";
    if(!document.getElementById("flytext")){
       document.body.appendChild(el);
       }
    }
};
//****************************************************************************************************************

this.createTextArea=function(id){
 var el,sub;
     el=document.createElement("textarea");
     el.setAttribute("name","dataAccess");
     el.setAttribute("value","");
     el.required=true;
    el.style.backgroundColor="white";
    el.style.border="2px ridge black";
     el.id=id;//"mapping";
    //el.setAttribute("placeholder","write your text here");
    el.setAttribute("cols","250");
    el.setAttribute("rows","500");
    el.style.position="relative";
    el.style.left="100px";
    el.style.top="20px";
    if(id==="mappingfile" ||id==="drawingfile"){
    el.style.display="none";
    }
    el.style.marginTop="20px";
    document.body.appendChild(el);
 
 }

//*****************************************************************************************************************

this.baseMap=function(){ 
var r,loo,len;
    getCanvas(0);  
len=passIdFunc("length");
createButton("left",passDataLeft());
//loops through ids and functions
for(loo=0; loo < len; loo +=1){
    r=passIdFunc(loo); 
if(loo>=8){
createSelect(r.Id,eval(r.func),"bMenu");
}
else{
createSelect(r.Id,eval(r.func),"tMenu");

}
    
} 
createButton("topright",passDataTopRight());
createButton("right",passDataRight());    

//createImage("country/world.png");  //this will be default image to be loaded
PassModifier();

}();

return that;
}
