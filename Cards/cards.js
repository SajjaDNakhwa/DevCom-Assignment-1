function guess()
{
    var values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    var suits = ["Diamonds","Hearts","Spades","Clubs"];
    var get_value = values[Math.floor(Math.random()*values.length)];
    var get_suits = suits[Math.floor(Math.random()*suits.length)];
    alert("It's the " + get_value + " of " + get_suits + " ! Did you get it right?");
}