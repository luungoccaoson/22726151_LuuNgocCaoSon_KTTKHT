package com.example.ordermanagement.context;

import com.example.ordermanagement.state.*;
import com.example.ordermanagement.strategy.ShippingStrategy;

public class Order {
    private OrderState state;
    private ShippingStrategy shippingStrategy;

    public Order() {
        state = new NewState();
    }

    public void setState(OrderState state) {
        this.state = state;
    }

    public void nextStep() {
        state.handle(this);
    }

    public void setShippingStrategy(ShippingStrategy strategy) {
        this.shippingStrategy = strategy;
    }

    public void ship() {
        if (shippingStrategy != null) {
            shippingStrategy.ship();
        }
    }
}