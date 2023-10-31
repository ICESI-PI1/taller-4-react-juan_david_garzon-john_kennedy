package com.edu.icesi.taller3.security;

import java.util.Date;
import java.util.Map;

import javax.crypto.SecretKey;

import java.util.Collections;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.util.HashMap;

public class TokenUtils {

    private final static String TOKEN_SECRET = "secretsecretsecretsecretsecretsecretsecretsecret";
    private final static Long validTime = 2_590_000L;

    public static String createToken(String username) {
        Long expirationTime = validTime * 1_000;
        Date expirationDate = new Date(System.currentTimeMillis() + expirationTime);
        Map<String, Object> extra = new HashMap<>();
        extra.put("username", username);
        return Jwts.builder()
                .subject(username)
                .expiration(expirationDate)
                .claims(extra)
                .signWith(Keys.hmacShaKeyFor(TOKEN_SECRET.getBytes()))
                .compact();
    }

    public static UsernamePasswordAuthenticationToken getAuthentication(String token) {
        try {
            SecretKey key = Keys.hmacShaKeyFor(TOKEN_SECRET.getBytes());
            Claims claims = Jwts.parser()
                    .verifyWith(key)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();

            String username = claims.getSubject();
            return new UsernamePasswordAuthenticationToken(username, null, Collections.emptyList());
        } catch (JwtException e) {
            return null;
        }

    }

}
