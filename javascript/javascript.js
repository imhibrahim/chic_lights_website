  let lightarray = [{
          id: 1,
          title: "Chic Lamp",
          imgsrc: "pic/g-1.webp",
          desc: "$350",
          fulldesc: "this is classic information for Bright Lamp awesome pic dear .. I like it"
      },

      {
          id: 2,
          title: " BrightLamp",
          imgsrc: "pic/g-2.webp",
          desc: "$350",
          fulldesc: "this is classic information for Bright Lamp awesome pic dear .. I like it"
      },

      {
          id: 3,
          title: "Home Light",
          imgsrc: "pic/g-3.webp",
          desc: "$350",
          fulldesc: "this is classic information for Bright Lamp awesome pic dear .. I like it"
      },

      {
          id: 4,
          title: "Chic Lamp",
          imgsrc: "pic/g-4.webp",
          desc: "$350",
          fulldesc: "this is classic information for Bright Lamp awesome pic dear .. I like it"
      },
      {
          id: 5,
          title: "Chic Lamp",
          imgsrc: "pic/g-5.webp",
          desc: "$350",
          fulldesc: "this is classic information for Bright Lamp awesome pic dear .. I like it"
      },
      {
          id: 6,
          title: "Chic Lamp",
          imgsrc: "pic/g-1.webp",
          desc: "$350",
          fulldesc: "this is classic information for Bright Lamp awesome pic dear .. I like it"
      },
      {
          id: 7,
          title: "Chic Lamp",
          imgsrc: "pic/g-7.jpg ",
          desc: "$350",
          fulldesc: "this is classic information for Bright Lamp awesome pic dear .. I like it"
      },
      {
          id: 8,
          title: "Chic Lamp",
          imgsrc: "pic/g-8.jpg ",
          desc: "$350",
          fulldesc: "this is classic information for Bright Lamp awesome pic dear .. I like it"
      },
      {
          id: 9,
          title: "Chic Lamp",
          imgsrc: "pic/g-9.jpg",
          desc: "$350",
          fulldesc: ". this is classic information for Bright Lamp awesome pic dear .. I like it"
      },


  ]


  function lightgallery() {

      for (var i = 0; i < lightarray.length; i++) {

          document.getElementById("light").innerHTML += `
        <div class="col-md-4 mt-5">
        <div class="card text-center p-2 style=border-radius:15px;">
        <img src="${lightarray[i].imgsrc}" class="card-img-top gal img-thumbnail  " width="100% " height="280px"/>
        <div class="card-body text-center">
        
        <h3 class="mt-3 text-center text-capitalize fst-italic">${lightarray[i].title}</h3>
    </div>
        <p class="text-center text-success">${lightarray[i].desc}</p>
        <div class="d-flex justify-content-between ">
        <button class="btn btn-outline-dark btn-sm  text-center" onclick="addtocart(${lightarray[i].id})" >Add to Cart</button>
        <div>
         <span class=" btn btn-outline-primary btn-sm ">More Info</span>
        </div>
        </div>
        </div>
        
        </div>
        </div>
        `
      }



  }

  let cardarray = []

  function addtocart(id) {
      var obj = "";
      for (var i = 0; i < lightarray.length; i++) {
          if (id == lightarray[i].id) {
              obj = { id: i, imgsrc: lightarray[i].imgsrc, desc: lightarray[i].desc, fulldesc: lightarray[i].fulldesc, title: lightarray[i].title, price: lightarray[i].price }

              cardarray.push(obj);
          }
      }

      if (localStorage.getItem('cardarray') == null) {
          localStorage.setItem('cardarray', "");

          localStorage.setItem('cardarray', JSON.stringify(cardarray));

      } else {
          localStorage.setItem('cardarray', JSON.stringify(cardarray));
      }

      console.log(cardarray);

  }




  function showaddtocard() {

      $data = localStorage.getItem('cardarray');

      $data = JSON.parse($data);

      for (var i = 0; i < $data.length; i++) {

          document.getElementById('addtocardid').innerHTML += `
        
        <div class='col-md-12'>
        <div class='row'>
        <div class="col-md-1"></div>
     
        <div class='col-md-10 mt-3'>


        <table style="width:100%" border=1 cellpadding=10 class="text-center">
        
        <tr style=" border: 1px solid black;">
        <th  style=" border: 1px solid black;">Product</th>
        <th  style=" border: 1px solid black;">Price</th>
        <th  style=" border: 1px solid black;">Name</th>
        <th  style=" border: 1px solid black;">dec</th>
        <th  style=" border: 1px solid black;">Remove</th>
      </tr>
      <tr style=" border: 1px solid black;">
          <td style=" border: 1px solid black;"><img src="${$data[i].imgsrc}" width="100%" height="100"/></td>
           <td style=" border: 1px solid black;">${$data[i].desc}</td>
           <td style=" border: 1px solid black;">${$data[i].title}</td>
         <td style=" border: 1px solid black;">${$data[i].fulldesc}</td>
         <td style=" border: 1px solid black;"><p class=" btn btn-danger  btn-close" data-bs-dismiss="toast" aria-label="Close" onclick="removecart(${$data[i].id})" >X</p></td>
      </tr>
      </table>

     
        
       
        
     
        </div>
        <div class="col-md-1"></div>
         <div class=" modal-footer text-center">
                              
                                <button type="button" class="btn btn-secondary">Order Now</button>
                            </div>
        </div>
        </div>
        `;
      }

  }


  function removecart(id) {

      console.log(id);

      $data = localStorage.getItem('cardarray');

      $data = JSON.parse($data);

      $data.id = null;
      console.log($data.id);

      $card = JSON.stringify($data);
      localStorage.setItem('cardarray', $card);


      document.getElementById('addtocardid').innerHTML = "";

      showaddtocard();

  }

  showaddtocard();









  // function cardinsetinstorage() {

  //     let newcardarray = JSON.stringify(cardarray);
  //     localStorage.setItem("mycard", newcardarray);
  // }