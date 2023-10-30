package com.edu.icesi.taller3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages = "com.edu.icesi.taller3")
public class Taller3Application {

	public static void main(String[] args) {
		ApplicationContext ctx=SpringApplication.run(Taller3Application.class, args);  
		String[] allBeanNames = ctx.getBeanDefinitionNames();

        for (String beanName : allBeanNames) {
			if(beanName.contains("author")){
				 System.out.println(beanName);
			}

			if(beanName.contains("book")){
				 System.out.println(beanName);
			}
           
        }          

	}

}
