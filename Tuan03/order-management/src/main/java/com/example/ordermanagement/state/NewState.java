package com.example.ordermanagement.state;

import com.example.ordermanagement.context.Order;

public class NewState implements OrderState {
    public void handle(Order order) {
        System.out.println("Đơn hàng mới: Kiểm tra thông tin...");
        order.setState(new ProcessingState());
    }
}