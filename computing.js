;(function(){
    var that=this;
    var keyword="";//search word will be contatnation to create the ongoing key press by users
    var dat="continent";
this.getCountry=function(c,n){
var con,s,m;
    if(c==="africa"){
        con=[{1007464:[{ethiopia:[1007,464]}],576574:[{cameroon:[576,574]}],1067442:[{djibouti:[1067,442]}],1126473:[{somalialand:[1126,473]}],1109580:[{somalia:[1109,580]}],995629:[{kenya:[995,629]}],883524:[{southsudan:[883,524]}],723531:[{centralafricarepublic:[723,531]}],641637:[{congo:[641,637]}],766658:[{drotcongo:[766,658]}],910606:[{uganda:[910,606]}],869664:[{rwanda:[869,664]}],866688:[{burundi:[866,688]}],950746:[{tanzania:[950,746]}],1126948:[{madagazcar:[1126,948]}],937938:[{mozambique:[937,938]}],923858:[{malawi:[923,858]}],844873:[{zambia:[844,873]}],856942:[{zimbabwe:[856,942]}],7601129:[{southafrica:[760,1129]}],758984:[{botswana:[758,984]}],658988:[{namibia:[658,988]}],671847:[{angola:[671,847]}],566639:[{gabon:[566,639]}],549609:[{eqoutorialguinea:[549,609]}],513484:[{nigeria:[513,484]}],425473:[{benin:[425,473]}],403491:[{togo:[403,491]}],365503:[{ghana:[365,503]}],297510:[{ivorycoast:[297,510]}],236530:[{liberia:[236,530]}],200493:[{sierraleone:[200,493]}],201453:[{guinea:[201,453]}],157431:[{guineabissau:[157,431]}],157395:[{senegal:[157,395]}],385354:[{mali:[358,354]}],365434:[{burkinafaso:[365,434]}],546354:[{niger:[546,354]}],691395:[{chad:[691,395]}],841385:[{sudan:[841,385]}],998377:[{eritrea:[998,377]}],850206:[{egypt:[850,206]}],678206:[{libya:[678,206]}],450198:[{algeria:[450,198]}],235304:[{mauritania:[235,304]}],202251:[{westernsahara:[202,251]}],296133:[{morocco:[296,133]}],56087:[{tunisia:[560,87]}]}];  //why this fail is because the africa,ethiopia issue 
        m=Number(n);
    return con[0][m][0];
    }
else if(c==="southamerica"){
       con=[{4013:[{panama:[40,131]}],87292:[{ecuador:[87,292]}],138422:[{peru:[138,422]}],352586:[{bolivia:[352,586]}],266881:[{chile:[266,881]}],359925:[{argentina:[359,925]}],487859:[{uraguay:[487,859]}],445680:[{paraguay:[445,680]}],539429:[{brazil:[539,429]}],560218:[{frenchguiana:[560,218]}],507186:[{suriname:[507,186]}],452174:[{guyana:[452,174]}],312111:[{venezuela:[312,111]}],172190:[{colombia:[172,190]}]}];  //why this fail is because the africa,ethiopia issue 
        m=Number(n);
    return con[0][m][0];
    }


};
    
 //*********************************************************************************************    
this.getState=function(c,co,n){
    var con,m;
    if(c==="africa"){
        if(co==="ethiopia"){
con=[{26339:[{tigray:[263,39]}],245162:[{amhara:[245,162]}],130208:[{beneshangul:[130,208]}],71346:[{gambela:[71,346]}],175429:[{south:[175,429]}],350392:[{oromo:[350,392]}],562389:[{somali:[562,389]}],393123:[{afar:[393,123]}]}];
        m=Number(n);
    return con[0][m][0];
    }
    }
else if(c==="southamerica"){
if(co==="bolivia"){


}


}
else if(c==="northamerica"){
    if(co==="usa"){
        con=[{17696:[{washington:[176,96]}],137190:[{oregon:[137,190]}],95390:[{california:[95,390]}],278503:[{arizona:[278,503]}],181328:[{nevada:[181,328]}],306354:[{utah:[306,354]}],393260:[{wyoming:[393,260]}],431328:[{colorado:[431,382]}],406510:[{newmexico:[406,510]}],573610:[{texas:[573,610]}],613485:[{oklahoma:[613,485]}],599416:[{kansas:[599,416]}],571313:[{nebraska:[571,313]}],563231:[{sdakota:[563,231]}],697304:[{iowa:[697,304]}],721412:[{missouri:[721,412]}],729505:[{arkansas:[729,505]}],736626:[{louisiana:[736,626]}],795566:[{mississippi:[795,566]}],867549:[{alabama:[867,549]}],1011690:[{florida:[1011,690]}],946553:[{georgia:[946,553]}],994510:[{scarolina:[994,510]}],876466:[{tennessee:[876,466]}],1041458:[{ncarolina:[1041,458]}],1040397:[{virginia:[1040,397]}],980364:[{wvirginia:[980,364]}],879423:[{kentucky:[879,423]}],786353:[{illinois:[786,353]}],859347:[{indiana:[859,347]}],932331:[{ohio:[932,331]}],1037297:[{pennsylvania:[1037,297]}],1078345:[{maryland:[1078,345]}],1094341:[{delaware:[1094,341]}],1110304:[{newjersy:[1110,304]}],1137251:[{connecticut:[1137,251]}],1164245:[{rhodeisland:[1164,245]}],1150227:[{massachusetts:[1150,227]}],1145189:[{newhampshire:[1145,189]}],1184121:[{maine:[1184,121]}],1119173:[{vermont:[1119,173]}],1071225:[{newyork:[1071,225]}],879251:[{michigan:[879,251]}],770223:[{wisconsin:[770,223]}],669190:[{minnesota:[669,190]}],556148:[{ndakota:[556,148]}],366148:[{montana:[366,148]}],257224:[{idaho:[257,224]}]}];
    m=Number(n);
    return con[0][m][0];
    }

}
};
//*******************************************************************************************
    this.getCity=function(c,co,st,n){
    var con,m;
    if(c==="africa"){
        if(co==="ethiopia"){            
            if(st==="tigray"){
con=[{26339:[{mekelle:[263,39]}],245162:[{adigrate:[245,162]}],130208:[{axum:[130,208]}],71346:[{shire:[71,346]}],175429:[{humera:[175,429]}],350392:[{machew:[350,392]}],562389:[{abiyadi:[562,389]}],393123:[{yechila:[393,123]}]}];
        m=Number(n);
    return con[0][m][0];
    }
    else if(st==="amhara"){
    con=[{700700:[{gonder:[700,700]}]}];
         m=Number(n);
    return con[0][m][0];    
    }
    }
    else if(co==="kenya"){
    
    }
    else if(co==="sudan"){
    
    
    }
    }
else if(c==="southamerica"){
if(co==="bolivia"){


}


}
    
    };
    
    
    //*******************************************************************************************
    
       this.getZip=function(c,co,st,ci,n){
    var con,m;
    if(c==="africa"){
        if(co==="ethiopia"){            
            if(st==="tigray"){
                if(ci==="mekelle"){
con=[{26339:[{hawelti:[263,39]}],245162:[{adihaki:[245,162]}],130208:[{hadnet:[130,208]}],71346:[{kweyane:[71,346]}],175429:[{mycit:[175,429]}],350392:[{indstry:[350,392]}],562389:[{maygebel:[562,389]}],393123:[{engliz:[393,123]}]}];
        m=Number(n);
    return con[0][m][0];
                }
            else if(ci==="adigrate"){
            
            }
            else if(ci==="axum"){
            
            
            
            }
            else if(ci==="machew"){
            
            }
    }
    else if(st==="amhara"){
    if(ci==="gonder"){
    
    }
    else if(ci==="desa"){
    
    }
    
    }
    }
    else if(co==="kenya"){
    
    }
    else if(co==="sudan"){
    
    
    }
    }
else if(c==="southamerica"){
if(co==="bolivia"){


}


}
    
    };
    
    
    //***********************************************************************************************
    
    this.getHouse=function(c,co,st,ci,zi,n){
    var con,m;
    if(c==="africa"){
        if(co==="ethiopia"){            
            if(st==="tigray"){
                if(ci==="mekelle"){
                    if(zi==="hawelti"){
con=[{26339:[{house1:[263,39]}],245162:[{house2:[245,162]}],130208:[{house3:[130,208]}],71346:[{house4:[71,346]}],175429:[{house4:[175,429]}],350392:[{house5:[350,392]}],562389:[{house6:[562,389]}],393123:[{house7:[393,123]}]}];
        m=Number(n);
    return con[0][m][0];
                    }
                else if(zi==="kweyane"){
                con=[{26339:[{house1:[263,39]}],245162:[{house2:[245,162]}],130208:[{house3:[130,208]}],71346:[{house4:[71,346]}],175429:[{house4:[175,429]}],350392:[{house5:[350,392]}],562389:[{house6:[562,389]}],393123:[{house7:[393,123]}]}];
                 m=Number(n);
                return con[0][m][0];
                }
                else if(zi==="adigrate") {
                con=[{26339:[{house1:[263,39]}],245162:[{house2:[245,162]}],130208:[{house3:[130,208]}],71346:[{house4:[71,346]}],175429:[{house4:[175,429]}],350392:[{house5:[350,392]}],562389:[{house6:[562,389]}],393123:[{house7:[393,123]}]}];
                 m=Number(n);
                return con[0][m][0];
                
                }
                    ///////////////////////
                }
            else if(ci==="adigrate"){
            
            }
            else if(ci==="axum"){
            
            
            
            }
            else if(ci==="machew"){
            
            }
    }
    else if(st==="amhara"){
    if(ci==="gonder"){
    
    }
    else if(ci==="desa"){
    
    }
    
    }
    }
    else if(co==="kenya"){
    
    }
    else if(co==="sudan"){
    
    
    }
    }
else if(c==="southamerica"){
if(co==="bolivia"){


}


}
    
    };
    
    //***********************************************************************************************
    //this is currnetly used as geo location 
this.dataContainer=function(con,cou,sta,cit,zip,hos){
        var cd,cc,getcc,getcd,loo,continent,country,state,city,zipcode,street,vertex,edge,house;
        cc=document.getElementById("Ckeyword").value;
        cd=document.getElementById("Dkeyword").value;
    
if(con==="continent" && cou===undefined){
            continent=[{africa:[1085,549],usa:[434,336],southamerica:[595,595],russia:[1387,211],antartica:[1008,1041],asia:[1407,361],australia:[1683,735],canada:[460,230],carebbean:[485,500],europe:[1050,285],mixco:[407,448],newzland:[1846,832],denmark:[802,145]}]; 
    return continent[continent.length-1];
    }
        
else if(con!=undefined && (cou!=undefined && sta===undefined)){
    
    
    country=[{africa:[{ethiopia:[1007,464],djibouti:[1067,442],somalialand:[1126,473],somalia:[1109,580],kenya:[995,629],southsudan:[883,524],centralafricarepublic:[723,531],congo:[641,637],drotcongo:[766,658],uganda:[910,606],rwanda:[869,664],burundi:[866,688],tanzania:[950,746],madagazcar:[1126,948],mozambique:[937,938],malawi:[923,858],zambia:[844,873],zimbabwe:[856,942],southafrica:[760,1129],botswana:[758,984],namibia:[658,988],angola:[671,847],gabon:[566,639],eqoutorialguinea:[549,609],cameroon:[576,574],nigeria:[513,484],benin:[425,473],togo:[403,491],ghana:[365,503],ivorycoast:[297,510],liberia:[236,530],sierraleone:[200,493],guinea:[201,453],guineabissau:[157,431],senegal:[157,395],mali:[358,354],burkinafaso:[365,434],niger:[546,354],chad:[691,395],sudan:[841,385],eritrea:[998,377],egypt:[850,206],libya:[678,206],algeria:[450,198],mauritania:[235,304],westernsahara:[202,251],morocco:[296,133],tunisia:[560,87]}],europe:[{}],asia:[{}],australia:[{}],northamerica:[{usa:[402,159],canada:[445,18]}],antartica:[{}],southamerica:[{panama:[40,131],ecuador:[87,292],peru:[138,422],bolivia:[352,586],chile:[266,881],argentina:[359,925],uraguay:[487,859],paraguay:[445,680],brazil:[539,429],frenchguiana:[560,218],suriname:[507,186],guyana:[452,174],venezuela:[312,111],colombia:[172,190]}]}];    
    
    if(cou==="all"){
    return country[country.length-1][con][0]; 
        }
    else{
        if(cc===cou ||cd!=cou){
    getcc=getCountry(con,String(country[country.length-1][con][0][cou][0])+String(country[country.length-1][con][0][cou][1])); 
        return getcc;
    
    }
    
    else if(cd===cou || cc!=cou){
        getcd=getCountry(con,String(country[country.length-1][con][0][cou][0])+String(country[country.length-1][con][0][cou][1])); 
        return getcd;
    }
    }
    
}
else if((con!=undefined && cou!=undefined) && (sta!=undefined && cit===undefined)){
    state=[{africa:[{ethiopia:[{tigray:[263,39],amhara:[245,162],beneshangul:[130,208],gambela:[71,346],south:[175,429],oromo:[350,392],somali:[562,389],afar:[393,123]}]}],northamerica:[{usa:[{washington:[176,96],oregon:[137,190],california:[95,390],arizona:[278,503],nevada:[181,328],utah:[306,354],wyoming:[393,260],colorado:[431,382],newmexico:[406,510],texas:[573,610],oklahoma:[613,485],kansas:[599,416],nebraska:[571,313],sdakota:[563,231],iowa:[697,304],missouri:[721,412],arkansas:[729,505],louisiana:[736,626],mississippi:[795,566],alabama:[867,549],florida:[1011,690],georgia:[946,553],scarolina:[994,510],tennessee:[876,466],ncarolina:[1041,458],virginia:[1040,397],wvirginia:[980,364],kentucky:[879,423],illinois:[786,353],indiana:[859,347],ohio:[932,331],pennsylvania:[1037,297],maryland:[1078,345],delaware:[1094,341],newjersy:[1110,304],connecticut:[1137,251],rhodeisland:[1164,245],massachusetts:[1150,227],newhampshire:[1145,189],maine:[1184,121],vermont:[1119,173],newyork:[1071,225],michigan:[879,251],wisconsin:[770,223],minnesota:[669,190],ndakota:[556,148],montana:[366,148],idaho:[257,224]}]}]}];
    if(sta==="all"){
    return state[state.length-1][con][0][cou][0];
    }
    else{
       if(cc===sta ||cd!=sta){
    getcc=getState(con,cou,String(state[state.length-1][con][0][cou][0][sta][0])+String(state[state.length-1][con][0][cou][0][sta][1])); 
        return getcc;
    
    }
    
    else if(cd===sta || cc!=sta){      
        getcd=getState(con,cou,String(state[state.length-1][con][0][cou][0][sta][0])+String(state[state.length-1][con][0][cou][0][sta][1]));  
       return getcd; 
        
    }
    }
}
    
else if(((con!=undefined && cou!=undefined) && (sta!=undefined && cit!=undefined))&&(zip===undefined)){
        city=[{africa:[{ethiopia:[{tigray:[{mekelle:[263,39],adigrate:[245,162],axum:[130,208],shire:[71,346],humera:[175,429],machew:[350,392],abiyadi:[562,389],yechila:[393,123]}],amhara:[{weldiya:[],kombolicha:[],desa:[],debrebrhan:[],gonder:[700,700],bahrdar:[],debremarkos:[]}],beneshangul:[{a:[130,208]}],gambela:[{b:[71,346]}],south:[{awasa:[175,429]}],oromo:[{nazirat:[350,392],jima:[],debrezat:[]}],somali:[{jijiga:[562,389]}],afar:[{semera:[393,123]}]}]}]}];
    if(cit==="all"){
    return city[city.length-1][con][0][cou][0][sta][0];
    }
    else{
       if(cc===cit ||cd!=cit){
    getcc=getCity(con,cou,sta,String(city[city.length-1][con][0][cou][0][sta][0][cit][0])+String(city[city.length-1][con][0][cou][0][sta][0][cit][1])); 
        return getcc;
    
    }
    
    else if(cd===cit || cc!=cit){      
        getcd=getCity(con,cou,sta,String(city[city.length-1][con][0][cou][0][sta][0][cit][0])+String(city[city.length-1][con][0][cou][0][sta][0][cit][1]));   
       return getcd; 
        
    }
    }
}
    else if(((con!=undefined && cou!=undefined) && (sta!=undefined && cit!=undefined))&&(zip!=undefined && hos===undefined)){
        zipcode=[{africa:[{ethiopia:[{tigray:[{mekelle:[{hawelti:[263,39],adihaki:[245,162],hadnet:[130,208],kweyane:[71,346],mycit:[175,429],indstry:[350,392],maygebel:[562,389],engliz:[393,123]}]}]}]}]}];
    if(zip==="all"){
    return zipcode[zipcode.length-1][con][0][cou][0][sta][0][cit][0];
    }
    else{
       if(cc===zip ||cd!=zip){
    getcc=getZip(con,cou,sta,cit,String(zipcode[zipcode.length-1][con][0][cou][0][sta][0][cit][0][zip][0])+String(zipcode[zipcode.length-1][con][0][cou][0][sta][0][cit][0][zip][1])); 
        return getcc;
    
    }
    
    else if(cd===zip || cc!=zip){      
        getcd=getZip(con,cou,sta,cit,String(zipcode[zipcode.length-1][con][0][cou][0][sta][0][cit][0][zip][0])+String(zipcode[zipcode.length-1][con][0][cou][0][sta][0][cit][0][zip][1]));   
       return getcd; 
        
    }
    }
}

else if(((con!=undefined && cou!=undefined) && (sta!=undefined && cit!=undefined))&&(zip!=undefined && hos!=undefined)){
        house=[{africa:[{ethiopia:[{tigray:[{mekelle:[{hawelti:[{house1:[263,39],house2:[245,162],house3:[130,208],house4:[71,346],house4:[175,429],house5:[350,392],house6:[562,389],house7:[393,123]}],hadnet:[{house1:[130,208],house2:[140,208],house3:[70,346]}],kweyane:[{house1:[71,346],house2:[75,350]}],mycit:[{house1:[175,429],house2:[350,400]}]}]}]}]}]}];
    if(hos==="all"){
    return house[house.length-1][con][0][cou][0][sta][0][cit][0][zip][0];
    }
    else{
       if(cc===hos ||cd!=hos){
    getcc=getHouse(con,cou,sta,cit,zip,String(house[house.length-1][con][0][cou][0][sta][0][cit][0][zip][0][hos][0])+String(house[house.length-1][con][0][cou][0][sta][0][cit][0][zip][0][hos][1])); 
        return getcc;
    
    }
    
    else if(cd===hos || cc!=hos){      
        getcd=getHouse(con,cou,sta,cit,zip,String(house[house.length-1][con][0][cou][0][sta][0][cit][0][zip][0][hos][0])+String(house[house.length-1][con][0][cou][0][sta][0][cit][0][zip][0][hos][1]));   
       return getcd; 
        
    }
    }
}
    else if(con==="vertex"){
     vertex=[{africa:[1085,549],usa:[434,336],southamerica:[595,595],russia:[1387,211],antartica:[1008,1041],asia:[1407,361],australia:[1683,735],canada:[460,230],carebbean:[485,500],europe:[1050,285],mixco:[407,448],newzland:[1846,832],denmark:[802,145]}]; 
    return vertex[vertex.length-1];
    }
    else if(con==="edge"){
     edge=[{africa:[1085,549],usa:[434,336],southamerica:[595,595],russia:[1387,211],antartica:[1008,1041],asia:[1407,361],australia:[1683,735],canada:[460,230],carebbean:[485,500],europe:[1050,285],mixco:[407,448],newzland:[1846,832],denmark:[802,145]}]; 
    return edge[edge.length-1];
    }
    else if(con==="house"){
     house=[{africa:[1085,549],usa:[434,336],southamerica:[595,595],russia:[1387,211],antartica:[1008,1041],asia:[1407,361],australia:[1683,735],canada:[460,230],carebbean:[485,500],europe:[1050,285],mixco:[407,448],newzland:[1846,832],denmark:[802,145]}]; 
    return house[house.length-1];
    }
};
    
    //*********************************************************************************************************************
    this.currentL=[];//because the search is two way, so u have to cash the results here not to search again
    this.destinationL=[];

    //*********************************************************************************************************************
    
    this.searchDisplay=function(id){
    var trm,ckey,dkey,sel,opt,op,loo;
        trm=document.getElementById("toprightMenu");
        ckey=document.getElementById("Ckeyword");
        dkey=document.getElementById("Dkeyword");
        if(!document.getElementById(id)){
        sel=document.createElement("select");
        sel.id=id;
        sel.style.backgroundColor="wheat";
        sel.style.color="black";
        sel.style.width="100px";
        sel.style.height="20px";
        sel.style.position="absolute";
        if(id==="sresult"){
        sel.style.left=ckey.style.left;//"50px";
        }
        else if(id==="dresult"){
         sel.style.left=dkey.style.left;//"50px";
        sel.style.marginLeft="40px";
        }
        sel.style.top=document.getElementById("searchP").style.top;//"30px";
        op=document.createElement("option");
        op.style.width="100px";
        op.style.height="20px";
        op.setAttribute("value","");
        opt=document.createTextNode("");//copy the text and the attach to the new option
        op.appendChild(opt);  
        sel.appendChild(op);
        trm.appendChild(sel);
        for(loo=0; loo<trm.childNodes.length; loo+=1){
        if(trm.childNodes[loo].id===id){
        trm.childNodes[loo].addEventListener("change",passSearch,false);
            break;
        
        }
        
        }
        }
        else{
        sel=document.getElementById(id);
    op=document.createElement("option");
    op.style.width="100px";
    op.style.height="20px";
    op.setAttribute("value",keyword);
    opt=document.createTextNode(keyword);//copy the text and the attach to the new option
    op.appendChild(opt);  
    sel.insertBefore(op,sel.firstChild);
    
    }    
    };
    
    this.searchCurrent=function(){
        var key,st,loo,cont,spl=[];
        if(document.getElementById("dataBaseC")){
       dat=document.getElementById("dataBaseC").value;
            try{            
            spl=dat.split(",");
            if(spl.length==2){                
            cont=dataContainer(spl[0],spl[1]);
            }
            else if(spl.length===3){                
            cont=dataContainer(spl[0],spl[1],spl[2]);
                }
                
            else if(spl.length===4){                
                    cont=dataContainer(spl[0],spl[1],spl[2],spl[3]);
                }
                
            else if(spl.length===5){                
                     cont=dataContainer(spl[0],spl[1],spl[2],spl[3],spl[4]);
                }
                
            else if(spl.length===6){
               cont=dataContainer(spl[0],spl[1],spl[2],spl[3],spl[4],spl[5]);
                }               
            else if(spl.length===7){
               cont=dataContainer(spl[0],spl[1],spl[2],spl[3],spl[4],spl[6]);
                }
                
            else{
            cont=dataContainer(dat);
            }
        }
        catch(e){
        cont=dataContainer(dat);
        }
       }
      
    
        
        st=document.getElementById("Ckeyword");
        if(document.getElementById("startnow")){
        if(st.value===""){
        document.getElementById("startnow").style.display="none";
        }
        
        }
        if(document.getElementById("sresult")){
            if(document.getElementById("sresult").options.length>20 || st.value===""){
            document.getElementById("toprightMenu").removeChild(document.getElementById("sresult"));
            keyword="";
            }
        else{
           key=Object.keys(cont); //gets the keys to loop over 
         for(loo=0;loo<key.length; loo+=1){      
         if(st.value===key[loo].substring(0,4)){
         keyword=key[loo];
          st.value=key[loo];//tabcompletion type ... 
             break;
            }
         }   
               
        searchDisplay("sresult");
        }
        }
        else{
        searchDisplay("sresult");
        
        }
               
        
    };
    this.searchDestination=function(){
         var key,loo,ds,cont,spl=[];
         if(document.getElementById("dataBaseD")){
       dat=document.getElementById("dataBaseD").value;
            try{            
            spl=dat.split(",");
            if(spl.length===2){
                cont=dataContainer(spl[0],spl[1]);                
                }
            else if(spl.length===3){               
            cont=dataContainer(spl[0],spl[1],spl[2]);
                }
                
            else if(spl.length===4){               
                cont=dataContainer(spl[0],spl[1],spl[2],spl[3]);
                }
                
            else if(spl.length===5){
                cont=dataContainer(spl[0],spl[1],spl[2],spl[3],spl[4]);
                }
            else if(spl.length===6){
                cont=dataContainer(spl[0],spl[1],spl[2],spl[3],spl[4],spl[5]);
                }
                
            else if(spl.length===7){
                cont=dataContainer(spl[0],spl[1],spl[2],spl[3],spl[4],spl[6]);
                }
                
            else{
            cont=dataContainer(dat);
            }
        }
        catch(e){
        cont=dataContainer(dat);
        }
             
       }      
       
        ds=document.getElementById("Dkeyword");
        if(document.getElementById("startnow")){
        if(ds.value===""){
        document.getElementById("startnow").style.display="none";
        }
        
        }
        if(document.getElementById("dresult")){//this is to controll the size of the dropdawn size
            if(document.getElementById("dresult").options.length>20 ||ds.value===""){
            document.getElementById("toprightMenu").removeChild(document.getElementById("dresult"));
            keyword="";
            }
        else{
            key=Object.keys(cont); //gets the keys to loop over 
         for(loo=0;loo<key.length; loo+=1){      
         if(ds.value===key[loo].substring(0,4)){
         keyword=key[loo];
          ds.value=key[loo];//tabcompletion type ... 
            break;
            }
         } 
        
        searchDisplay("dresult");
        }
        }
        else{
        searchDisplay("dresult");
        
        }
    };
    this.passSearch=function(){
    var ck,dk;
        ck=document.getElementById("sresult");
        dk=document.getElementById("dresult");
        if(ck){
        document.getElementById("Ckeyword").value=ck.options[ck.selectedIndex].text;//passvalue search result 
         document.getElementById("toprightMenu").removeChild(document.getElementById("sresult"));
        } 
        else if(dk){
        document.getElementById("Dkeyword").value=dk.options[dk.selectedIndex].text;//passvalue search result 
         document.getElementById("toprightMenu").removeChild(document.getElementById("dresult"));
        }
        keyword="";
    };
    
    
//this database is used by the image processing feature of this software
this.dataBase=[{red:[],green:[],blue:[],alpha:[],yaxis:"",xaxis:"",zaxis:1,xcor:0,ycor:0,imwidth:0,imheight:0,DN:0,win:3},{xmin:0,ymin:0,xmax:0,ymax:0}];    
    
    //**************************************************************************************
    this.getFunction=function(){
var el,elv,con,dco;
    con=document.getElementById("comstart");    
    el=document.getElementById("computing");
    dco=document.getElementById("forground");
        if(con.style.backgroundColor!="green" && con.style.backgroundColor!="red"){
    if(el.options[el.selectedIndex].text==="Compute" ||dco.options[dco.selectedIndex].text==="Data"){
    con.style.backgroundColor="gold";
    }
    else{
    try{
    if(el){
    
    eval(el.value);
     dataBase[0].xcor=0;//reset coordinates
    dataBase[0].ycor=0;
    dataBase[0].DN=0;
    }
     con.style.backgroundColor="green";   
    }
    catch(e){
    con.style.backgroundColor="red";
    
    }
    }
        }
    else if(con.style.backgroundColor==="green" || con.style.backgroundColor==="red"){
    con.style.backgroundColor="gold";
    
    }
        if(con.style.backgroundColor==="green"){
    setTimeout("getFunction()",5000);
        }
};
    //**********************************************************************************************
    this.RGB=function(){
        
        var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                //ctx.globalCompositeOperation="copy";
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);
                if(dataBase[0].imwidth===0 && dataBase[0].imheight===0){
                dataBase[0].imwidth=im.width;
                dataBase[0].imheight=im.height;
        
                    }
                da=ctx.getImageData(dataBase[0].xcor,dataBase[0].ycor,dataBase[0].imwidth,dataBase[0].imheight);
                daval=da.data;
               for(loo=0; loo<=daval.length-4; loo +=4){
                   if(dataBase.length===1){
                dataBase[dataBase.length-1].red[dataBase[dataBase.length-1].red.length]=daval[loo];
                dataBase[dataBase.length-1].green[dataBase[dataBase.length-1].green.length]=daval[loo+1];
                dataBase[dataBase.length-1].blue[dataBase[dataBase.length-1].blue.length]=daval[loo+2];
                dataBase[dataBase.length-1].alpha[dataBase[dataBase.length-1].alpha.length]=daval[loo+3];
                    daval[loo+3]=dataBase[0].zaxis;
                   }
               
               }
                
                da.data=daval;
                ctx.putImageData(da,dataBase[0].xcor,dataBase[0].ycor);
                
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }


};
    
