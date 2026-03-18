package com.example.ordermanagement.state;

import com.example.ordermanagement.context.Order;

public interface OrderState {
    void handle(Order order);
}