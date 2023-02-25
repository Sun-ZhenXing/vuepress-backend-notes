import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

class EnumSingletonTest {
    public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException {
        EnumSingleton instance1 = EnumSingleton.INSTANCE;
        EnumSingleton instance2 = EnumSingleton.INSTANCE;
        System.out.println(instance1 == instance2);
        Constructor<EnumSingleton> declaredConstructor = EnumSingleton.class.getDeclaredConstructor();
        declaredConstructor.setAccessible(true);
        declaredConstructor.newInstance("INSTENCE", 0);
    }
}

enum EnumSingleton {
    INSTANCE;
    public void print() {
        System.out.println(this.hashCode());
    }
}