this.redBand=function(){
var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                if(dataBase[0].imwidth===0 && dataBase[0].imheight===0){
                dataBase[0].imwidth=im.width;
                dataBase[0].imheight=im.height;
        
                    }
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);
                da=ctx.getImageData(dataBase[0].xcor,dataBase[0].ycor, dataBase[0].imwidth,dataBase[0].imheight);
                daval=da.data;
               for(loo=0; loo<daval.length; loo +=4){              
                daval[loo+1]=0;
                daval[loo+2]=0;
               
               }
                da.data=daval;                
                ctx.putImageData(da,dataBase[0].xcor,dataBase[0].ycor);
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }


};
this.greenBand=function(){
var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                   if(dataBase[0].imwidth===0 && dataBase[0].imheight===0){
                dataBase[0].imwidth=im.width;
                dataBase[0].imheight=im.height;
        
                    }
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);
                da=ctx.getImageData(dataBase[0].xcor,dataBase[0].ycor, dataBase[0].imwidth, dataBase[0].imheight);
                daval=da.data;
               for(loo=0; loo<=daval.length-4; loo +=4){              
                daval[loo]=0;
                daval[loo+2]=0;
               }
                da.data=daval;
                ctx.putImageData(da,dataBase[0].xcor,dataBase[0].ycor);
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }

};
this.blueBand=function(){
var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                if(dataBase[0].imwidth===0 && dataBase[0].imheight===0){
                    dataBase[0].imwidth=im.width;
                    dataBase[0].imheight=im.height;        
                }
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);
                da=ctx.getImageData(dataBase[0].xcor,dataBase[0].ycor,dataBase[0].imwidth,dataBase[0].imheight);
                daval=da.data;
               for(loo=0; loo<daval.length; loo +=4){              
                daval[loo]=0;
                daval[loo+1]=0;
               }
                da.data=daval;
                ctx.putImageData(da,dataBase[0].xcor,dataBase[0].ycor);
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }

};
    
