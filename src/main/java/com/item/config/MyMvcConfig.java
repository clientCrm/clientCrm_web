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
//        registry.addViewController("/toManager").setViewName("bar/manager");
//        registry.addViewController("/toPerject").setViewName("bar/perject");
    }

}
