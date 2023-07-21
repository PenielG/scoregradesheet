function scoreSheet(score, id2Display){
    var grade=""
     if(score < 0){
         grade ='Not available'
     }else if(score > 100){
         grade ='Not available'
     }else if(score >= 70 && score <= 100 ){
        grade='A';
     }else if(score >= 60 && score < 70 ){
        grade='B';
     }else if(score >= 50 && score < 60){
        grade='C';
     }else if(score >= 45 && score < 50){
        grade='D';
     }else if(score >= 40 && score < 45){
     	grade= 'E';
     }else{
     	grade='F';
     }
    document.getElementById(id2Display).innerHTML=grade;
}
 

  function total() {

  	var gradey=document.getElementsByTagName('input');

  	var sum=0;

    for(var i=0; i < gradey.length; i++){
    	// sum += parseFloat(gradey[i].value);
	   sum= sum + parseFloat(gradey[i].value);
	 }
     document.getElementById('tot').innerHTML=sum;

     if(sum < 0){
         document.getElementById('tot').innerHTML='INVALID'
     }else if(sum > 500){
     	document.getElementById('tot').innerHTML='INVALID'
      }

     var averageScore=sum/5;
     document.getElementById('aver').innerHTML=averageScore;

     if(averageScore > 100 ){
        document.getElementById('aver').innerHTML='INVALID'
     }
    
    var remark="";

    if(averageScore < 0){
      remark='INVALID'
    }else if(averageScore >=50 && averageScore < 100){
      remark='Congratulations! You Passed'
    }else if(averageScore < 50){
    		remark ='Sorry! You need to rewrite exam'
    }else{
    	remark='INVALID'
    }

    document.getElementById('rem').innerHTML=remark;


                          
     if(averageScore < 0){
      document.getElementById('img1').src="";
     }else if(averageScore  <= 50){
      document.getElementById('img1').src='emoji_failed.png'
     }else if(averageScore > 50 && averageScore <= 100){
     document.getElementById('img1').src='emoji_passed.png' 
     }else{
     document.getElementById('img1').src="";
     }
                          
                               

     }