this.colorToGray=function(){
var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                   if(dataBase[0].imwidth===0 && dataBase[0].imheight===0){
                    dataBase[0].imwidth=im.width;
                    dataBase[0].imheight=im.height; 
                   
                }
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);
                da=ctx.getImageData(dataBase[0].xcor,dataBase[0].ycor,dataBase[0].imwidth,dataBase[0].imheight);
                daval=da.data;
               for(loo=0; loo<daval.length; loo +=4){              
                daval[loo]=(daval[loo]+daval[loo+1]+daval[loo+2])/3;
                daval[loo+1]=(daval[loo]+daval[loo+1]+daval[loo+2])/3;
                daval[loo+2]=(daval[loo]+daval[loo+1]+daval[loo+2])/3;
               }
                da.data=daval;
                ctx.putImageData(da,dataBase[0].xcor,dataBase[0].ycor);
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }

};
    
this.grayToColor=function(){
var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                   if(dataBase[0].imwidth===0 && dataBase[0].imheight===0){
                    dataBase[0].imwidth=im.width;
                    dataBase[0].imheight=im.height; 
                   
                }
                ctx.drawImage(im, dataBase[0].xcor,dataBase[0].ycor);
                da=ctx.getImageData(dataBase[0].xcor,dataBase[0].ycor,dataBase[0].imwidth,dataBase[0].imheight);
                daval=da.data;
               for(loo=0; loo<daval.length; loo+=4){              
                daval[loo]=Math.abs(daval[loo]-dataBase[0].DN);
                daval[loo+1]=Math.abs(daval[loo+1]-dataBase[0].DN);
                daval[loo+2]=Math.abs(daval[loo+2]-dataBase[0].DN);
               }
                da.data=daval;
                ctx.putImageData(da,dataBase[0].xcor,dataBase[0].ycor);
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }

};
this.featureSpace=function(){
    
    var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm;
    elf=document.getElementById("computing");
    if(elf.options[elf.selectedIndex].text==="featureSpace"){
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                ctx.globalCompositeOperation="copy";
                ctx.fillStyle=document.getElementById("mycolor").value;
                ctx.strokeStyle=document.getElementById("mycolor").value;
                ctx.beginPath();
                ctx.moveTo(100,600);
                ctx.lineTo(600,600);                
                ctx.lineTo(590,590);                  
                ctx.lineTo(590,610);                  
                ctx.lineTo(600,600);                  
                ctx.moveTo(100,600);
                ctx.lineTo(100,100);                   
                ctx.lineTo(90,110);                  
                ctx.lineTo(110,110);                   
                ctx.lineTo(100,100);                  
                ctx.moveTo(100,600);
                ctx.closePath();
                ctx.stroke(); 
                ctx.fill();
                if(dataBase[0].imwidth===0 && dataBase[0].imheight===0){
                    dataBase[0].imwidth=im.width;
                    dataBase[0].imheight=im.height; 
                   
                }
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);
                da=ctx.getImageData(0,0,im.width,im.height);
                daval=da.data;
               for(loo=0; loo<daval.length; loo+=4){ 
                   if(loo<1000){
                    if(dataBase[0].yaxis==="r" && dataBase[0].xaxis==="b"){
                        ctx.moveTo(2*(daval[loo]),(600-2*(daval[loo+2])));
                        ctx.arc(2*(daval[loo]),(600-2*(daval[loo+2])),2,0,2*Math.PI,false);
                       }
                    else if(dataBase[0].yaxis==="r" && dataBase[0].xaxis==="g"){
                        ctx.moveTo(2*(daval[loo]),(600-2*(daval[loo+1])));
                        ctx.arc(2*(daval[loo]),(600-2*(daval[loo+1])),2,0,2*Math.PI,false);
                       }
                    else if(dataBase[0].yaxis==="g" && dataBase[0].xaxis==="b"){
                        ctx.moveTo(2*(daval[loo+1]),(600-2*(daval[loo+2])));
                        ctx.arc(2*(daval[loo+1]),(600-2*(daval[loo+2])),2,0,2*Math.PI,false);
                       }
                ctx.fill();
                   }
                daval[loo]=255;
                daval[loo+1]=255;
                daval[loo+2]=255;
               }
                da.data=daval;
                ctx.putImageData(da,dataBase[0].xcor,dataBase[0].ycor);
                ctx.closePath();
                ctx.stroke(); 
                ctx.fill();
               } 
    
    
            }
    
    }
   
    document.body.removeChild(im);
    }
    }
};

