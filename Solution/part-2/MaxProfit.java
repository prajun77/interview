public class MaxProfit {
	
    public static int maxProfit(int[] prices) {
        int profit = 0;
        
        int minPrice = Integer.MAX_VALUE;
        // Keep track of minPrice from the stock and the profit
        
        for (int i = 0; i < prices.length; i++){
            minPrice = Math.min(minPrice, prices[i]);
            profit = Math.max(profit, prices[i] - minPrice);
        }
        
        return profit;  
    }

	public static void main(String[] args) {
		
		int[] input1 = new int[] {7,1,5,3,6,4};
		int[] input2 = new int[] {7,6,4,3,1};
		
		int _maxProfit1 = maxProfit(input1); 
		System.out.println("For the input 7,1,5,3,6,4 the max profit is " + _maxProfit1);
		
		int _maxProfit2 = maxProfit(input2); 
		System.out.println("For the input 7,6,4,3,1 the max profit is " + _maxProfit2);
		
	}

}
