public class LazySingletonTest {
    public static void main(String[] args) {
        new Thread(() -> {
            LazySingleton instance = LazySingleton.getInstance();
            System.out.println(instance);
        }).start();
        new Thread(() -> {
            LazySingleton instance = LazySingleton.getInstance();
            System.out.println(instance);
        }).start();
    }
}

class LazySingleton {
    private volatile static LazySingleton instance;
    private LazySingleton() {
    }
    public static LazySingleton getInstance() {
        if (instance == null) {
            synchronized(LazySingleton.class) {
                if (instance == null) {
                    instance = new LazySingleton();
                }
            }
        }
        return instance;
    }
}
