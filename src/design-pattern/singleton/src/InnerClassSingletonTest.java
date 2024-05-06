import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

public class InnerClassSingletonTest {
    public static void main(String[] args) {
        InnerClassSingleton instance1 = InnerClassSingleton.getInstance();
        InnerClassSingleton instance2 = InnerClassSingleton.getInstance();
        System.out.println(instance1 == instance2);
        try {
            Constructor<InnerClassSingleton> declaredConstructor = InnerClassSingleton.class.getDeclaredConstructor();
            declaredConstructor.setAccessible(true);
            InnerClassSingleton instance3 = declaredConstructor.newInstance();
            System.out.println(instance1 == instance3);
            System.out.println(instance2 == instance3);
        } catch (InvocationTargetException e) {
            System.out.println(e);
            Throwable t = e.getTargetException();
            t.printStackTrace();
        } catch (Exception err) {
            System.out.println(err);
        }
    }
}

class InnerClassSingleton {
    private static class InnerClassHolder {
        private static InnerClassSingleton instance = new InnerClassSingleton();
    }
    private InnerClassSingleton() {
        if (InnerClassHolder.instance != null) {
            throw new RuntimeException("Singleton can't new too much instances.");
        }
    }
    public static InnerClassSingleton getInstance() {
        return InnerClassHolder.instance;
    }
}
