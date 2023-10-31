package com.edu.icesi.taller3.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.edu.icesi.taller3.persistence.models.User;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = new User(username, WebSecurityConfig.passwordEncoder().encode(username));
        return new UserDetailsImpl(user);
    }

}
