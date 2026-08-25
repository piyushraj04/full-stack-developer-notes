class GenericClass<T>{
    T value;
    void setValue(T value){
        this.value = value;
    }
    T getValue(){
        return value;
    }
    public static void main(String[] args) {
        GenericClass<Integer> gc = new GenericClass<>();
        gc.setValue(5);
        System.out.println(gc.getValue());
       
       

    }
}