var url='https://makeup-api.herokuapp.com/api/v1/products.json';
  //console.log(url);
  var bg=document.createElement('div');      
  bg.setAttribute('class','cc'); 
  var container=document.createElement('div');      
  container.setAttribute('class','container'); 
  
  
  var h=document.createElement('h1');
  h.innerHTML="Make Up";
  
  var row=document.createElement('row');
  row.setAttribute('class','row');
  
  fetch(url, {
      method: "GET"
      })
      .then((data) => data.json())
      .then((res) => {

          console.log(res)  
      for(var i=100;i<=150;i++){
     var col1=document.createElement('div');
      col1.setAttribute('class','col-lg-3 col-md-3 col-sm-3');
      var div1=document.createElement('div'); 
      div1.setAttribute('class','center-info text-center');
        var div2=document.createElement('div');
        div2.setAttribute('class','title');
  
  var nam=document.createElement('p');
  nam.setAttribute('class','name');
  nam.innerHTML=res[i].name;

  var img=document.createElement('img');
  img.src=res[i].image_link;
  
  var div3=document.createElement('div');
  div3.setAttribute('class','text') ;

  // var dt=document.createElement('p');
  // dt.setAttribute('class','date');
  // dt.innerHTML="ID"+" "+res[i].id;

  var price=document.createElement('h2');
  price.setAttribute('class','price');
  price.innerHTML=res[i].price_sign+" "+res[i].price;
  
  // var sm=document.createElement('p');
  // sm.setAttribute('class','summary');
  
  // sm.innerHTML="Summary:"+res[i].description;
  
  
  var a=document.createElement('a');
  a.setAttribute('href',res[i].url);
  a.innerHTML="Wanna see more ?!";
  
  div2.append(img,nam);
  div3.append(price);
  div1.append(div2,div3,a);
       col1.append(div1);
       row.append(col1); 
      container.append(h,row);
      document.body.append(bg,container);
      }
      
   }).catch((err)=>{
          console.log(error);
   
  });
