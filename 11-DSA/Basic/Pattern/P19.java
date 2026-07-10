class P19 {
    public static void main(String[] args) {
        int n = 5;
        int stars = n;
        int spaces = 0;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= stars; j++) {
                System.out.print("*");
            }
            for (int j = 1; j <= 2*spaces; j++) {
                System.out.print(" ");
            }
            // for (int j = 1; j <= spaces; j++) {
            //     System.out.print(" ");
            // }
            for (int j = 1; j <= stars; j++) {
                System.out.print("*");
            }
            stars--;
            spaces++;
            System.out.println();
        }
        // System.out.println(stars+" "+spaces);
        for(int i = 1 ; i <= n ; i++){
            stars++;
            spaces--;
            for(int j = 1; j <= stars;j++){
                System.out.print("*");
            }
            for(int j = 1 ; j <= spaces*2 ; j++){
                System.out.print(" ");
            }
              for(int j = 1; j <= stars;j++){
                System.out.print("*");
            }
            System.out.println();
        }



    }
}
