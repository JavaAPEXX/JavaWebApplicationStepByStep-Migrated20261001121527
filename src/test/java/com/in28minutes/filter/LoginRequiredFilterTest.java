```java
package com.in28minutes.filter;

import static org.mockito.Mockito.*;

import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.IOException;

@ExtendWith(MockitoExtension.class)
class LoginRequiredFilterTest {

    @InjectMocks
    private LoginRequiredFilter filter;

    @Mock
    private HttpServletRequest request;

    @Mock
    private ServletResponse response;

    @Mock
    private FilterChain chain;

    @Mock
    private HttpSession session;

    @Mock
    private RequestDispatcher dispatcher;

    @Mock
    private FilterConfig filterConfig;

    @Test
    @DisplayName("Authenticated user should proceed through the filter chain")
    void givenAuthenticatedUser_whenDoFilter_thenProceedChain() throws IOException, ServletException {
        // Arrange
        when(request.getSession()).thenReturn(session);
        when(session.getAttribute("name")).thenReturn("john.doe");

        // Act
        filter.doFilter(request, response, chain);

        // Assert
        verify(chain, times(1)).doFilter(request, response);
        verify(request, never()).getRequestDispatcher(anyString());
    }

    @Test
    @DisplayName("Unauthenticated user should be forwarded to login page")
    void givenUnauthenticatedUser_whenDoFilter_thenForwardToLogin() throws IOException, ServletException {
        // Arrange
        when(request.get