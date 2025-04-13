const interestBox = () => 
{
    let wrapperRef = $('.wrapper');
    interests.forEach((interest)=>
        {
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
interestBox();
jQuery.each($(".box"),interestsInfo );
$(".box").on("click", function () 
    {
        let indexInterest = $(".box").index(this);
        $(this).find("p.activity").text(interests[indexInterest].why );
        $(this).css("background-color","pink");
    });
    $(".box").on("mouseover", function () {
        let indexInterest = $(".box").index(this);
        $(this).find("p.activity").text(interests[indexInterest].type );
    });
    $(".box").on("mouseout", function () {
        let indexInterest = $(".box").index(this);
    
        $(this).find("p.activity").text(interests[indexInterest].activity);
        $(this).css("background-color","rgb(39, 150, 122)");
        
      });
};
const interestsInfo = (index) => {
    console.log(interests[index].activity);
    $(".activity").eq(index).text(interests[index].activity);
};
$(document).ready(showInformation);