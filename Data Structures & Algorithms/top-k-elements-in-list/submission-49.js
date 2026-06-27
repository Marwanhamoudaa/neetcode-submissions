class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let map = new Map()
    //   map : {key => num : value => freq}
      for (let num of nums){
        if(map.has(num)){
            map.set(num, map.get(num) + 1);
        }else{
            map.set(num , 1)
        }
        }

        return Array.from(map.entries()).sort((a,b)=> b[1] - a[1]).slice(0,k).map((a , b )=>a[0])
    }
}