this.cloudRemover=function(){
var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                    if(dataBase[0].imwidth===0 && dataBase[0].imheight===0){
                    dataBase[0].imwidth=im.width;
                    dataBase[0].imheight=im.height; 
                   
                }
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);
                da=ctx.getImageData(dataBase[0].xcor,dataBase[0].ycor,dataBase[0].imwidth,dataBase[0].imheight);
                daval=da.data;
               for(loo=0; loo<daval.length; loo +=4){ 
                   if(daval[loo]>=dataBase[0].DN){
                   daval[loo]=0;
                   }
                if(daval[loo+1]>=dataBase[0].DN){
                daval[loo+1]=0;
               }
            if(daval[loo+2]>=dataBase[0].DN){
            daval[loo+2]=0;            
            }
               }
                da.data=daval;
                ctx.putImageData(da,dataBase[0].xcor,dataBase[0].ycor);
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }
};
this.shadowRemover=function(){
    var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                    if(dataBase[0].imwidth===0 && dataBase[0].imheight===0){
                    dataBase[0].imwidth=im.width;
                    dataBase[0].imheight=im.height; 
                   
                }
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);
                da=ctx.getImageData(dataBase[0].xcor,dataBase[0].ycor,dataBase[0].imwidth,dataBase[0].imheight);
                daval=da.data;
               for(loo=0; loo<daval.length; loo+=4){ 
                   if(daval[loo]<dataBase[0].DN){
                   daval[loo]=255;
                   }
                if(daval[loo+1]<dataBase[0].DN){
                daval[loo+1]=255;
               }
            if(daval[loo+2]<dataBase[0].DN){
            daval[loo+2]=255;            
            }
               }
                da.data=daval;
                ctx.putImageData(da,dataBase[0].xcor,dataBase[0].ycor);
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }

};
this.STDEVremover=function(){
  var ctx,c,cel,im, da,daval,rloo,gloo,bloo,loo,rs=0,gs=0,bs=0,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                   if(dataBase[0].imwidth===0 && dataBase[0].imheight===0){
                    dataBase[0].imwidth=im.width;
                    dataBase[0].imheight=im.height; 
                   
                }
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);
                da=ctx.getImageData(dataBase[0].xcor,dataBase[0].ycor,dataBase[0].imwidth,dataBase[0].imheight);
                daval=da.data;
                for(rloo=0; rloo<daval.length; rloo+=4){                    
                    rs=rs+daval[rloo];
                }
                for(gloo=0; gloo<daval.length; gloo+=4){                
                    gs=gs+daval[gloo+1];
                    
                }
                
                for(bloo=0; bloo<daval.length; bloo+=4){
                bs=bs+daval[bloo+2];
                }
               for(loo=0; loo<daval.length; loo +=4){
                   if(daval[loo]-rs/daval.length<0){
                   daval[loo]=0;
                   }
                   else{
                   daval[loo]=daval[loo]-rs/daval.length;
                   }
                    if(daval[loo+1]-gs/daval.length<0){
                   daval[loo+1]=0;
                   }
                   else{
                   daval[loo+1]=daval[loo+1]-gs/daval.length; 
                   }
                                 
                if(daval[loo+2]-bs/daval.length<0){
                    daval[loo+2]=0;
                   }
                else{
                   daval[loo+2]=daval[loo+2]-bs/daval.length; 
                   }
                             
                              
               }
                da.data=daval;
                ctx.putImageData(da,dataBase[0].xcor,dataBase[0].ycor);
                
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }


};
this.clustering=function(){
    var ctx,c,cel,im, da,daval,rloo,gloo,bloo,loo,rs=0,gs=0,bs=0,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                if(dataBase[0].imwidth===0 && dataBase[0].imheight===0){
                    dataBase[0].imwidth=im.width;
                    dataBase[0].imheight=im.height; 
                   
                }
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);
                da=ctx.getImageData(dataBase[0].xcor,dataBase[0].ycor,dataBase[0].imwidth,dataBase[0].imheight);
                daval=da.data;
                for(rloo=0; rloo<daval.length; rloo+=4){
                    //if(daval[loo]>rs){
                     //rs=daval[loo];
                    //}
                    rs=rs+daval[rloo];
                }
                for(gloo=0; gloo<daval.length; gloo+=4){
                //if(daval[loo+1]>gs){
                     //gs=daval[loo+1];
                    //}
                    gs=gs+daval[gloo+1];
                    
                }
                
                for(bloo=0; bloo<daval.length; bloo+=4){
                bs=bs+daval[bloo+2];
                }
               for(loo=0; loo<daval.length; loo +=4){
                   if(daval[loo]-rs/daval.length<0){
                   daval[loo]=0;
                   }
                   else{
                   daval[loo]=daval[loo]-rs/daval.length;
                   }
                    if(daval[loo+1]-gs/daval.length<0){
                   daval[loo+1]=0;
                   }
                   else{
                   daval[loo+1]=daval[loo+1]-gs/daval.length; 
                   }
                                 
                if(daval[loo+2]-bs/daval.length<0){
                    daval[loo+2]=0;
                   }
                else{
                   daval[loo+2]=daval[loo+2]-bs/daval.length; 
                   }
                             
                              
               }
                da.data=daval;
                ctx.putImageData(da,dataBase[0].xcor,dataBase[0].ycor);
                
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }

};

