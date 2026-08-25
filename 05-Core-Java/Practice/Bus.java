class Bus extends Vehicle{

    String name;
    Bus(String name) {
        this.name = name;
    }
    @Override
    public String toString(){
        return name;
    }

}