//creating a function that sets up the interest boxes, photos, and more
const interestBox = () => 
{
    let wrapperRef = $('.wrapper');
    interests.forEach((interest)=>
        {
            //this i used to link the photos to the correct box
        let boxMarkup= ` <div class="box">
         <img class="interest_pic" src="./images/${interest.activity.toLowerCase()}.png" />
        <p class="activity"></p>
      </div>`;
      wrapperRef.append(boxMarkup);
    }
    );
}

const showInformation = () =>
{
    //this is calling the interest cards
interestBox();
//this is setting up data using JSON and the funtion interestsInfo
jQuery.each($(".box"),interestsInfo );
//this is the event handler that sets up the click function
$(".box").on("click", function () 
    {
        let indexInterest = $(".box").index(this);
        //usinf jQuery to find the paragraph of why i like my interests
        $(this).find("p.activity").text(interests[indexInterest].why );
        //this makes it where it changes the backgtroud to pink when you click the box
        $(this).css("background-color","pink");
    });
    //this event handler is when you move over the box it shows the types of interests
    $(".box").on("mouseover", function () {
        let indexInterest = $(".box").index(this);
         //this finds the paragraph in the array thats labeled type=
        $(this).find("p.activity").text(interests[indexInterest].type );
    });
    // this event handler is when you move away from the vox and it goes back to the interests name
    $(".box").on("mouseout", function () {
        let indexInterest = $(".box").index(this);
    
        //this finds the paragraph in the array thats labeled activities
        $(this).find("p.activity").text(interests[indexInterest].activity);
        //this makes it where, when you move off of the box, it goes back to the green color it originally had
        $(this).css("background-color","rgb(39, 150, 122)");
        
      });
};

const interestsInfo = (index) => {
    console.log(interests[index].activity);
    $(".activity").eq(index).text(interests[index].activity);
};
// this runs the code 
$(document).ready(showInformation);
