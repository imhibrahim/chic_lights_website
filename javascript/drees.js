let lightarray = [


    {
        id: 1,
        title: "Dreeser with Drawer",
        imgsrc: "dresser/dress1.webp",
        desc: "$350",
        fulldesc: "Dresser Unit-HR105"
    },
    {
        id: 2,
        title: "Dreeser Drawer 40x160m",
        imgsrc: "dresser/dress2.webp",
        desc: "$350",
        fulldesc: "Drawer 40x160m -Wod73"
    }, {
        id: 3,
        title: "Dresser With Chair & Mirror ",
        imgsrc: "dresser/dress3.webp",
        desc: "$350",
        fulldesc: "Chair & Mirror Mod-85"
    }, {
        id: 4,
        title: "Dresser Drawer LEmod",
        imgsrc: "dresser/dress4.webp",
        desc: "$350",
        fulldesc: "Dresser FNH-353 "
    },



    {
        id: 5,
        title: "Dresser with Mirror",
        imgsrc: "dresser/dress5.webp",
        desc: "$350",
        fulldesc: "Mirror & Chair  SHR-113"
    },
    {
        id: 6,
        title: "Dresser 40x80cm ",
        imgsrc: "dresser/dress6.webp",
        desc: "$350",
        fulldesc: "FNH-345 LB TOP 10"
    }, {
        id: 7,
        title: "Dimond Dresser",
        imgsrc: "dresser/dress7.webp",
        desc: "$350",
        fulldesc: "Natural Pink-white - lg-99"
    }, {
        id: 8,
        title: "Dresser Fancy",
        imgsrc: "dresser/dress8.webp",
        desc: "$350",
        fulldesc: "Dresser with Pouf op-18"
    },



    {
        id: 9,
        title: "Weading dresser",
        imgsrc: "dresser/dress9.webp",
        desc: "$350",
        fulldesc: "Round Mirror with Chair"
    },
    {
        id: 10,
        title: "3 piece Gold",
        imgsrc: "dresser/dress10.webp",
        desc: "$350",
        fulldesc: "Golden Light MOD-897"
    }, {
        id: 11,
        title: "3 peice Black",
        imgsrc: "dresser/dress11.webp",
        desc: "$350",
        fulldesc: "Black in White Mood-878"
    }, {
        id: 12,
        title: "Princess Dresser",
        imgsrc: "dresser/dress12.webp",
        desc: "$350",
        fulldesc: "Transparent Princess Sweet pink-2989"
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