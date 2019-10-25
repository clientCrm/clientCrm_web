package com.item.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyMvcConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry){
        registry.addViewController("/toIndex").setViewName("index");
        registry.addViewController("/test").setViewName("test");
        registry.addViewController("/toManager").setViewName("manager");
        registry.addViewController("/customer").setViewName("customer/customerlist");
        registry.addViewController("/toLogin").setViewName("login");
        registry.addViewController("/contacts").setViewName("customer/contactslist");
        registry.addViewController("/business").setViewName("customer/businesslist");
        registry.addViewController("/product").setViewName("customer/productlist");
    }

}
