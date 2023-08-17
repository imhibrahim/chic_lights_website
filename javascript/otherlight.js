let lightarray = [


    {
        id: 1,
        title: "Kitchen Lamp",
        imgsrc: "lig/l1.webp",
        desc: "$350",
        fulldesc: "Natural  wood SHR-309"
    },
    {
        id: 2,
        title: "Bedroom",
        imgsrc: "lig/l2.webp",
        desc: "$350",
        fulldesc: " multiple colors - KM119"
    }, {
        id: 3,
        title: "Drawningroom",
        imgsrc: "lig/l3.webp",
        desc: "$350",
        fulldesc: "pieces - SH305"
    }, {
        id: 4,
        title: "TV Loungh",
        imgsrc: "lig/l4.webp",
        desc: "$350",
        fulldesc: " 3 Pieces - SFB50"
    },



    {
        id: 5,
        title: "Triple Faunus",
        imgsrc: "lig/l5.webp",
        desc: "$350",
        fulldesc: "Set - 3 Pieces - SFB55"
    },
    {
        id: 6,
        title: "Double Faunus",
        imgsrc: "lig/l6.webp",
        desc: "$350",
        fulldesc: "Natural Set - 3 Pieces - SFB55"
    }, {
        id: 7,
        title: " Wooden Lamp",
        imgsrc: "lig/l7.webp",
        desc: "$350",
        fulldesc: "Natural beech wood sofa set - lg-99"
    }, {
        id: 8,
        title: "Three Lamp",
        imgsrc: "lig/l8.webp",
        desc: "$350",
        fulldesc: "Natural beech wood sofa set - op-18"
    },



    {
        id: 9,
        title: "Nursery",
        imgsrc: "lig/l9.webp",
        desc: "$350",
        fulldesc: "FB-90875-UIUX"
    },
    {
        id: 10,
        title: "Three piece ",
        imgsrc: "lig/l10.webp",
        desc: "$350",
        fulldesc: "WOUNDER-OP-1051"
    }, {
        id: 11,
        title: "Up to Down",
        imgsrc: "lig/l11.webp",
        desc: "$350",
        fulldesc: "Natural TR-3012"
    }, {
        id: 12,
        title: "Dresser Lamp",
        imgsrc: "lig/l12.webp",
        desc: "$350",
        fulldesc: "Transparent op-10459"
    },





]



function lightgallery() {

    for (var i = 0; i < lightarray.length; i++) {

        document.getElementById("light").innerHTML += `
        <div class="col-md-3 mt-5 outline">
        <div class=" text-center p-2 style=border-radius:15px;">
        <img src="${lightarray[i].imgsrc}" class="hov " width="100% " />
        <div class="card-body text-center">
        
        <h3 class="mt-3 text-center text-capitalize fst-italic">${lightarray[i].title}</h3>
    </div>
        <p class="text-center text-success"><strike class=" text-danger">$500</strike>  ${lightarray[i].desc}</p>
        <p class="text-center text-muted">${lightarray[i].fulldesc}</p>
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
       <td style=" border: 1px solid black;"><p class=" btn btn-danger" onclick="removecart(${$data[i].id})" >X</p></td>
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