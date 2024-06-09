package com.template.restapi.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication(scanBasePackages = "com.template.restapi")
public class RestApiBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(RestApiBootApplication.class, args);
    }

}
