Feature: Login functionality

  Scenario: Valid user logs in
    Given the user is on the login page
    When the user enters valid credentials
    Then the user should be redirected to the account page




Feature: Login functionality
    As a registered user
    I want to log in to the application
    So that I can access protected features
  
  Scenario: Logging in with valid credentials
    Given I am on the login page
    When I enter username "adarsh" and password "password"
    Then I should be redirected to the dashboard

  Scenario: Logging in with invalid credentials
    Given I am on the login page
    When I enter username "adarsh" and password "wrongpassword"
    Then I should see an error message
