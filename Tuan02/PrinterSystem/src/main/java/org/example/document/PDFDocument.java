package org.example.document;

public class PDFDocument implements Document {

    @Override
    public void print() {
        System.out.println("Printing PDF document");
    }

}