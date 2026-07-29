

class ReverseListChar{
public static boolean rotateString(String s, String goal) {
        //your code goes here
        if(s.length()!=goal.length()) return false;
        if(s.equals(goal)) return true;
        StringBuilder sb = new StringBuilder(s);
        int i = s.length()-1;
        while(0<=i){
            String res = shiftOneChar(sb).toString();
            if(res.equals(goal)){
                return true;
            }
            i--;
        }
        return false;
    }
    public static StringBuilder shiftOneChar(StringBuilder sb){
        Character temp = sb.charAt(0);
        for(int i = 0; i < sb.length()-1; i++){
            Character nextChar = sb.charAt(i+1);
            sb.setCharAt(i,nextChar);
        }
        sb.insert(sb.length()-1,temp);
        return sb;
    }
   public static void main(String[] args){
      System.out.println(ReverseListChar.rotateString("abcde","cdeab"));
      
                         }
}