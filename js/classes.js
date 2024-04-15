// class declaration
class bikeParking {
   constructor(details,custom){
     this.detail = details;
     this.custom = custom;
   }

displayParkingDetails(){
//     console.log(this.detail);
// this.custom.map((e)=>{
//     console.log(e.bikeNo)
// })
let  bookedSlot = 0;
customers.map((e)=>{
    // bookedSlot +=1;
    if(this.detail.no_of_slots == bookedSlot){
        console.log("slots engaged == " + e.bikeNo)
    }
    else{
      slotAllLocatedUsers.push(e);
      console.log("slot ticket confirmed ")
      bookedSlot += 1;
    }
})
};

getReport(){
    console.log(slotAllLocatedUsers);
}

}

// parking details
const parkingDetails = {
   no_of_slots:2,
   price:30,
};
let customers = [
    {
        bikeNo:"TN 30 CW 6925",
        bike:"NS",
    },
    {
        bikeNo:"TN 31 CW 6925",
        bike:"R15",  
    },
    {
        bikeNo:"TN 32 CW 6925",
        bike:"GT",  
    },
    {
        bikeNo:"TN 33 CW 6925",
        bike:"NS",  
    },
];

let slotAllLocatedUsers = [];

// class invok
const bike = new bikeParking(parkingDetails,customers)
bike.displayParkingDetails()
bike.getReport()


// requirements

// yawa mall bike parking system 
 // DEVELOPERS NEED
 // 1. should be know space details for bike parking in mall
 // 2. no_of_slots 
 // 3. price