this.endMembers=function(){
var x,y;
    


};

this.clipArea=function(){
var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                ctx.globalCompositeOperation="destination-in";
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);                    
                
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }
};
this.backGround=function(){
var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);                    
                
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }
};
    
    
this.eraseArea=function(){
var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);                    
                
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }
};

this.replaceArea=function(){
    var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                ctx.globalCompositeOperation="destination-out";
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);                    
                
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }
};
this.moveWin=function(){
 var ctx,c,cel,im, da,daval,iloo,oloo,loo,elf,nm,rd,gn,bl;
    createHidden();
    elf=document.getElementById("forground");
    c=document.getElementById("canvas");
    nm=elf.options[elf.selectedIndex].text;
    im=document.getElementById("$"+nm);
    if(im){
        if(c){
            cel=document.getElementById(c.value);
            if(cel){
               if(cel.getContext){
               ctx=cel.getContext("2d");
                   if(dataBase[0].imwidth===0 && dataBase[0].imheight===0){
                    dataBase[0].imwidth=cel.getAttribute("width");
                    dataBase[0].imheight=cel.getAttribute("height");                   
                }
                ctx.drawImage(im,dataBase[0].xcor,dataBase[0].ycor);
                da=ctx.getImageData(dataBase[0].xcor,dataBase[0].ycor,dataBase[0].imwidth,dataBase[0].imheight);
                daval=da.data;
                 if((dataBase[0].win>0 && dataBase[0].win<dataBase[0].imwidth) && dataBase[0].win<dataBase[0].imheight){
                     rd=0;
                     gn=0;
                     bl=0;
                 for(loo=0; loo<daval.length; loo+=4){
                     for(oloo=0; oloo<4*dataBase[0].win; oloo+=4){
                     rd=rd+daval[oloo];
                    gn=gn+daval[(oloo+1)]
                    bl=bl+daval[(oloo+2)];
                     }
                    daval[loo]=rd/dataBase[0].win;
                    daval[loo+1]=gn/dataBase[0].win;
                    daval[loo+2]=bl/dataBase[0].win;
                rd=0;
                gn=0;
                bl=0;                
                 }      
                 
                 }
                da.data=daval;
                ctx.putImageData(da,dataBase[0].xcor,dataBase[0].ycor);                    
                
               } 
    
    
            }
    
    }
    document.body.removeChild(im);
    }

};
this.ranSampling=function(){

};
this.sysSampling=function(){
};
this.findDestination=function(n){
var rtn,key,loo,cont,spl=[];
    if(document.getElementById("dataBaseD")){
       dat=document.getElementById("dataBaseD").value;
        try{            
            spl=dat.split(",");            
            if(spl.length===2){
            cont=dataContainer(spl[0],spl[1]);
            
            }
            else if(spl.length===3){                
            cont=dataContainer(spl[0],spl[1],spl[2]);                
                }            
            else if(spl.length===4){ 
               cont=dataContainer(spl[0],spl[1],spl[2],spl[3]);
                }                 
            else if(spl.length===5){
               cont=dataContainer(spl[0],spl[1],spl[2],spl[3],spl[4]);
                }
                            
            else if(spl.length===6){
                cont=dataContainer(spl[0],spl[1],spl[2],spl[3],spl[4],spl[5]);
                }                            
            else if(spl.length===7){
                cont=dataContainer(spl[0],spl[1],spl[2],spl[3],spl[4],spl[6]);
                }
                
            else{
            cont=dataContainer(dat);
            }
        }
        catch(e){
        cont=dataContainer(dat);
        }
       }
      
if(cont!=undefined){
    key=Object.keys(cont);
for(loo=0; loo<key.length; loo+=1){
if(n===key[loo]){
return cont[n];
}

}
if(n==="keys"){
return key;
}
}
}    
//this is part of the big picture of the search and locate 
this.findCurrent=function(n){
var rtn,key,loo,cont,spl=[];
    if(document.getElementById("dataBaseC")){
       dat=document.getElementById("dataBaseC").value;
        try{            
            spl=dat.split(",");
            if(spl.length===2){               
            cont=dataContainer(spl[0],spl[1]);          
            }            
            else if(spl.length===3){
              cont=dataContainer(spl[0],spl[1],spl[2]);
              }           
            else if(spl.length===4){
                cont=dataContainer(spl[0],spl[1],spl[2],spl[3]);
                }
                
            else if(spl.length===5){
                cont=dataContainer(spl[0],spl[1],spl[2],spl[3],spl[4]);
                }                             
            else if(spl.length===6){
                cont=dataContainer(spl[0],spl[1],spl[2],spl[3],spl[4],spl[5]);
                }                
            else if(spl.length===7){
                cont=dataContainer(spl[0],spl[1],spl[2],spl[3],spl[4],spl[6]);
                }
                
            else{
            cont=dataContainer(dat);
            }
        }
        catch(e){
        cont=dataContainer(dat);
        }
       }

if(cont!=undefined){
    key=Object.keys(cont);
for(loo=0; loo<key.length; loo+=1){
if(n===key[loo]){
return cont[n];
}

}
if(n==="keys"){
return key
}
}


};    
this.startPoint=function(xloo,yloo,ind){
    var key=[],elproperty,ar,n=0,m=0,sel,spls=[],sple,slope,dy,dx,loo,elen; 
    if(key.length<1){
    key=findCurrent("keys");
    }
    elen=document.getElementById("endPoint"+ind);
   sple=document.getElementById("tendP");
    sel=document.getElementById("tstartP");    
    if(sel){
       spls=sel.value.split(",");
    if(spls.length>1){
    n=Number(spls[0]);
    m=Number(spls[1]);
    if(n<0){
    n=0;   
    }
    else if(n>CONFIGURE.CONWIDTH){
    n=CONFIGURE.CONWIDTH;
    }
        
        if(m<0){
    m=0;   
    }
    else if(m>CONFIGURE.CONWIDTH){
    m=CONFIGURE.CONWIDTH;
    }
    }
    else{ 
        
    sel.value="lock";
    sple.value="lock";
    spls=currentL;    
    if(spls.length>1){
    n=Number(spls[0]);
    m=Number(spls[1]);
    if(n<0){
    n=0;   
    }
    else if(n>CONFIGURE.CONWIDTH){
    n=CONFIGURE.CONWIDTH;
    }
        
        if(m<0){
    m=0;   
    }
    else if(m>CONFIGURE.CONWIDTH){
    m=CONFIGURE.CONWIDTH;
    }
    }
    
    }
       }    
    
 if(sel.value!="lock" && sple!="lock"){   
ar=endPoint(1);
 }
else{
ar=destinationL;
dy=destinationL[1]-currentL[1];
dx=destinationL[0]-currentL[0];
for(loo=2; loo<10; loo+=1){
if(dy%loo===0 && dx%loo===0){
while(Math.abs(dy)>=loo && Math.abs(dx)>=loo){
if(dy%loo===0 && dx%loo===0){
dy=dy/loo;
dx=dx/loo;
}
else{
break;

}
}

}

}
}
if(!document.getElementById("startPoint")){
cpos=document.createElement("div");
cpos.style.backgroundColor="green";
cpos.setAttribute("id","startPoint");
cpos.style.width="25px";
cpos.style.height="25px";
cpos.style.position="absolute";
cpos.style.left=n+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
cpos.style.top=m+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
cpos.style.borderRadius="25px";
cpos.style.zIndex=10;
document.body.appendChild(cpos);
}
    
else{
    
    
    elproperty=document.getElementById("startPoint");
    elproperty.style.backgroundColor="green";
    
 //this rout will be followed if one or both of the inputs are zero
if(xloo===0 && yloo===0){
    
if(n<ar[0] && m<ar[1]){
    while(xloo<ar[0]-n){
         xloo +=1; 
elproperty.style.left=xloo+n+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";

              
        break;
    }
  while(yloo<ar[1]-m){
 yloo +=1;  
elproperty.style.top=yloo+m+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
     
    break;
}   
    }
else if(n>ar[0] && m>ar[1]){
    while(xloo<n-ar[0]){
         xloo +=1; 
elproperty.style.left= -(xloo)+n+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
              
        break;
    }
   while(yloo<m-ar[1]){
       yloo +=1;
elproperty.style.top= -(yloo)+m+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
        
    break;
} 
    
}
else if(n<ar[0] && m>ar[1]){
     while(xloo<ar[0]-n){
          xloo +=1;
elproperty.style.left=xloo+n+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";              
        break;
    }
  while(yloo<m-ar[1]){
      yloo +=1; 
elproperty.style.top= -(yloo)+m+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
        
    break;
}   
} 
else if(n>ar[0] && m<ar[1]) {
 
 while(xloo<n-ar[0]){
      xloo +=1; 
elproperty.style.left= -xloo+n+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
       
               
        break;
    }
 while(yloo<ar[1]-m){
    yloo +=1;
elproperty.style.top=yloo+m+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
     
    break;
} 
 }
else if(n===ar[0] && m<ar[1]){
 while(yloo<ar[1]-m){
    yloo +=1;
elproperty.style.left=xloo+n+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
elproperty.style.top=yloo+m+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
       
    break;
}

}
else if(n===ar[0] && m>ar[1]){
  while(yloo<m-ar[1]){
      yloo +=1;
elproperty.style.left=xloo+n+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
elproperty.style.top= -(yloo)+m+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
        
    break;
}  

}
else if(n<ar[0] && m===ar[1]){
while(xloo<ar[0]-n){
 xloo +=1; 
elproperty.style.left=xloo+n+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
elproperty.style.top=yloo+m+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
              
        break;
    }
} 
    
else if(n>ar[0] && m===ar[1]){

while(xloo<n-ar[0]){
 xloo +=1; 
elproperty.style.left= -(xloo)+n+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
elproperty.style.top=yloo+m+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
              
        break;
    }
}   
}
else if(xloo!=0 || yloo!=0){
 if(xloo!=destinationL[0] && yloo!=destinationL[1]){//elproperty.style.left!=elen.style.left && elproperty.style.top!=elen.style.top){   
elproperty.style.left=xloo+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
elproperty.style.top=yloo+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
    if(dy>0 && dx>0){
        xloo +=dx;
        yloo +=dy;
        elproperty.style.left=xloo+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
        elproperty.style.top=yloo+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
    }
    else if(dy<0 && dx<0){
         xloo -=Math.abs(dx);
        yloo -=Math.abs(dy);
        elproperty.style.left=xloo+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
        elproperty.style.top=yloo+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
    }
    else if(dy<0 && dx>0){
         xloo +=dx;
        yloo -=Math.abs(dy);
        elproperty.style.left=xloo+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
        elproperty.style.top=yloo+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
    }
    else if(dy>0 && dx<0){
         xloo -=Math.abs(dx);
        yloo +=dy;
        elproperty.style.left=xloo+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
        elproperty.style.top=yloo+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
    
    }
    else if(dy===0 && dx>0){
        if(xloo<destinationL[0]){
        xloo +=10;
        }
        else{
        xloo=destinationL[0];
        yloo=destinationL[1];
        }
        yloo +=dy;
        elproperty.style.left=xloo+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
        elproperty.style.top=yloo+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
    
    }
    else if(dy===0 && dx<0){
        if(xloo<destinationL[0]){
        xloo -=1;
        }
        else{
        xloo=destinationL[0];
        yloo=destinationL[1];
        }       
        yloo +=dy;
        elproperty.style.left=xloo+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
        elproperty.style.top=yloo+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
    
    }
      else if(dy>0 && dx===0){
        xloo +=dx;
        if(yloo<destinationL[1]){
        yloo +=1;
        }
        else{
            xloo=destinationL[0];
            yloo=destinationL[1];
          }
        elproperty.style.left=xloo+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
        elproperty.style.top=yloo+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
    
    }
     else if(dy<0 && dx===0){
        xloo +=dx;
         if(yloo>destinationL[1]){
        yloo -=1;
        }
        else{
            xloo=destinationL[0];
            yloo=destinationL[1];
          }
        yloo -=1;
        elproperty.style.left=xloo+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
        elproperty.style.top=yloo+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
    
    }
     
}
else if(ind<key.length){
    currentL=destinationL;    
    elproperty.style.left=currentL[0]+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
    elproperty.style.top=currentL[1]+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
    ind +=1;
    if(ind<key.length){
    destinationL=findDestination(key[ind]);     
    }
    
}
}
    
    //this is for the else on the top
}    

setTimeout("startPoint("+xloo+","+yloo+","+ind+")",100); //this time (100)will be replaced by a cars miles read divided by the speedometer and direction which is the magnet direction

};
    
    
this.endPoint=function(id){
    if(document.getElementById("getData").value==="mapping"){
    var ar,x=200,y=200,eel,sple=[],spl;
    eel=document.getElementById("tendP");
     if(eel){
         
     sple=eel.value.split(",");
         
    if(sple.length>1){
    x=Number(sple[0]);
    y=Number(sple[1]);
    if(x<0){
    x=0;   
    }
    else if(x>CONFIGURE.CONWIDTH){
    x=CONFIGURE.CONWIDTH;
    }
        
    if(y<0){
    y=0;   
    }
    else if(y>CONFIGURE.CONWIDTH){
    y=CONFIGURE.CONWIDTH;
    }
    }
    else{
    sple=destinationL;   
    if(sple.length>1){
    x=Number(sple[0]);
    y=Number(sple[1]);
    if(x<0){
    x=0;   
    }
    else if(x>CONFIGURE.CONWIDTH){
    x=CONFIGURE.CONWIDTH;
    }
        
    if(y<0){
    y=0;   
    }
    else if(y>CONFIGURE.CONWIDTH){
    y=CONFIGURE.CONWIDTH;
    }
    }
    }     
     }
if(!document.getElementById("endPoint"+id)){
    
cpos=document.createElement("div");
cpos.style.backgroundColor="red";
cpos.id="endPoint"+id;
cpos.style.width="10px";
cpos.style.height="10px";
cpos.style.position="absolute";
cpos.style.left=x+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
cpos.style.top=y+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
cpos.style.borderRadius="10px";
cpos.style.zIndex=10;
document.body.appendChild(cpos);

}
    else{
    document.body.removeChild(document.getElementById("endPoint"+id));
    cpos=document.createElement("div");
    cpos.style.backgroundColor="red";
    cpos.id="endPoint"+id;
    cpos.style.width="10px";
    cpos.style.height="10px";
    cpos.style.position="absolute";
    cpos.style.left=x+CONFIGURE.BUTWIDTH+3*CONFIGURE.BORDER+"px";
    cpos.style.top=y+CONFIGURE.SELHEIGHT+3*CONFIGURE.BORDER+"px";
    cpos.style.borderRadius="10px";
    cpos.style.zIndex=10;
    document.body.appendChild(cpos);

    }
ar=[x,y];
return ar;
    }
    else{
    
    }
};    

    
    
