package com.example.taxsystem.context;

import com.example.taxsystem.state.TaxState;

public class TaxContext {
    private TaxState state;

    public void setState(TaxState state) {
        this.state = state;
    }

    public void applyState() {
        state.handle();
    }
}