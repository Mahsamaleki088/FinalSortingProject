
    (function() {
        const arraylist=[4,5,22,42,15,23,43,13,1,8];
        const insertionSortBtn=document.getElementById("insertionSortBtn");
        insertionSortBtn.addEventListener('click', function(e) {
            insertionSortBtn.innerHTML = insertionsortfunction(arraylist);
        })
      
        function insertionsortfunction(arrList) {
            let n=arrList.length;
            for (i=1; i<=n-1; i++ ){
                let j=i;
                let temp;
                while (j>0 && arrList[j-1]> arraylist[j]){
                    temp=arraylist[j];
                    arraylist[j]=arraylist[j-1];
                    arraylist[j-1]=temp;
                    j--;
                }
            }
               
            document.getElementById('answer1').innerHTML="Result by insertion sort: "+ arraylist;
        }
      })();
  