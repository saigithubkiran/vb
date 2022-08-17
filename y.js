const Find_Prod = (array, N) => 
{
   var s=1;
   for(const values of array)
   {
     s=s*values
   }
   return s

};
const Find_Sum = (array, N) => 
    {
     let sum=0;
     for(let i=0;i< N;i++){
      sum=sum+array[i];
     }
     return sum;
    };
    const findEvenOdd = (N, Arr) => 
    {
        let A=[2];
        let even=0;
        let odd=0;
        for(let i=0;i< N;i++){
          if(Arr[i]%2===0){
            even+=Arr[i];
          }
          else{
            odd+=Arr[i];
          }
        }
        A[0]=even;
        A[1]=odd;
        return A;
    };
    const Find_Num = (array,N,M) => 
    {
      for(var i=0; i< N ; i++){
        if(M === array[i]){
          return "YES";
        }
      }
      return "NO";
    };
     