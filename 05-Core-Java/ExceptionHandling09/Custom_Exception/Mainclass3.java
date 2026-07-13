package ExceptionHandling09.Custom_Exception;

class OverSpeedException extends Exception {
    OverSpeedException() {

    }

    OverSpeedException(String msg) {
        super(msg);
    }

}

class DrinkAndDriveException extends RuntimeException {
    DrinkAndDriveException() {

    }

    DrinkAndDriveException(String msg) {
        super(msg);
    }
}

class Police {
    static void checkOverSpeed(int n) throws OverSpeedException {
        if (n > 80) {
            throw new DrinkAndDriveException("Over speed caught...");
        } else {
            System.out.println("Speed is in limit");
        }
    }

    static void checkDrunk(boolean drunk) {
        if (drunk) {
            throw new DrinkAndDriveException("Driver is drunk...");
        } else
            System.out.println("Driver is fine...");
    }

}

public class Mainclass3 {
    public static void main(String[] args) {
        try {
            // Police.checkOverSpeed(81);
            Police.checkDrunk(true);
            Police.checkOverSpeed(25);
        } catch (OverSpeedException e) {
            System.err.println(e.getMessage());
        }
        catch (DrinkAndDriveException e){
            System.err.println(e.getMessage());
        }
    }

}
