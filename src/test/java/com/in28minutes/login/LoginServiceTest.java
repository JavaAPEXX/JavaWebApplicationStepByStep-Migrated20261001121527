```java
package com.in28minutes.login;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class LoginServiceTest {

    private LoginService loginService;

    @BeforeEach
    void setUp() {
        loginService = new LoginService();
    }

    @Test
    @DisplayName("Given valid username and password, when validating user, then return true")
    void givenValidUsernameAndPassword_whenIsUserValid_thenReturnTrue() {
        // Arrange
        String validUser = "in28Minutes";
        String validPassword = "dummy";

        // Act
        boolean result = loginService.isUserValid(validUser, validPassword);

        // Assert
        assertTrue(result);
    }

    @Test
    @DisplayName("Given valid username and invalid password, when validating user, then return false")
    void givenValidUsernameAndInvalidPassword_whenIsUserValid_thenReturnFalse() {
        // Arrange
        String validUser = "in28Minutes";
        String invalidPassword = "wrongPassword";

        // Act
        boolean result = loginService.isUserValid(validUser, invalidPassword);

        // Assert
        assertFalse(result);
    }

    @Test
    @DisplayName("Given invalid username and valid password, when validating user, then return false")
    void givenInvalidUsernameAndValidPassword_whenIsUserValid_thenReturnFalse() {
        // Arrange
        String invalidUser = "wrongUser";
        String validPassword = "dummy";

        // Act
        boolean result = loginService.isUserValid(invalidUser, validPassword);

        // Assert
        assertFalse(result);
    }

    @Test
    @DisplayName("Given invalid username and invalid password, when validating user, then return false")
    void givenInvalidUsernameAndInvalidPassword_whenIsUserValid_thenReturnFalse() {
        // Arrange
        String invalidUser = "wrongUser";
        String invalidPassword = "wrongPassword";

        // Act
        boolean result = loginService.isUserValid(invalidUser, invalidPassword);

        // Assert
        assertFalse(result);
    }

    @Test
    @DisplayName("Given null username and valid password, when validating user, then return false")
    void givenNullUsernameAndValidPassword_whenIsUserValid_thenReturnFalse() {
        // Arrange
        String nullUser = null;
        String validPassword = "dummy";

        // Act
        boolean result = loginService.isUserValid(nullUser, validPassword);

        // Assert
        assertFalse(result);
    }

    @Test
    @DisplayName("Given valid username and null password, when validating user, then return false")
    void givenValidUsernameAndNullPassword_whenIsUserValid_thenReturnFalse() {
        // Arrange
        String validUser = "in28Minutes";
        String nullPassword = null;

        // Act
        boolean result = loginService.isUserValid(validUser, nullPassword);

        // Assert
        assertFalse(result);
    }

    @Test
    @DisplayName("Given null username and null password, when validating user, then return false")
    void givenNullUsernameAndNullPassword_whenIsUserValid_thenReturnFalse() {
        // Arrange
        String nullUser = null;
        String nullPassword = null;

        // Act
        boolean result = loginService.isUserValid(nullUser, nullPassword);

        // Assert
        assertFalse(result);
    }

    @Test
    @DisplayName("Given empty username and valid password, when validating user, then return false")
    void givenEmptyUsernameAndValidPassword_whenIsUserValid_thenReturnFalse() {
        //