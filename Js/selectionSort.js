
    (function() {
        const arraylist=[4,5,22,42,15,23,43,13,1,8];
        const selectionSortBtn=document.getElementById("selectionSortBtn");
        selectionSortBtn.addEventListener('click', function(e) {
            selectionSortBtn.innerHTML = selectionSortfunction(arraylist);
        })
      
        function selectionSortfunction(arrList) {
            let n=arrList.length;
            for (let i = 0; i < n-1; i++) 
        { 
            let min_idx = i; 
            for (let j = i+1; j < n; j++) 
                if (arrList[j] < arrList[min_idx]) 
                    min_idx = j; 
            let temp = arrList[min_idx]; 
            arrList[min_idx] = arrList[i]; 
            arrList[i] = temp; 
        }            
               
            document.getElementById('answer2').innerHTML="Result by selection sort: "+ arraylist;
        }
      })();
  