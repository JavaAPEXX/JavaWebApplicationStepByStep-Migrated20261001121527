```java
package com.in28minutes.logout;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.IOException;

@ExtendWith(MockitoExtension.class)
class LogoutServletTest {

    @Mock
    private HttpServletRequest request;

    @Mock
    private HttpServletResponse response;

    @Mock
    private HttpSession session;

    @Mock
    private RequestDispatcher dispatcher;

    @InjectMocks
    private LogoutServlet logoutServlet;

    @Test
    @DisplayName("Given a valid session when doGet is invoked then session is invalidated and request is forwarded to login.jsp")
    void givenValidSession_whenDoGet_thenSessionInvalidatedAndForwardedToLoginJsp() throws ServletException, IOException {
        // Arrange
        when(request.getSession()).thenReturn(session);
        when(request.getRequestDispatcher("/WEB-INF/views/login.jsp")).thenReturn(dispatcher);

        // Act
        logoutServlet.doGet(request, response);

        // Assert
        verify(session, times(1)).invalidate();
        verify(dispatcher, times(1)).forward(request, response);
    }

    @Test
    @DisplayName("Given session.invalidate throws IllegalStateException when doGet is invoked then ServletException is thrown")
    void givenSessionInvalidateThrowsException_whenDoGet_thenServletExceptionThrown() throws IOException {
        // Arrange
        when(request.getSession()).thenReturn(session);
        doThrow(new IllegalStateException("session already invalidated")).when(session).invalidate();

        // Act & Assert
        ServletException thrown = assertThrows(ServletException.class,
                () -> logoutServlet.doGet(request, response));
        assertTrue(thrown.getCause() instanceof IllegalStateException);
        assertEquals("session already invalidated", thrown.getCause().getMessage());

        // Verify that forward is never attempted
        verify(request, never()).getRequestDispatcher(anyString());
    }

    @Test
    @DisplayName("Given null RequestDispatcher when doGet is invoked then NullPointerException is thrown")
    void givenNullRequestDispatcher_whenDo