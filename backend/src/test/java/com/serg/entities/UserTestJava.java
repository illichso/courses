package com.serg.entities;

import org.junit.Test;

public class UserTestJava {
    @Test
    public void testUserConstructor() throws Exception {
        User user = new User("userName", "password",null);
        System.out.println(user.getPassword());
        System.out.println(user);
    }
}
