package com.example.ordermanagement.state;

import com.example.ordermanagement.context.Order;

public class CancelledState implements OrderState {
    public void handle(Order order) {
        System.out.println("Đơn hàng bị hủy và hoàn tiền!");
    }
}