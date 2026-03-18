package com.example.ordermanagement.state;

import com.example.ordermanagement.context.Order;

public class ProcessingState implements OrderState {
    public void handle(Order order) {
        System.out.println("Đang xử lý: Đóng gói & vận chuyển...");
        order.setState(new DeliveredState());
    }
}