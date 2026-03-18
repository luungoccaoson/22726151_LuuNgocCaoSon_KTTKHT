package com.example.ordermanagement.decorator;

public abstract class OrderDecorator implements OrderService {
    protected OrderService orderService;

    public OrderDecorator(OrderService orderService) {
        this.orderService = orderService;
    }
}