class Test {
    public static StringBuilder shiftChar(StringBuilder sb) {
        char c = sb.charAt(0);
        System.out.println(c);
        int i = 0;
        while (i < sb.length() - 1) {
            sb.setCharAt(i, sb.charAt(i + 1));
            i++;
        }
        sb.setCharAt(sb.length() - 1, c);
        return sb;
    }

    public static boolean isReverse(String s, String goal) {
        if(s.equals(goal)) return true;
        int till = 0;
        StringBuilder res = new StringBuilder(s);

        while (till < s.length()) {
            res = Test.shiftChar(res);
            if (res.toString().equals(goal))
                return true;
            till++;
        }
        return false;
    }

    public static void main(String[] args) {
        String s = "abcde";
        String goal = "cdeab";
        System.out.println(Test.isReverse(s, goal));

    }

    // sb.setCharAt(sb.length(), sb.charAt(0));// a---at end inserted
    // sb.delete(0, 1);// a
    // System.out.println(sb);
}
