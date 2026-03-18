package com.example.ordermanagement.decorator;

public class BasicOrder implements OrderService {
    public void process() {
        System.out.println("Xử lý đơn hàng cơ bản");
    }
}