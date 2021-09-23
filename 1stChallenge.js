
// ex-1
console.log("hello");
// ex-2
const ip=require('readline-sync');
var input=ip.question("what is your name? ");
console.log(input);
// ex-3 ,4
var str="welcome";
console.log(str+" "+input);
// ex-5,6
var age=ip.question("Is your age greater than 25? ");
var score=0;
if(age=="yes"){
    console.log("right");
    score+=1;
}
else{
    console.log("wrong");
    score-=1;
}
console.log("your score is "+score);
// ex-7
function add(a,b){
    var c=a+b;
    return c;
}
var result=add(3,3);
console.log("the result of add function is "+result);
// ex-8
var question="what comes after saturday in a week? ";
var answer="sunday";
score=0;
function quizz(ques,ans)
{
    var ans=ip.question(question);
   if(ans=="sunday")
   {
       console.log("you are right!");
       score++;
   }
   else {
       console.log("you are wrong ");
       score--;
   }
   console.log("your score is "+score);
}
quizz(question,answer);
// ex-9
for(var i=0;i<5;i++)
{
    console.log("pallavi");
}
// ex-10,11
var arr=["milk","boost","horlicks","chocos","buiskets","mango"];
console.log("the array is : "+arr);
console.log("1st item "+arr[0]);
console.log("3rd item "+arr[2]);
console.log("last item "+arr[arr.length-1]);
for(var i=0;i<arr.length-1;i++)
{
    console.log("item at "+i+" is "+arr[i]);
}
//ex-12
var wonderwomen={
    name : "pallavi",
    age : 22,
    weight : 51,
    skills : "art and craft"
};
var spiderman={
    name : "sunil",
    age : 22,
    weight : 82,
    skills : "coding"
};
console.log(wonderwomen.age);
console.log(spiderman.skills);

// ex-13
var q1={
    question : "what comes after june? ",
    answer : "july"
}
var q2={
    question : "what comes after may? ",
    answer : "june"
}
// ex-14
function quizz(ques,ans)
{
    var ans1=ip.question(ques);
    if(ans1==ans)
    {
        console.log("you are right!! ");
        score++;
    }
    else{
        console.log("you are wrong");
        score--;
    }
    console.log("your score is "+score);
}
var questionlist = [q1,q2];
score=0;
for(var i=0;i<questionlist.length;i++){
    quizz(questionlist[i].question,questionlist[i].answer);
}
console.log("your final score is : "+score);







