public class HungrySingletonTest {
    public static void main(String[] args) {
        HungrySingleton instence1 = HungrySingleton.getInstance();
        HungrySingleton instence2 = HungrySingleton.getInstance();
        System.out.println(instence1 == instence2);
    }
}

class HungrySingleton {
    private static HungrySingleton instence = new HungrySingleton();
    private HungrySingleton() {
    }
    public static HungrySingleton getInstance() {
        return instence;
    }
}
