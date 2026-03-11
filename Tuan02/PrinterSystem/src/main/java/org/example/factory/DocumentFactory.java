package org.example.factory;


import org.example.document.Document;
import org.example.document.ImageDocument;
import org.example.document.PDFDocument;
import org.example.document.WordDocument;

public class DocumentFactory {

    public static Document createDocument(String type) {

        if (type.equalsIgnoreCase("PDF")) {
            return new PDFDocument();
        }

        if (type.equalsIgnoreCase("WORD")) {
            return new WordDocument();
        }

        if (type.equalsIgnoreCase("IMAGE")) {
            return new ImageDocument();
        }

        return null;
    }

}