this.trPassValue=function(event){
    var ck,dk,sta,el,getV,senV,sel,tar,alp,dn,win,loo,key,can,canV,con,ctx;
    el=document.getElementById("selecttopright"); 
    el.style.backgroundColor="white"
    tar=event.target;
    getV=tar.value;
    try{
    if(el){
        if(getV==="search"){
        el.value=document.getElementById("Dkeyword").value;
        }
        else{
    el.value=getV;
        }
    }
        
    if(getV==="search"){ 
         if(document.getElementById("getData").value==="mapping" ||document.getElementById("getData").value==="meshNet"){
             document.getElementById("getData").style.backgroundColor=CONFIGURE.BACKGROUND;
        can=document.getElementById("canvas");
        sta=document.getElementById("startnow");
        sta.style.display="none";
        currentL=findCurrent(document.getElementById("Ckeyword").value);
        destinationL=findDestination(document.getElementById("Dkeyword").value);
        if(can){
        canV=can.value;
        con=document.getElementById(canV);
        if(con.getContext){
        ctx=con.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle="blue";
        ctx.strokeStyle="blue";
        ctx.moveTo(currentL[0],currentL[1]);        
        if(currentL.length>1 && destinationL.length>1){
           // destinationL=currentL;
           // endPoint(-1);
            //loop here until you find the far end of the destination
        key=findDestination("keys");
        destinationL[2]=key.length-1;
          for(loo=0; loo<key.length; loo+=1){ 
            ctx.strokeStyle=importColor(loo);
            destinationL=findDestination(key[loo]);
              if(loo===0){
              ctx.moveTo(destinationL[0],destinationL[1]);
              }
              else{
            ctx.lineTo(destinationL[0],destinationL[1])
              }
            ctx.closePath();
            ctx.stroke();
              if(document.getElementById("getData").value!="meshNet"){
                ctx.beginPath();
                ctx.moveTo(destinationL[0],destinationL[1]);
              }
            endPoint(loo); 
            
          }
        }
        }        
        }
        
        
    sta.style.display="inline-block";//bring to life the start button        
    el.style.backgroundColor="green";
         }
    else{
    document.getElementById("getData").style.backgroundColor="red";
    
    }
    }
        
    else if(getV==="START"){
   
    startPoint(currentL[0],currentL[1],0);
    
    
    }
    else if(getV.id==="sresult"){    
        
        document.getElementById("Ckeyword").value="ambes";//ck.options[ck.selectedIndex].text;
        document.getElementById("toprightMenu").removeChild(document.getElementById("sresult"));
        
    
    }
    if(getV==="R<>B"){
        dataBase[0].yaxis="r"; 
        dataBase[0].xaxis="b"; 
    el.style.backgroundColor="green";
        
    }
    else if(getV==="R<>G"){
        dataBase[0].yaxis="r"; 
        dataBase[0].xaxis="g";
    el.style.backgroundColor="green";
    }
    else if(getV==="N<256"){        
        dn=Number(document.getElementById("dnValue").value)
       
        dataBase[0].DN=(dn<256 && dn>0)?dn:0; 
        el.value=dataBase[0].DN;
    el.style.backgroundColor="green";
    }
     else if(getV==="G<>B"){
        dataBase[0].yaxis="g"; 
        dataBase[0].xaxis="b";
    el.style.backgroundColor="green";
    }
     else if(getV==="[Win]"){
        win=Number(document.getElementById("winValue").value);
        dataBase[0].win=(win>0)?win:3;
        el.value=dataBase[0].win;
        el.style.backgroundColor="green";
         
    }
        
        
    else if(getV==="STA"){
       startPoint(0,0,0);
    }
     else if(getV==="END"){
       endPoint();
    }   
      else if(getV==="1<T>0"){
          alp=Number(document.getElementById("alphainput").value);
          
          dataBase[0].zaxis=(alp>=0 && alp<=1)?alp:0.2;
          el.value=dataBase[0].zaxis;
          el.style.backgroundColor="green";
    } 
   
    }
    catch(e){
    el.style.backgroundColor="red";
    }
if( el.style.backgroundColor!="white"){ 
setTimeout("trPassValue()",5000);
}
};
this.originOf=function(event){
    if(document.getElementById("selecttopright").value==="[x,y]" && dataBase[0].xcor===0){
    dataBase[0].xcor=event.pageX-CONFIGURE.BUTWIDTH+CONFIGURE.BORDER;
    dataBase[0].ycor=event.pageY-CONFIGURE.SELHEIGHT+CONFIGURE.BORDER;    
    }


};

return that;
}());
