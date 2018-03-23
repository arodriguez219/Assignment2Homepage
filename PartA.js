//Declares variables for mouse clicks
var Clicks = 0;
//Declares initial y1 value
var y1 = 10;
//Declares initial y2 value
var y2 = 50;

//Function to establish the initial canvas
function setup(){
  //Creates the initial canvas with specified dimensions
  createCanvas(720, 400);
  //Sets the background to the color black
  background(0);
  //Leaves jagged edges for shapes
  noSmooth();
}

//Function to perform an action when any key is pressed
function keyPressed(){
  //Clears the screen overall
  clear();
  //Runs the function to re-establish the initial canvas
  setup();
  //Re-initializes the click variable to zero (0)
  Clicks = 0;
  //Re-initializes the initial y1 value
  y1 = 10;
  //Re-initializes the initial y2 value
  y2 = 50;
  //Prevents the initializing of the script
  return false;
}

//The post check loop that keeps everything running until a key is pressed
do{
    //Initiates the function that converts mouse clicks into a number
    function mouseClicked(){
      //Increments the number of clicks (Clicks++ --> Clicks = Clicks + 1)
      Clicks++;

      //Initiates the for loop that drives the whole tally system
      for(let i = 1; i <= Clicks; i++){
        //The if statement that adds a vertical tally
        if((i%5) != 0 && i <= 60){
          //Sets the line color
          stroke(126);
          //Sets the thickness of the line
          strokeWeight(3);
          //Establishes the vertical line for the tally
          line(12*(i-1),y1,12*(i-1),y2);
        }
        //The if statement that adds a diagonal tally
        else if((i%5) == 0 && i <= 60){
          //Sets the line color
          stroke(126);
          //Sets the thickness of the line
          strokeWeight(3);
          //Establishes the diagonal line for the tally
          line(12*(i-5),y2,12*(i-1),y1);
        }
        //The if statement that initiates a new row of tallies
        else if(i > 60){
          //Reinitializes the i variable
          i = 0;
          //Re-initializes the click variable to zero (0)
          Clicks = 0;
          //Increments the y1 value by fifty (50)
          y1 = y1 + 50;
          //Increments the y2 value by fifty (50)
          y2 = y2 + 50;
        }
      }
    }
}while(keyPressed() == false)
