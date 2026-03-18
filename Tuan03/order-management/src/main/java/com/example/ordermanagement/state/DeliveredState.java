package com.example.ordermanagement.state;

import com.example.ordermanagement.context.Order;

public class DeliveredState implements OrderState {
    public void handle(Order order) {
        System.out.println("Đã giao hàng thành công!");
    }
}