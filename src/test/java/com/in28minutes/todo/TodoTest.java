```java
package com.in28minutes.todo;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

/**
 * Comprehensive unit tests for {@link Todo}.
 */
@ExtendWith(MockitoExtension.class)
class TodoTest {

    @Test
    @DisplayName("Given valid name and category, when getters are invoked, then return the same values")
    void givenValidNameAndCategory_whenGetters_thenReturnValues() {
        // Arrange
        String name = "Buy milk";
        String category = "Shopping";

        // Act
        Todo todo = new Todo(name, category);

        // Assert
        assertEquals(name, todo.getName(), "Name getter should return the initialized name");
        assertEquals(category, todo.getCategory(), "Category getter should return the initialized category");
    }

    @Test
    @DisplayName("Given null name, when setName is called, then name becomes null")
    void givenNullName_whenSetName_thenNameIsNull