var today=new Date();
var total=0
$("#btn").click(function () {
    var option=$("#choose").val();
    var acc=$("#accno").val();
    var name=$("#accname").val(); 
   var cr=$("#crn").val();
  
    $("#ans").text(" Account number :" +acc) 

    $("#ans1").text(" Account holder name : " +name)
   
    $("#ans2").text(" Crn number : " +cr)
   
  
    if(option==1){
        if(acc!="" && name!=""){
            var npat=/^[0-9]+$/;
            var npat1=/^[0-9]{10}$/;
          
            var dcp=$("#dcp").val();
          
            var count=($("#amount").val());
            var ok=count.search(npat);
            var ok1=acc.search(npat1); 
           
                     
            if(ok1){
                alert("Enter the 10 digit valid account number")
            }
            else{
                if(dcp=="")
                    alert("Enter the description of deposit")
                else{
                    var amount=Number(count);
                    if(ok)
                        alert("Enter valid amount");
                    else{
                        if(amount>=0 && amount <100){
                            alert("Please Enter the minimum amount of 100")
                        }
                       
                            else{
                            $("#res1").append("<h6><div class="+"row"+"><div class="+"col-4"+">"+today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+"</div><div class="+"col-4"+">"+dcp+"</div><div class="+"col-4"+">"+amount+"</div></h6>");
                            total+=amount;
                            $("#balance").text("+"+total);
                            $("#dep").text("+"+amount);
                        }
                    }
                }
            }
        }
        else{
            alert("Enter the account number and name");
        }

    }
    else if(option==2){
        if(acc!="" && name!=""){
            var npat=/^[0-9]+$/;
            var npat1=/^[0-9]{10}$/;
            var dcp=$("#dcp").val();
            var count=($("#amount").val());
            var ok=count.search(npat);
            var ok1=acc.search(npat1);            
            if(ok1){
                alert("Enter the 10 digit valid account number")
            }
            else{
                if(dcp=="")
                    alert("Enter the description of withdrawal")
                else{
                    var amount=Number(count);
                    if(ok)
                        alert("Enter valid amount");
                    else{
                        if(amount>=0 && amount <100){
                            alert("Please Enter the minimum amount of 100")
                        }
                        else{
                            total-=amount;
                            if(total<0){
                                alert("account balance is zero cannot be withdrawned");
                                total=0;
                            }
                            else{
                                $("#res2").append("<h6><div class="+"row"+"><div class="+"col-4"+">"+today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+"</div><div class="+"col-4"+">"+dcp+"</div><div class="+"col-4"+">"+amount+"</div></h6>");
                            }
                            $("#balance").text("+"+total);
                            $("#with").text("+"+amount);
                        }
                    }
                }
            }
        }
    }
    else
        alert("Please choose the deposit or withdraw");
});