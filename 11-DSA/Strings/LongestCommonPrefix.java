class LongestCommonPrefix {
    public String longestCommonPrefix(String[] str) {
        // your code goes here
        String res = "";
        if (str.length == 1)
            return str[0];
        int maxLen = LongestCommonPrefix.getMaxLen(str);
        for (int i = 1; i < str.length; i++) {
            String word = str[i];//
            // ---why not here?

            for (int j = 0; j < word.length(); j++) {
                char c = word.charAt(j);
                if (LongestCommonPrefix.isAvailable(str, c, j)) {
                    res += c;
                } else {
                    return res;
                }

                if (res.length() == maxLen)
                    return res; // for all same case
            }
        }
        return res;
    }

    public static boolean isAvailable(String[] str, char s, int index) {
        for (int i = 0; i < str.length; i++) {
            String temp = str[i]; // test
            if (temp.charAt(index) != s)
                return false;
        }
        return true;
    }

    public static int getMaxLen(String[] str) {
        int len = Integer.MAX_VALUE;
        for (String s : str) {
            if (len > s.length()) {
                len = s.length();
            }
        }
        return len;
    }

    public static void main(String[] args) {

        LongestCommonPrefix obj = new LongestCommonPrefix();

        String[][] testCases = {

                { "flower", "flow", "flight" },
                { "dog", "racecar", "car" },
                { "test", "test", "test" },
                { "apple" },
                { "abcd", "abc", "ab" },
                { "interview", "internet", "internal" },
                { "java", "javascript", "javac" },
                { "prefix", "preach", "prevent" },
                { "same", "same" },
                { "a", "ab", "abc" }
        };

        for (int i = 0; i < testCases.length; i++) {

            System.out.println("Test Case " + (i + 1));

            System.out.print("Input : ");

            for (String word : testCases[i]) {
                System.out.print(word + " ");
            }

            System.out.println();

            System.out.println("Output: " + obj.longestCommonPrefix(testCases[i]));

            System.out.println("------------------------------------");
        }
    }
}